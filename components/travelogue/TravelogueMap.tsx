import { Box, Center, Image, Stack, Text, Wrap } from '@chakra-ui/react';
import * as turf from '@turf/turf';
import React, { useState } from 'react';
import { FiMap } from 'react-icons/fi';
import ReactMapGL, {
  Layer,
  Marker,
  NavigationControl,
  Source,
} from 'react-map-gl';
import { TripDetailQuery } from '../../graphql/generated/types';
import useMobileDetect from '../../hooks/useMobileDetect';

const getArchRoute = (originAirport: any, destinationAirport: any) => {
  const start = [parseFloat(originAirport[0]), parseFloat(originAirport[1])];
  const end = [
    parseFloat(destinationAirport[0]),
    parseFloat(destinationAirport[1]),
  ];
  const distance = turf.distance(start, end);
  const midpoint = turf.midpoint(start, end);
  const bearing = turf.bearing(start, end) - 90;
  const destination = turf.destination(midpoint, distance, bearing);

  const curvedLine = turf.lineArc(
    destination,
    turf.distance(destination, start),
    turf.bearing(destination, end),
    turf.bearing(destination, start),
    { steps: 128 }
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps

  return curvedLine;
};

interface Props {
  data: TripDetailQuery;
}

export function TravelogueMap({ data }: Props) {
  const mapCenter = {
    latitude: parseFloat(data.trip?.province.latitude),
    longitude: parseFloat(data.trip?.province.longitude),
    zoom: 8,
  };

  const { isMobile } = useMobileDetect();

  const transferLayer = {
    source: 'route',
    layout: {
      'line-join': 'round',
      'line-cap': 'round',
    },
    paint: {
      'line-color': '#333333',
      'line-width': 3,
    },
  };

  var experiences = data.trip?.experiences?.edges.map((item) => ({
    type: 'FeatureCollection',
    experiencesData: item?.node,
    features: [
      {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'Point',
          coordinates: [
            parseFloat(item?.node?.latitude!),
            parseFloat(item?.node?.longitude!),
          ],
        },
      },
    ],
  }));

  var transfers = data.trip?.transfers.edges.map((item) => ({
    transferData: item?.node,
    midPoint: [
      (parseFloat(item?.node?.src.latitude) +
        parseFloat(item?.node?.destination.latitude)) /
        2,
      (parseFloat(item?.node?.src.longitude) +
        parseFloat(item?.node?.destination.longitude)) /
        2,
    ],
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'LineString',
          coordinates: [
            [
              parseFloat(item?.node?.src.latitude),
              parseFloat(item?.node?.src.longitude),
            ],
            [
              parseFloat(item?.node?.destination.latitude),
              parseFloat(item?.node?.destination.longitude),
            ],
          ],
        },
      },
    ],
  }));

  let steps = 10;

  const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`;

  const SIZE = 20;

  const experiencesMarker = React.useMemo(
    () =>
      experiences?.map((item, index) => (
        <div key={index}>
          <Marker
            longitude={item.features[0].geometry.coordinates[1]}
            latitude={item.features[0].geometry.coordinates[0]}
          >
            <Center
              borderWidth="1px"
              borderColor="gray.800"
              h="2rem"
              minW="2rem"
              borderRadius="full"
              bgColor="green.400"
            >
              <Wrap px="3">
                {item?.experiencesData?.activities.edges.map((experience) => (
                  <Image
                    key={experience?.node?.id}
                    filter={
                      'invert(99%) sepia(99%) saturate(2%) hue-rotate(123deg) brightness(108%) contrast(100%)'
                    }
                    h="15"
                    w="15"
                    src={experience?.node?.svg!}
                    alt=""
                    fallbackSrc="/images/placeholder.png"
                  />
                ))}
              </Wrap>
            </Center>
          </Marker>
        </div>
      )),
    [data]
  );

  const transfersMarker = React.useMemo(
    () =>
      transfers?.map((item, index) => (
        <div key={index}>
          <Marker longitude={item.midPoint[0]} latitude={item.midPoint[1]}>
            <Center
              borderWidth="1px"
              borderColor="gray.800"
              h="2rem"
              w="2rem"
              borderRadius="full"
              bgColor="yellow.400"
            >
              <Image
                filter={
                  'invert(99%) sepia(99%) saturate(2%) hue-rotate(123deg) brightness(108%) contrast(100%)'
                }
                h="15"
                w="15"
                src={item?.transferData?.transferType?.svg!}
                alt=""
                fallbackSrc="/images/placeholder.png"
              />
            </Center>
          </Marker>
          {item.features[0].geometry.coordinates.map((point) => (
            <Marker
              key={`marker-${index}`}
              longitude={point[0]}
              latitude={point[1]}
            >
              <svg
                height={SIZE}
                viewBox="0 0 24 24"
                style={{
                  cursor: 'pointer',
                  fill: 'green',
                  stroke: 'none',
                  transform: `translate(${-SIZE / 2}px,${-SIZE}px)`,
                }}
              >
                <path d={ICON} />
              </svg>
            </Marker>
          ))}
        </div>
      )),
    [data]
  );

  var greatCircles = transfers?.map((item) =>
    getArchRoute(
      item.features[0].geometry.coordinates[0],
      item.features[0].geometry.coordinates[1]
    )
  );

  const [viewport, setViewport] = useState(mapCenter);

  return (
    <Stack>
      <Wrap align="center">
        <FiMap />
        <Text fontWeight="extrabold">نقشه تور</Text>
      </Wrap>
      <Box position="relative">
        {/* <Center
          position="absolute"
          left={'calc(50% - 50px)'}
          top={'calc(50% - 10px)'}
          bgColor="whiteAlpha.900"
          p="2"
          rounded="full"
          zIndex="10"
        >
          <Text fontSize="sm">درحال توسعه</Text>
        </Center> */}
        <Box>
          <ReactMapGL
            mapboxAccessToken="pk.eyJ1IjoibW9oYW1tYWRtYXNvIiwiYSI6ImNrYmFqdWJxNDA2NGwyem4zbjRtcGN5YWkifQ.WtmnjhRsLiqMPNYawpbqQA"
            {...viewport}
            mapStyle="mapbox://styles/mapbox/outdoors-v11"
            // width="100%"
            // height="500px"
            style={{ width: '100%', height: '500px' }}
            scrollZoom={false}
            // dragPan={!isMobile()}
            // dragPan={false}
            // touchZoom={false}
            // touchRotate={false}
            // touchAction="pan-y"
            // onViewportChange={(viewport: any) => setViewport(viewport)}
            cooperativeGestures={true}
            onMove={(evt) => {
              setViewport(evt.viewState);
            }}
          >
            {greatCircles?.map((item, index) => (
              <div key={index}>
                <Source id={`lineSource-${index}`} type="geojson" data={item}>
                  <Layer
                    type="line"
                    id={`lineLayer-${index}`}
                    {...transferLayer}
                    source="route"
                    layout={{
                      'line-join': 'round',
                      'line-cap': 'round',
                    }}
                    paint={{
                      'line-color': '#333333',
                      'line-width': 3,
                    }}
                  />
                </Source>
              </div>
            ))}

            <NavigationControl
              style={{
                right: 10,
                top: 10,
              }}
            />
            {transfersMarker}
            {experiencesMarker}
          </ReactMapGL>
        </Box>
      </Box>
    </Stack>
  );
}

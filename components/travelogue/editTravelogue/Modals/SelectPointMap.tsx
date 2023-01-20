import { Stack, Wrap, Text, Box, Center, Image, Icon } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import ReactMapGL, {
  Layer,
  NavigationControl,
  ScaleControl,
  Source,
  Marker,
} from 'react-map-gl';
import * as turf from '@turf/turf';
import { FiMap } from 'react-icons/fi';
import { TripDetailQuery } from '../../../../graphql/generated/types';
import { HiLocationMarker } from 'react-icons/hi';

interface Props {
  initialLocation: any;
  setLocation: any;
}

export function SelectPointMap({ initialLocation, setLocation }: Props) {
  const mapCenter = {
    latitude: parseFloat(initialLocation.latitude),
    longitude: parseFloat(initialLocation.longitude),
    zoom: 8,
  };

  const [viewport, setViewport] = useState(mapCenter);

  const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`;

  const SIZE = 40;

  return (
    <Stack>
      <Wrap align="center">
        <FiMap />
        <Text fontWeight="extrabold">انتخاب مکان از روی نقشه</Text>
      </Wrap>
      <Box position="relative">
        <Box>
          <ReactMapGL
            mapboxAccessToken="pk.eyJ1IjoibW9oYW1tYWRtYXNvIiwiYSI6ImNrYmFqdWJxNDA2NGwyem4zbjRtcGN5YWkifQ.WtmnjhRsLiqMPNYawpbqQA"
            {...viewport}
            mapStyle="mapbox://styles/mapbox/outdoors-v11"
            // width="100%"
            // height="400px"
            style={{ width: '100%', height: '400px' }}
            scrollZoom={false}
            // dragPan={!isMobile()}
            // dragPan={false}
            // touchZoom={false}
            // touchRotate={false}
            // touchAction="pan-y" // props removed
            cooperativeGestures={true}
            // dragPan={false}
            // touchZoom={false}
            // touchRotate={false}

            // onViewportChange={(viewport: any) => {
            //   setViewport(viewport);
            //   setLocation(viewport);
            // }}  // props removed
            onMove={(evt) => {
              setViewport(evt.viewState);
              setLocation(evt.viewState);
            }}
          >
            <Marker
              key={`marker`}
              longitude={viewport.longitude}
              latitude={viewport.latitude}
            >
              <Icon
                as={HiLocationMarker}
                height={'40px'}
                width={'40px'}
                viewBox="0 0 24 24"
                style={{
                  cursor: 'pointer',
                  fill: 'green',
                  stroke: 'none',
                  transform: `translate(${-40 / 2}px,${-40}px)`,
                }}
              />
            </Marker>
            <NavigationControl
              style={{
                right: 10,
                top: 10,
              }}
            />
          </ReactMapGL>
        </Box>
      </Box>
    </Stack>
  );
}

import { Stack, Wrap, Text, Box, Center } from '@chakra-ui/react';
import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import { FiMap } from 'react-icons/fi';

export function EditTravelogueMap(props: any) {
  const [viewport, setViewport] = useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
  });
  return (
    <Stack>
      <Wrap align="center">
        <FiMap />
        <Text fontWeight="extrabold">نقشه سفر</Text>
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
        <Box style={{ filter: 'blur(5px)' }}>
          <ReactMapGL
            mapboxAccessToken="pk.eyJ1IjoibW9oYW1tYWRtYXNvIiwiYSI6ImNrYmFqdWJxNDA2NGwyem4zbjRtcGN5YWkifQ.WtmnjhRsLiqMPNYawpbqQA"
            {...viewport}
            mapStyle="mapbox://styles/mapbox/outdoors-v11"
            // width="100%"
            // height="500px"
            style={{ width: '100%', height: '500px' }}
            scrollZoom={false}
            dragPan={false}
            touchPitch={false}
            touchZoomRotate={false}

            // onViewportChange={(viewport: any) => setViewport(viewport)}
          />
        </Box>
      </Box>
    </Stack>
  );
}

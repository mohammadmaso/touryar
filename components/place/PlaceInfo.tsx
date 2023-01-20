import { Stack, Wrap, Text, Divider, Link, Button } from '@chakra-ui/react';
import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import { FiInfo, FiLink, FiMap, FiPhone } from 'react-icons/fi';
import { PhoneIcon } from '@chakra-ui/icons';
import { BiLocationPlus } from 'react-icons/bi';

export function PlaceInfo(props: any) {
  const [viewport, setViewport] = useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
  });
  return (
    <Stack w="full" spacing="3">
      <Wrap align="center">
        <FiInfo />
        <Text>اطلاعات</Text>
      </Wrap>
      <ReactMapGL
        //      TODO:  move token to env var.
        mapboxAccessToken="pk.eyJ1IjoibW9oYW1tYWRtYXNvIiwiYSI6ImNrYmFqdWJxNDA2NGwyem4zbjRtcGN5YWkifQ.WtmnjhRsLiqMPNYawpbqQA"
        {...viewport}
        mapStyle="mapbox://styles/mapbox/outdoors-v11"
        // width="100%"
        // height="400px"
        style={{ width: '100%', height: '400px' }}
        // onViewportChange={(viewport: any) => setViewport(viewport)}
        onMove={(evt) => {
          setViewport(evt.viewState);
        }}
        initialViewState={viewport}
      />
      <Button>مسیر‌یابی</Button>
      <Stack fontSize="sm">
        <Wrap justifyContent="space-between">
          <Wrap align="center">
            <FiPhone />
            <Text fontWeight="bold">شماره تلفن</Text>
          </Wrap>
          <Text dir="ltr">+0214423255</Text>
        </Wrap>
        <Divider />
        <Wrap justifyContent="space-between">
          <Wrap align="center">
            <BiLocationPlus />
            <Text fontWeight="bold">آدرس</Text>
          </Wrap>
          <Text dir="ltr">
            ایران - شیراز - نرسیده به جاده فلان - ۱۰ کیلومتر بعد از فلان جا
          </Text>
        </Wrap>
        <Divider />
        <Wrap justifyContent="space-between">
          <Wrap align="center">
            <FiLink />
            <Text fontWeight="bold">وبسایت</Text>
          </Wrap>
          <Link dir="ltr">https://tripper.ir</Link>
        </Wrap>
        <Divider />
      </Stack>
    </Stack>
  );
}

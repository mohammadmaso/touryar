import { Stack, Wrap, Box, Select } from '@chakra-ui/react';
import ReactMapGL, {
  Layer,
  NavigationControl,
  ScaleControl,
  Source,
  Marker,
} from 'react-map-gl';
import React, { useState } from 'react';
import { FiMap } from 'react-icons/fi';
import SectionHeader from '../components/SectionHeader';
import BaseLayout from '../layouts/BaseLayout';

interface Props {}

const Tourmap = (props: Props) => {
  const mapCenter = {
    latitude: 32.4279,
    longitude: 53.688,
    zoom: 6,
  };
  const [viewport, setViewport] = useState(mapCenter);

  return (
    <BaseLayout>
      <Stack>
        <SectionHeader
          title="تور‌ها روی نقشه"
          subTitle="مبدا خود را انتخاب کنید سپس روی مقاصد مورد نظر خود کلیک کنید تا تور‌ها را مشاهده گنید."
        />
        <Select
          size="sm"
          //   onChange={(e) => {
          //     let index = e.target.selectedIndex;
          //     props.onProvinceChange(e.target.value);
          //     // console.log(e.target[index].label);
          //     setProvinceName(e.target[index].label);
          //   }}
          variant="filled"
          placeholder="استان مبدا خود راانتخاب کنید"
        >
          {/* {props?.queries?.provincesOfCountryQuery?.data?.allProvinces?.edges.map(
            (item :any) => (
              <option
                key={item?.node?.id}
                label={item?.node?.name}
                value={item?.node?.id}
              ></option>
            )
          )} */}
        </Select>
        <Box position="relative">
          <Box>
            <ReactMapGL
              mapboxAccessToken="pk.eyJ1IjoibW9oYW1tYWRtYXNvIiwiYSI6ImNrYmFqdWJxNDA2NGwyem4zbjRtcGN5YWkifQ.WtmnjhRsLiqMPNYawpbqQA"
              {...viewport}
              mapStyle="mapbox://styles/mapbox/outdoors-v11"
              // width="100%"
              // height="700px"
              style={{ width: '100%', height: '700px' }}
              scrollZoom={false}
              // dragPan={!isMobile()}
              // dragPan={false}
              // touchZoom={false}
              // touchRotate={false}
              // touchAction="pan-y"
              cooperativeGestures={false}
              // onViewportChange={(viewport: any) => setViewport(viewport)}
            >
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
    </BaseLayout>
  );
};

export default Tourmap;

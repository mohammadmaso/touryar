import { AtSignIcon } from '@chakra-ui/icons';
import {
  Box,
  Center,
  Divider,
  Heading,
  Icon,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Wrap,
} from '@chakra-ui/react';
import React from 'react';
import { BiLocationPlus } from 'react-icons/bi';
import { FiPhone, FiLink } from 'react-icons/fi';
import { HiLocationMarker } from 'react-icons/hi';
import ReactMapGL, { Marker } from 'react-map-gl';
import { SocialButtons } from '../components/SocialButtons';

import BaseLayout from '../layouts/BaseLayout';

export default function Home() {
  return (
    <BaseLayout>
      <SimpleGrid columns={{ base: 1, sm: 1, md: 2 }} spacing="5">
        <Center p="4" rounded="lg" shadow="lg">
          <Stack fontSize="sm">
            <Wrap justifyContent="space-between">
              <Wrap align="center">
                <FiPhone />
                <Text fontWeight="bold">شماره تلفن</Text>
              </Wrap>
              <Link href="tel:+989380374660" dir="ltr">
                +۹۸۹۳۸۰۳۷۴۶۶۰
              </Link>
            </Wrap>
            <Divider />
            <Wrap justifyContent="space-between">
              <Wrap align="center">
                <HiLocationMarker />
                <Text fontWeight="bold">آدرس</Text>
              </Wrap>
              <Text dir="ltr">
                ایران، تهران، مرکز ‌رشد دانشگاه خواجه‌نصیر طوسی
              </Text>
            </Wrap>
            <Divider />
            <Wrap justifyContent="space-between">
              <Wrap align="center">
                <AtSignIcon />
                <Text fontWeight="bold">ایمیل</Text>
              </Wrap>
              <Link dir="ltr">support@mytripper.ir</Link>
            </Wrap>
            <Divider />
            <Wrap justifyContent="center">
              <SocialButtons />
            </Wrap>
          </Stack>
        </Center>

        <Box position="relative">
          <Box>
            <ReactMapGL
              mapboxAccessToken="pk.eyJ1IjoibW9oYW1tYWRtYXNvIiwiYSI6ImNrYmFqdWJxNDA2NGwyem4zbjRtcGN5YWkifQ.WtmnjhRsLiqMPNYawpbqQA"
              mapStyle="mapbox://styles/mapbox/outdoors-v11"
              // width="100%"
              // height="500px"
              style={{ width: '100%', height: '600px' }}
              longitude={51.4482906}
              latitude={35.7407193}
              zoom={15}
              scrollZoom={false}
              // dragPan={!isMobile()}
              // dragPan={false}
              // touchZoom={false}
              // touchRotate={false}
              // touchAction="pan-y"
              cooperativeGestures={false}
              // dragPan={false}
              // touchZoom={false}
              // touchRotate={false}
            >
              <Marker
                key={`marker`}
                longitude={51.4482906}
                latitude={35.7407193}
              >
                <Icon
                  as={HiLocationMarker}
                  height={'30px'}
                  width={'30px'}
                  viewBox="0 0 24 24"
                  style={{
                    cursor: 'pointer',
                    fill: 'green',
                    stroke: 'none',
                    transform: `translate(${-30 / 2}px,${-30}px)`,
                  }}
                />
              </Marker>
            </ReactMapGL>
          </Box>
        </Box>
      </SimpleGrid>
    </BaseLayout>
  );
}

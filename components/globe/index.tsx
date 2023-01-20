import { Flex } from '@chakra-ui/react';
import { useRef } from 'react';
import Globe from 'react-globe.gl';
import { Color, MeshPhongMaterial } from 'three';
import siteConfig from '../../site.config';
import countries from './files/globe-data-min.json';

type Props = {};

const globeMaterial: any = new MeshPhongMaterial({
  bumpScale: 10,
  color: new Color(siteConfig.primaryColors[500]),
  emissive: new Color(0x220038),
  emissiveIntensity: 0.1,
  shininess: 0.7,
});

const GlobeReact = (props: Props) => {
  const globeEl = useRef();

  return (
    <Flex justifyContent={'flex-end'}>
      <Globe
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        backgroundColor="#ffffff00"
        width={500}
        height={500}
        animateIn={true}
        ref={globeEl}
        globeMaterial={globeMaterial}
        // labelLat={(d: any) => d.properties.latitude}
        // labelLng={(d: any) => d.properties.longitude}
        // labelText={(d: any) => d.properties.name}
        // labelSize={(d: any) => Math.sqrt(d.properties.pop_max) * 4e-4}
        // labelDotRadius={(d: any) => Math.sqrt(d.properties.pop_max) * 4e-4}
        // labelColor={() => 'green'}
        showAtmosphere={true}
        atmosphereColor="green"
        labelResolution={2}
        hexPolygonResolution={3}
        waitForGlobeReady={true}
        hexPolygonsData={countries.features}
        hexPolygonMargin={0.7}
        atmosphereAltitude={0.25}
        hexPolygonColor={'rgba(255,255,255, 0.7)'}
      />
    </Flex>
  );
};

export default GlobeReact;

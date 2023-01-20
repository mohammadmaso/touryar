import React, { Component } from 'react';

import Stories from 'react-insta-stories';
import { Story } from 'react-insta-stories/dist/interfaces';
const stories: Story[] = [
  {
    url: '/images/slider/abbas.jpg',
  },
  {
    url: '/images/slider/caleb.jpg',
  },
  {
    url: '/images/slider/mattias.jpg',
  },
];
const LandingGallery = () => {
  return (
    <Stories
      stories={stories}
      defaultInterval={1500}
      height={400}
      width={'100%'}
    />
  );
};

export default LandingGallery;

import { Button, IconButton, useColorModeValue } from '@chakra-ui/react';
import React, { Component } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

export function CarousalNextArrow(props: any) {
  const { className, style, onClick } = props;

  return (
    <div
      //   className={className}
      style={{
        ...style,
        left: '-13px',
        right: 'auto',
        display: 'block',
        transform: 'translate(0, -50%)',
        position: 'absolute',
        top: '50%',
        zIndex: '3',
      }}
      onClick={onClick}
    >
      <IconButton
        aria-label="بعدی"
        colorScheme="primary"
        icon={<FiArrowLeft />}
        rounded="full"
        _focus={{
          borderColor: '#ffffff50',
          borderWidth: '5px',
          borderStyle: 'outer',
        }}
      />
    </div>
  );
}

export function CarousalPrevArrow(props: any) {
  const { className, style, onClick } = props;

  return (
    <div
      //   className={className}
      style={{
        ...style,
        right: '-13px',
        left: 'auto',
        display: 'block',
        transform: 'translate(0, -50%)',
        position: 'absolute',
        top: '50%',
        zIndex: '3',
      }}
      onClick={onClick}
    >
      <IconButton
        aria-label="قبلی"
        colorScheme="primary"
        icon={<FiArrowRight />}
        rounded="full"
        _focus={{
          borderColor: '#ffffff50',
          borderWidth: '5px',
          borderStyle: 'outer',
        }}
      />
    </div>
  );
}

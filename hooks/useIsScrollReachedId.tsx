import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useEventListener } from '@chakra-ui/react';

export default function useIsScrollReachedId(action: any): boolean {
  const [isScrollReached, setIsScrollReached] = useState(false);

  // var target = document.querySelector(`.${className}`);

  const scrollReachDetector = function scrollReachDetector() {
    if (window.scrollY == 100) {
      setIsScrollReached(true);
      action();
    }
  };
  useEventListener('scroll', scrollReachDetector, document, { once: true });
  return isScrollReached;
}

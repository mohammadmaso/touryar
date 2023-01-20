import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import getRandomFilePath from '../utils/selectRandomFile';

export const useRandomPicture = () => {
  const [picturePath, setPicturePath] = useState('');
  const router = useRouter();

  useEffect(() => {
    setPicturePath(getRandomFilePath());
  }, [router.pathname]);

  return picturePath;
};

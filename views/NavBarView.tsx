import React from 'react';

import useIsSignedIn from '../hooks/useIsSignedIn';

import NavBarUserView from './NavBarUserView';
import NavBar from '../components/navbars/Navbar';
import NavButtons from '../components/navbars/NavButtons';

const NavBarView = () => {
  const { isSignedIn } = useIsSignedIn();

  return (
    <>
      <NavBar>{isSignedIn ? <NavBarUserView /> : <NavButtons />}</NavBar>
    </>
  );
};

export default NavBarView;

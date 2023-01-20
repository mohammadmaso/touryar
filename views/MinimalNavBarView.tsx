import React from 'react';

import useIsSignedIn from '../hooks/useIsSignedIn';

import NavBarUserView from './NavBarUserView';
import NavBar from '../components/navbars/Navbar';
import NavButtons from '../components/navbars/NavButtons';
import MinimalNavBar from '../components/navbars/MinimalNavbar';

const MinimalNavBarView = (props: any) => {
  const { isSignedIn } = useIsSignedIn();

  return (
    <>
      <MinimalNavBar selected={props.selected}>
        {isSignedIn ? <NavBarUserView minimal={true} /> : null}
      </MinimalNavBar>
    </>
  );
};

export default MinimalNavBarView;

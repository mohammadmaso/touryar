import { useRouter } from 'next/router';

import { BeatLoader } from 'react-spinners';
import NavButtons from '../components/navbars/NavButtons';
import NavProfile from '../components/navbars/NavProfile';
import { useMeQuery } from '../graphql/generated/types';

interface Props {
  minimal?: boolean;
}

const NavBarUserView = (props: Props) => {
  const router = useRouter();

  // const userData = useContext(UserContext);

  const { loading, error, data } = useMeQuery();

  console.log(error);

  const signOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('refresh-token');

    if (router.pathname == '/') {
      router.push('/');
      router.reload();
    } else {
      router.push('/');
    }
  };

  if (loading) {
    return <BeatLoader size={8} color="#78027a" />;
  }

  if (error) {
    return <NavButtons />;
  }

  return (
    <>
      <NavProfile minimal={props.minimal} user={data?.me} signOut={signOut} />
    </>
  );
};

export default NavBarUserView;

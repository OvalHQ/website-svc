import Cookies from 'js-cookie';
import Login from '../pages/auth/login';
import Personal from '../pages/verification/personal';
import Business from '../pages/verification/business';

const NoAuth = (Component) => {
  const Auth = (props) => {
    // Login data added to props via redux-store (or use react context for example)
    const token = Cookies.get('token');
    let user = Cookies.get('user');
    let organisation = Cookies.get('organisation');

    if (organisation) organisation = JSON.parse(organisation);

    if (token) {
      if (organisation.type === 'business') {
        return <Business />;
      }
      // If user is not logged in, return login component
      return <Personal />;
    } else {
      // If user is logged in, return original component
      return <Component {...props} />;
    }
  };

  // Copy getInitial props so it will run as well
  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return Auth;
};

export default NoAuth;

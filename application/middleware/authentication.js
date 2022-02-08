import Cookies from 'js-cookie';
import router from 'next/router';
import { decodeObject } from '../helpers';
import { getCookie } from '../helpers/cookie';

export const publicRoute = async ({ req, res }) => {
  let authenticated = false;
  try {
    let token = '';
    if (req) token = getCookie('token', req);
    else token = Cookies.get('token');

    if (token) {
      authenticated = true;
      if (res) {
        res.writeHead(302, {
          Location: '/dashboard',
        });

        res.end();
      } else router.push('/auth/login');
    }
  } catch (error) {
    console.log(error);
  }
  return { authenticated };
};

export const privateRoute = async ({ req, res }) => {
  let authenticated = false;
  let query = {};
  try {
    let token = '';
    if (req) {
      token = getCookie('token', req);
      query.auth = decodeObject(getCookie('AUTH', req));
    } else {
      token = Cookies.get('token');
      query.auth = decodeObject(Cookies.get('AUTH'));
    }

    if (!!!token) {
      if (res) {
        res.writeHead(302, {
          Location: '/auth/login',
        });

        res.end();
      } else router.push('/auth/login');
    }
  } catch (error) {
    console.log(error);
  }
  return { authenticated, query };
};

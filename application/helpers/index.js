import debounce from 'lodash/debounce';
import server from '../server';
import { removeCookie, setCookie } from './cookie';

/* Return a string based on error response received from the server */
export const parseError = (error) => {
  let err = '';

  try {
    if (error.response) {
      if (error.response.data) {
        if (error.response.data.message) {
          if (typeof error.response.data.message === 'string') {
            err = error.response.data.message;
          } else {
            Object.keys(error.response.data.message).map(
              (key) =>
                (err += `${key.split('_')} ${
                  error.response.data.message[key]
                } `)
            );
          }
        } else {
          if (error.response.data === 'string') {
            err = error.response.data;
          } else {
            Object.keys(error.response.data).map(
              (key) => (err += `${key.split('_')} ${error.response.data[key]} `)
            );
          }
        }
      }
    }
    return 'Failure: ' + typeof error === 'string'
      ? error
      : err
      ? err
      : error.message || 'Please check your Network';
  } catch (error) {
    return error.message;
  }
};

/* Check if all keys in an object are given a truthy value
Throw an error if any key is falsy */
export const validateObject = (obj) => {
  let err = '';
  for (let item in obj) {
    if (!!obj[item].trim() === false) {
      err += item + ' is required\n';
    }
  }

  if (!!err) throw Error(err);
};

export const generateString = () => {
  const str = Math.random().toString(36).substring(7);

  return str;
};

export const debouncedSearchAPI = debounce(
  async (query) => {
    return await server.search(query);
  },
  800,
  { leading: true }
);

export const maybePluralize = (count, noun, suffix = 's') =>
  `${count} ${noun}${count !== 1 ? suffix : ''}`;

export const timeDifference = (date1, date2) => {
  let difference = date1.getTime() - date2.getTime();

  let daysDifference = Math.floor(difference / 1000 / 60 / 60 / 24);
  difference -= daysDifference * 1000 * 60 * 60 * 24;

  return daysDifference;
};

export const saveToStorage = (data) => {
  setCookie('user', encodeURIComponent(JSON.stringify(data.user)));
  setCookie('profile', encodeURIComponent(JSON.stringify(data.profile)));
  setCookie(
    'organisation',
    encodeURIComponent(JSON.stringify(data.organisation))
  );

  setCookie('token', data.token);

  setCookie('organisation_type', data.organisation.type);
  setCookie('phone', data.profile.phone);
  setCookie('email', data.profile.email);
  setCookie('otp_id', data.otp_id);
};

export const resetStorage = () => {
  removeCookie('user');
  removeCookie('profile');
  removeCookie('organisation');
  removeCookie('token');
  removeCookie('organisation_type');
  removeCookie('phone');
  removeCookie('email');
  removeCookie('otp_id');
};

export const decodeObject = (data) => {
  let temp = decodeURIComponent(data);
  return JSON.parse(temp);
};

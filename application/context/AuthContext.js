import Router from 'next/router';
import { parseError, resetStorage, saveToStorage } from '../helpers';
import { setCookie } from '../helpers/cookie';
import server from '../server';
import { updateProfile } from '../server/api';
import createDataContext from './createDataContext';

let INITIAL_STATE = {
  user: null,
  token: null,
  is_authenticated: false,
  error: null,
  loading: false,
};

const AuthReducer = (state, action) => {
  switch (action.type) {
    case 'REJECTED':
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case 'SAVE':
      return {
        ...state,
        user: action.payload,
        token: action.payload ? action.payload.token : null,
        is_authenticated: true,
        loading: false,
        error: null,
      };
    case 'CLEAR_ERROR_MESSAGE':
      return {
        ...state,
        error: null,
      };
    case 'PENDING':
      return { ...state, loading: true, error: null };
    case 'SIGNOUT':
      return { ...INITIAL_STATE, error: action.payload };
    default:
      return state;
  }
};

const login = (dispatch) => async (params) => {
  try {
    dispatch({ type: 'PENDING' });

    const response = await server({
      url: `/auth/login`,
      method: 'POST',
      data: params,
    });

    const { data: res_data } = response;

    dispatch({ type: 'SAVE', payload: res_data.data });

    saveToStorage(res_data.data);

    if (
      !res_data.data.profile.email_verified ||
      !res_data.data.profile.phone_verified
    ) {
      // Router.push(`/verification/sms`);
      Router.push(`/dashboard`);
    } else if (kyc_verification_id === null) {
      if (res_data.data.organisation.type === 'business') {
        Router.push(`/verification/business/`);
      }
      if (res_data.data.organisation.type === 'personal') {
        Router.push(`/verification/personal/`);
      }
    } else Router.push(`/dashbord`);

    // Router.push(`/verification/${params.account_type}`);
  } catch (error) {
    dispatch({
      type: 'REJECTED',
      payload: parseError(error),
    });
  }
};

const updateUserProfile = (dispatch) => async (user, params) => {
  try {
    dispatch({ type: 'PENDING' });

    const response = await updateProfile(params);
    const { data } = response;

    user.profile = data;

    dispatch({ type: 'SAVE', payload: user });
  } catch (error) {
    dispatch({
      type: 'REJECTED',
      payload: parseError(error),
    });
  }
};

const register = (dispatch) => async (params) => {
  try {
    dispatch({ type: 'PENDING' });

    const response = await server({
      url: `/auth/signup`,
      method: 'POST',
      data: params,
    });
    const { data: res_data } = response;

    dispatch({ type: 'SAVE', payload: res_data.data });

    saveToStorage(res_data.data);

    // Router.push(`/verification/${params.account_type}`);
    Router.push(`/verification/sms`);
  } catch (error) {
    dispatch({
      type: 'REJECTED',
      payload: parseError(error),
    });
  }
};

const validateToken = (dispatch) => async () => {
  try {
    dispatch({ type: 'PENDING' });
    const response = await server({
      url: '/api/users/me',
      method: 'GET',
    });
    const { data } = response;
    const token = localStorage.getItem('token');
    let payload = { ...data, token: token };

    dispatch({ type: 'SAVE', payload: payload });
  } catch (error) {
    if (error.response) {
      if (error.response.status === 401) {
        localStorage.clear();
        dispatch({ type: 'SIGNOUT', payload: 'UNAUTHORIZED' });
      }
    } else {
      dispatch({
        type: 'REJECTED',
        payload: parseError(error),
      });
    }
  }
};

const logout = (dispatch) => async () => {
  try {
    dispatch({ type: 'PENDING' });
    resetStorage();
    Router.push('/');
    dispatch({ type: 'SIGNOUT' });
  } catch (error) {
    dispatch({
      type: 'REJECTED',
      payload: parseError(error),
    });
  }
};

const clear_error_message = (dispatch) => async () => {
  try {
    dispatch({ type: 'CLEAR_ERROR_MESSAGE' });
  } catch (error) {
    dispatch({
      type: 'REJECTED',
      payload: parseError(error),
    });
  }
};

const Context = createDataContext(
  'AUTH',
  AuthReducer,
  {
    login,
    register,
    updateUserProfile,
    logout,
    clear_error_message,
    validateToken,
  },
  INITIAL_STATE
);

export const { Provider: AuthProvider, Context: AuthContext } = Context;

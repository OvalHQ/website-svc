import server from '.';

export const resend_otp = async (otp_id) => {
  let response = await server.post(`/auth/signup/otp/resend/${otp_id}`);
  return response.data;
};

export const verify_otp = async (otp) => {
  let response = await server.post(`/auth/signup/otp/verify`, {
    otp,
  });
  return response.data;
};

export const updateKYC = async (params) => {
  const formData = new FormData();
  Object.keys(params).map((param) => formData.append(param, params[param]));

  /*   for (var pair of formData.entries()) {
    console.log(pair[0] + ', ' + pair[1]);
  } */

  let response = await server.patch(`/kyc?submit=yes`, formData);
  return response.data;
};

export const updateProfile = async (params) => {
  const formData = new FormData();
  Object.keys(params).map((param) => formData.append(param, params[param]));

  let response = await server.patch(`/profile`, formData);
  return response.data;
};

export const earlyAccess = async (email) => {
  let response = await server.post(`/early-access?email=${email}`);
  return response.data;
};

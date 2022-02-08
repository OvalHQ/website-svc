import React, { useContext, useEffect, useState } from 'react';
import Avatar from 'boring-avatars';
import Image from 'next/image';
import DashboardLayout from '../../components/layouts/dashboard';
import SecondaryBtn from '../../components/buttons/secondary-btn';
import MaterialInput from '../../components/inputs/material-input';
import PrimaryBtn from '../../components/buttons/primary-btn';
import UploadModal from '../../components/upload-modal';

import { AuthContext } from '../../context/AuthContext';
import { privateRoute } from '../../middleware/authentication';
import ErrorBox from '../../components/error-box';
import { parseError } from '../../helpers';

const Profile = ({ query }) => {
  // const {
  //   auth: { user },
  // } = query;

  const { state: userState, updateUserProfile } = useContext(AuthContext);

  const [loading, setLoading] = useState(false);
  const [showUpload, setShowUpload] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [avatar, setAvatar] = useState('');
  const [hasChangedAvatar, setHasChangedAvatar] = useState('');
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
  });

  useEffect(() => {
    const { user } = userState;

    if (user) {
      setFormData({
        first_name: user.profile.name_first,
        last_name: user.profile.name_last,
        email: user.profile.email,
      });
      setAvatar(user.profile.avatar);
    }
  }, [userState]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleProfile = (e) => {
    setLoading(true);
    setErrorMessage('');
    try {
      let empty_fields = Object.keys(formData).map(
        (key) => !!!formData[key] && key.split('_').join(' ')
      );
      empty_fields = empty_fields.filter((field) => !!field);

      if (empty_fields.length > 0) {
        throw Error(
          `Please fill in the following fields ${empty_fields.join(', ')}`
        );
      }

      const params = {
        name_first: formData.first_name,
        name_last: formData.last_name,
        email: formData.email,
      };

      if (hasChangedAvatar) params.avatar = formData.avatar;

      console.log(params);

      updateUserProfile(userState.user, params);
    } catch (error) {
      setErrorMessage(parseError(error));
    }
    setLoading(false);
  };

  const handleAvatarUpload = async (upload) => {
    setLoading(true);
    try {
      setFormData({ ...formData, avatar: upload[0][0] });
      setHasChangedAvatar(true);
      setShowUpload(false);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <DashboardLayout title="Profile" sidebar="inner">
      <div className="w-full max-w-screen-lg min-h-screen">
        <div className="flex flex-start items-center gap-x-8 mb-6">
          {avatar ? (
            <Image
              src={avatar}
              className="w-24 h-24 rounded"
              width="96px"
              height="96px"
              objectFit="cover"
              objectPosition="top"
            />
          ) : (
            <Avatar
              size={'6rem'}
              name="Amelia Earhart"
              variant="beam"
              colors={['#00BCB0', '#5630FF']}
            />
          )}
          <SecondaryBtn
            placeholder="Upload"
            color="text-primary"
            onClick={() => setShowUpload(true)}
          />
          <SecondaryBtn placeholder="Remove" />
        </div>
        <div>
          <p className="text-xs text-gray-400">
            {formData.avatar && formData.avatar.name}
          </p>
        </div>
        <ErrorBox
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
        />
        <div className="md:flex items-center gap-x-6 w-full md:w-1/2">
          <MaterialInput
            container="w-full md:w-1/2"
            label="First name"
            placeholder="Enter first name"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
          />
          <MaterialInput
            container="w-full md:w-1/2 mt-8 md:mt-0"
            label="Last name"
            placeholder="Enter last name"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center gap-x-6 w-full md:w-1/2 mt-6">
          <MaterialInput
            container="w-full md:w-1/2"
            label="Email address"
            placeholder="Enter Email address"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="my-8">
          <PrimaryBtn
            placeholder="Update"
            width="w-32"
            onClick={handleProfile}
            loading={loading || userState.loading}
          />
        </div>
        <div className="w-full h-px border-t border-gray-200 mb-8" />
        <h3 className="text-title text-sm font-medium mb-6">Change password</h3>
        <div className="md:flex items-center gap-x-6 w-full md:w-1/2">
          <MaterialInput
            type="password"
            container="w-full md:w-1/2"
            label="Old password"
            placeholder="Enter old password"
          />
          <MaterialInput
            type="password"
            container="w-full md:w-1/2 mt-8 md:mt-0"
            label="New password"
            placeholder="Enter new password"
          />
        </div>
        <div className="my-8">
          <PrimaryBtn
            placeholder="Change password"
            width="w-48"
            style={{ opacity: 0.4 }}
            onClick={() => null}
          />
        </div>
      </div>

      <UploadModal
        isOpen={showUpload}
        setIsOpen={setShowUpload}
        name="personal_documents"
        handleComplete={handleAvatarUpload}
        multiple={false}
      />
    </DashboardLayout>
  );
};

Profile.getInitialProps = privateRoute;

export default Profile;

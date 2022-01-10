import React from 'react';
import Head from 'next/head';

import AppLayout from '../components/AppLayout';
import UserEditForm from './userEditForm';
import FollowList from './followList';

const followingList = [{ userName: 'hyewon' }, { userName: 'James' }, { userName: 'Tom' }];
const followerList = [{ userName: 'hyewon' }, { userName: 'James' }, { userName: 'Tom' }];

const Profile = () => {
  return (
    <>
      <Head>
        <title>내 프로필 | NodeBird</title>
      </Head>
      <AppLayout>
        <UserEditForm />
        <FollowList header="팔로잉 목록" data={followingList} />
        <FollowList header="팔로워 목록" data={followerList} />
      </AppLayout>
    </>
  );
};

export default Profile;

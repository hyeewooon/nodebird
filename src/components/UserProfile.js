import React, { useCallback } from 'react';
import { Card, Avatar, Button } from 'antd';
import { useDispatch } from 'react-redux';

import { logoutAction } from '../../reducers';

const UserProfile = () => {
  const dispatch = useDispatch();
  const LogOut = useCallback(() => {
    dispatch(logoutAction());
  }, []);

  return (
    <Card
      actions={[
        <div key="post">
          게시글
          <br />0
        </div>,
        <div key="followings">
          팔로잉
          <br />0
        </div>,
        <div key="followers">
          팔로워
          <br />0
        </div>
      ]}
    >
      <Card.Meta avatar={<Avatar>USER</Avatar>} title="user" />
      <Button onClick={LogOut}>로그아웃</Button>
    </Card>
  );
};

export default UserProfile;

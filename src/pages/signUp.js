import React, { useState, useCallback } from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import { Input, Form, Button } from 'antd';

import AppLayout from '../components/AppLayout';

const SignUp = () => {
  const [signUpInfo, setSignUpInfo] = useState({
    userName: '',
    id: '',
    password: ''
  });

  const [passwordError, setPasswordError] = useState({
    error: false,
    confirmPassword: ''
  });

  const changeForm = useCallback(
    (e) => {
      const { name, value } = e.target;

      setSignUpInfo({
        ...signUpInfo,
        [name]: value
      });
    },
    [signUpInfo]
  );

  const checkPassword = useCallback(
    (e) => {
      const { value } = e.target;

      setPasswordError({
        error: value !== signUpInfo.password,
        confirmPassword: value
      });
    },
    [signUpInfo.password]
  );

  const submit = useCallback(() => {
    if (signUpInfo.password !== passwordError.confirmPassword) {
      setPasswordError({
        ...passwordError,
        error: true
      });
      return;
    }

    console.log(signUpInfo);
  }, [signUpInfo, passwordError]);

  return (
    <>
      <Head>
        <title>회원가입 | NodeBird</title>
      </Head>
      <AppLayout>
        <Form onFinish={submit}>
          <BlockingChromeAutoComplete type="text" name="userName" tabIndex={-1} />
          <BlockingChromeAutoComplete type="password" name="password" tabIndex={-1} />
          <div>
            <label htmlFor="userName">닉네임</label>
            <br />
            <Input name="userName" value={signUpInfo.userName} required onChange={changeForm} />
          </div>
          <div>
            <label htmlFor="id">아이디</label>
            <br />
            <Input name="id" value={signUpInfo.id} required onChange={changeForm} />
          </div>
          <div>
            <label htmlFor="password">비밀번호</label>
            <br />
            <Input name="password" type="password" value={signUpInfo.password} required onChange={changeForm} />
          </div>
          <div>
            <label htmlFor="passwordCheck">비밀번호 확인</label>
            <br />
            <Input
              name="passwordCheck"
              type="password"
              value={passwordError.confirmPassword}
              required
              onChange={checkPassword}
            />
            {passwordError.error && <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>}
          </div>
          <ButtonWrapper>
            <Button type="primary" htmlType="submit">
              가입하기
            </Button>
          </ButtonWrapper>
        </Form>
      </AppLayout>
    </>
  );
};

const BlockingChromeAutoComplete = styled.input`
  position: absolute;
  top: -9999px;
`;

const ErrorMessage = styled.div`
  color: red;
`;

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

export default SignUp;

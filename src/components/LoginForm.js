import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import { Form, Input, Button } from 'antd';
import styled from 'styled-components';

import useInput from '../../hooks/useInput';

const LoginForm = ({ setIsLoggedIn }) => {
  const [loginInfo, setLoginInfo] = useState({
    id: '',
    password: ''
  });
  // 컴포넌트에 props로 넘겨주는 함수는 useCallback 적용. 최적화.
  // useCallback은 함수를 캐싱
  // useMemo는 값을 캐싱
  const changeInput = useCallback(
    (e) => {
      setLoginInfo({
        ...loginInfo,
        [e.target.name]: e.target.value
      });
    },
    [loginInfo]
  );

  // const style = useMemo(
  //   () => ({
  //     marginTop: 10
  //   }),
  //   []
  // );

  const submitForm = useCallback(() => {
    const { id, password } = loginInfo;
    console.log(id, password);
    setIsLoggedIn(true);
  }, [loginInfo]);

  return (
    <FormWrapper onFinish={submitForm}>
      <div>
        <label htmlFor="id">아이디</label>
        <br />
        <Input name="id" value={loginInfo.id} onChange={changeInput} required />
      </div>
      <div>
        <label htmlFor="password">비밀번호</label>
        <br />
        <Input name="password" type="password" value={loginInfo.password} onChange={changeInput} required />
      </div>
      <ButtonWrapper>
        <Button type="primary" htmlType="submit" loading={false}>
          로그인
        </Button>
        <Link href="/signup">
          <a>
            <Button>회원가입</Button>
          </a>
        </Link>
      </ButtonWrapper>
    </FormWrapper>
  );
};

const FormWrapper = styled(Form)`
  padding: 10px;
`;

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

export default LoginForm;

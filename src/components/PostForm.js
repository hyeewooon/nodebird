import React, { useCallback, useState, useRef } from 'react';
import { Button, Form, Input } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import { addPost } from '../../reducers/post';

const PostForm = () => {
  const [text, setText] = useState('');
  const { imagePaths } = useSelector((state) => state.post);
  const ImageInputRef = useRef();
  const dispatch = useDispatch();
  const onSubmit = useCallback(() => {
    // dispatch에 액션 객체 넣어주기
    dispatch(addPost);
    setText('');
  }, []);
  const ChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);
  const clickImageUpload = useCallback(() => {
    ImageInputRef.current.click();
  }, [ImageInputRef.current]);

  return (
    <Form style={{ margin: '10px 0 20px' }} encType="multipart/form-data" onFinish={onSubmit}>
      <Input.TextArea value={text} onChange={ChangeText} maxLength={148} placeholder="어떤 신기한 일이 있었나요?" />
      <div>
        <input type="file" multiple hidden ref={ImageInputRef} />
        <Button onClick={clickImageUpload}>이미지 업로드</Button>
        <Button type="primary" style={{ float: 'right' }} htmlType="submit">
          저장
        </Button>
      </div>
      <div>
        {imagePaths.map((v) => (
          <div style={{ display: 'inline-block' }}>
            <img src={v} alt={v} style={{ width: '200px' }} />
            <div>
              <Button>제거</Button>
            </div>
          </div>
        ))}
      </div>
    </Form>
  );
};

export default PostForm;

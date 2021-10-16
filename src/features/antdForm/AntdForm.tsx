import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
    // decrement,
    changeName,
    // incrementByAmount,
    // incrementAsync,
    // incrementIfOdd,
    selectName,
} from './formSlice';
import styles from './Counter.module.css';
import { Form, Input, Button, Checkbox } from 'antd';


export const AntdForm = () => {
    const dispatch = useAppDispatch();

    const onFinish = (values: any) => {
        console.log('Success:', values);
        dispatch(changeName(values))
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            // initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="name"
                name="name"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>

            {/*<Form.Item*/}
            {/*  label="Password"*/}
            {/*  name="password"*/}
            {/*  rules={[{ required: true, message: 'Please input your password!' }]}*/}
            {/*>*/}
            {/*  <Input.Password />*/}
            {/*</Form.Item>*/}

            {/*<Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>*/}
            {/*  <Checkbox>Remember me</Checkbox>*/}
            {/*</Form.Item>*/}

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
          Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

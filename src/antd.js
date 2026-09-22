import React from 'react';
import { Button, Checkbox, Form, Input, } from 'antd';
import { Tabs } from 'antd';

const operations = <Button>Sign up</Button>;




export const AntdForm = () => {

  const items = [
    {
      key: '1',
      label: 'Home',
      children: 'Content of Tab Pane 1',
    },
    {
      key: '2',
      label: 'About',
      children: 'Content of Tab Pane 2',
    },
    {
      key: '3',
      label: 'Contact',
      children: 'Content of Tab Pane 3',
    },
  ];

  return (
    <>

      <Tabs tabBarExtraContent={operations} items={items}
        style={{
          width: "80%",
          margin: "0 auto",
        }}
      />


      <div style={{ display: "flex", justifyContent: "center", height: '50vh', margin: '150px 0px 0px' }}>

        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{
            maxWidth: 600, border: "1px solid #d9d9d9", padding: "50px 30px", borderRadius: "10px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
          initialValues={{ remember: true }}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            label="City"
            name="city"
            rules={[{ required: true, message: 'Please input your city!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked" label={null} wrapperCol={{ span: 24 }}>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item label={null} wrapperCol={{ span: 24 }}>
            <div>
              <Button type="primary" htmlType="submit" style={{ fontSize: "16px" }}>
                Submit
              </Button>
            </div>
          </Form.Item>
        </Form>

      </div>

    </>

  )
};

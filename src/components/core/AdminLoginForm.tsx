import { Button, Checkbox, Form, Input, message } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
function AdminLoginForm() {

  const navigate = useNavigate();

  // useEffect(() => {
  //   if (isAdmin) {
  //     navigate('/dashboard')
  //   }
  // }, [isAdmin, navigate])

  const onFinish = async (values: any) => {
    // const response = await adminLogin({
    //   variables: { username: values.username, password: values.password }
    // })

    // if (response.data?.adminLogin.success) {
    //   JWTManager.setToken(response.data.adminLogin.accessToken as string)
    //   setIsAuthenticated(true)
    //   setIsAdmin(true)
    //   navigate('/dashboard')
    // } else {
    //   if (response.data?.adminLogin.message) setErrorMessage(response.data.adminLogin.message)
    // }
  };
  return (
    <>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
        style={{
          height: "20%",
          width: "40%",
          position: "absolute",
          top: "20%",
          left: "25%",
        }}
      >
        <Form.Item name="logo">
          <img
            src={logo}
            alt="logo"
            className="admin_logo"
            style={{ width: "80%", position: "relative", left: "50%" }}
          />
        </Form.Item>
        {/* {errorMessage && <p style={{ color: "red", textAlign: "center", fontSize: "20px" }}>{errorMessage}</p>} */}
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Username không được để trống!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Password không được để trống!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>

  );
}

export default AdminLoginForm;

import { Button, Checkbox, Form, Input } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/images/logo.png";

function Login() {

  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState('')

  const handleFinish = async (values: any) => {



  }

  return (
    <div className="login">
      <div className="login--logo">
        <img src={logo} alt="logo-sen-shop" />
      </div>
      {errorMessage && <p style={{ color: "red", textAlign: "center", fontSize: "20px" }}>{errorMessage}</p>}
      <div className="login--form">
        <Form
          className="form--form"
          layout="vertical"
          wrapperCol={{ span: 24 }}
          name="login"
          autoComplete="off"
          onFinish={handleFinish}
        >
          <Form.Item
            name="username"
            label="Tên đăng nhập"
            rules={[{ required: true, message: "Tên đăng nhập không được để trống!" }]}
          >
            <Input className="input--css" />
          </Form.Item>
          <Form.Item
            name="password"
            label="Mật Khẩu"
            rules={[
              {
                required: true,
                message: "Mật khẩu không được bỏ trống!"
              },
              {
                min: 8, message: "Độ dài từ 8 kí tự"
              }
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Nhớ mật khẩu</Checkbox>
          </Form.Item>
          <Form.Item name="submit">
            <Button
              type="primary"
              htmlType="submit"
            >
              Đăng nhập
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className="logout-another">
        <p
          style={{ marginLeft: "240px", fontSize: "20px" }}
        >
          Hoặc
        </p>
        <div className="facebook-google">
          <Button
            className="facebook-google--css"
          >
            <a href="https://ebe9-2001-ee0-5321-4c10-ed8c-8b48-54bc-9568.ap.ngrok.io/auth/facebook">

              Facebook
            </a>
          </Button>
          <Button
            className="facebook-google--css"
          // onClick={google}
          >
            Google
          </Button>
        </div>
      </div>
      <div className="login--text">
        <p>
          Bạn chưa có tài khoản?
          <span>
            <a>Đăng ký</a>
          </span>
        </p>
      </div>
    </div>
  );
}
export default Login;

import React, { useState } from "react";
import { Form, Input, Button, message, PageHeader } from "antd";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const loginData = JSON.parse(localStorage.getItem("data"))

  const onFinish = (values) => {
    const gjejPassword = loginData.filter((data) => data.password === password);
    const gjejEmail = loginData.filter((data) => data.email === email);
    if (gjejEmail.length === 0 || gjejPassword.length === 0) {
      message.error("Emaili ose Passwordi nuk eshte i sakte!");
      return;
    }
   
    

    if (email.includes("admin")) {
      navigate("/regjistro");
    } else {
      navigate("/kryefaqja");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
   <>
   <PageHeader
     className="site-page-header"
     title="Identifikohuni duke perdorur te dhenat tuaja"
   
   />
    <div style={{width:"77%",marginLeft:"auto",marginTop:50}}>
      <Form
        layout="vertical"
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Emaili nuk mund te jete bosh!!",
            },
          ]}
        >
          <Input value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Passwordi nuk mund te jete bosh!",
            },
          ]}
        >
          <Input.Password
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Hyr
          </Button>
        </Form.Item>
      </Form>
    </div>
   </>
  );
};

export default Login;

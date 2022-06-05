import { useState } from "react";
import { Form, Input, Button, message, Row, Col, PageHeader } from "antd";
import { Select } from "antd";
import { useNavigate } from "react-router-dom";

import Tabela from "./Tabela";

export default function Regjistro() {
  const history = useNavigate();

  const [data, setData] = useState({
    emer: "",
    mbiemer: "",
    adresa: "",
    vendlindja: "",
    datelindja: "",
    gjinia: "",
    atesia: "",
    amesia: "",
    email: "",
    password: "12345678",
  });
  const [form] = Form.useForm();
  const { Option } = Select;

  const [teDhenat, setTeDhenat] = useState([
    {
      emer: "Admin",
      mbiemer: "Admin",
      adresa: "Test",
      vendlindja: "Test",
      datelindja: "test",
      gjinia: "test",
      atesia: "test",
      amesia: "test",
      email: "admin@email.com",
      password:"adminadmin"
    },
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  //
  const handleSubmit = (values) => {
    const filter = Object.values(data).every((el) => el.length == 0);

    if (filter) {
      message.error("Ju lutem plotesoni te gjitha fushat!");
      return;
    }
    const submit = [...teDhenat, data];
    console.log(submit);
    setTeDhenat(submit);
    localStorage.setItem("data", JSON.stringify(submit));
    message.success("Regjistrimi u krye me sukses!");

    setData({
      ...data,
      mbiemer: "",
      adresa: "",
      vendlindja: "",
      datelindja: "",
      gjinia: "",
      atesia: "",
      amesia: "",
      email: "",
    });
  };
  console.log(JSON.parse(localStorage.getItem("data")), "sdsd");

  return (
    <>
      <PageHeader
        className="site-page-header"
        title="Regjistroni nje Individ"
        extra={[
          <Button key="3" onClick={() => history("/")}>
            Logout
          </Button>,
        ]}
      />
      <Form
        layout={"horizontal"}
        form={form}
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 22 }}
      >
        <Row justify="center" style={{ margin: 20 }}>
          <Col span={12}>
            <Form.Item label="Emer">
              <Input
                placeholder="Ju lutem vendosni emrin!"
                name="emer"
                value={data.emer}
                onChange={handleChange}
              />
            </Form.Item>
            <Form.Item label="Mbiemer">
              <Input
                placeholder="Ju lutem vendosni mbiemrin!"
                name="mbiemer"
                value={data.mbiemer}
                onChange={handleChange}
              />
            </Form.Item>
            <Form.Item label="Vendlindja">
              <Input
                placeholder="Ju lutem vendosni vendlindjen"
                name="vendlindja"
                value={data.vendlindja}
                onChange={handleChange}
              />
            </Form.Item>
            <Form.Item label="Datelindja">
              <Input
                placeholder="Ju lutem vendosni datelindjen"
                name="datelindja"
                value={data.datelindja}
                onChange={handleChange}
              />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item label="Gjinia">
              <Select
                value={data.gjinia}
                onChange={(value) => setData({ ...data, gjinia: value })}
              >
                <Option value="mashkull">Mashkull</Option>
                <Option value="femer">Femer</Option>
              </Select>
            </Form.Item>
            <Form.Item label="Atesia">
              <Input
                placeholder="Vendosni atesine"
                name="atesia"
                value={data.atesia}
                onChange={handleChange}
              />
            </Form.Item>
            <Form.Item label="Amesia">
              <Input
                placeholder="Vendosnine amesine"
                name="amesia"
                value={data.amesia}
                onChange={handleChange}
              />
            </Form.Item>
            <Form.Item label="Email">
              <Input
                placeholder="Ju lutem vendosni emailin"
                name="email"
                value={data.email}
                onChange={handleChange}
              />
            </Form.Item>
          </Col>
        </Row>
        <Button
          type="primary"
          onClick={handleSubmit}
          style={{ marginLeft: 15 }}
        >
          Regjistro
        </Button>
      </Form>

      <Tabela data={JSON.parse(localStorage.getItem("data"))} />
    </>
  );
}

import React from 'react'
import { Form, Input, Button, message, Row, Col, PageHeader,Modal,Select } from "antd";

export default function Update({data,handleSubmit,handleChange,setData}) {
    const [form] = Form.useForm();
    const { Option } = Select;

  return (
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
        
      </Form>  )
}

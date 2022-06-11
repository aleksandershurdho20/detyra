import React from 'react'
import { Table,  PageHeader,Button ,Form, Input, InputNumber, Popconfirm, Typography } from 'antd';


const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};
export default function Tabela({data,handleDelete,handleUpdate}) {
    const kolonat = [
        {
          title: 'Emer',
          dataIndex: 'emer',
          key: 'emer',
        },
        {
          title: 'Mbiemer',
          dataIndex: 'mbiemer',
          key: 'mbiemer',
        },
        {
          title: 'Vendlindja',
          dataIndex: 'vendlindja',
          key: 'vendlindja',
        },
        {
            title:"Gjinia",
            dataIndex:"gjinia",
            key:"gjinia"
        },
        {
            title:"Atesia",
            dataIndex:"atesia",
            key:"atesia"
        },
        {
            title:"Amesia",
            dataIndex:"amesia",
            key:"amesia"

        },
        {
          title:"Email",
          dataIndex:"email",
          key:"email"

      },
      {
        title:"Actions",
        dataIndex:"Actions",
        render:(_,record) =>{
          console.log(record)
          return (
            <>
               <Button onClick={()=>handleUpdate(record)}>Update</Button>

                <Button type='danger' style={{marginLeft:8}} onClick={()=>handleDelete(record.id)}>Delete</Button>
            </>

          )
        }
      }
      ];
      
  return (
    <>
       <PageHeader
        className="site-page-header"
        title="Te dhenat e regjistruara"

    
    />
      <Table dataSource={data} columns={kolonat}  components={{
          body: {
            cell: EditableCell,
          },
        }} />

    
    </>
  )
}

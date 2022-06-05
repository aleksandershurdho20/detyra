import React from 'react'
import { Table,  PageHeader } from 'antd';

export default function Tabela({data}) {
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
      ];
      
  return (
    <>
       <PageHeader
        className="site-page-header"
        title="Te dhenat e regjistruara"

    
    />
      <Table dataSource={data} columns={kolonat} />

    
    </>
  )
}

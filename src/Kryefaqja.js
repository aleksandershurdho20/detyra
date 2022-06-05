import React from 'react'
import { PageHeader,Button } from 'antd'
import { useNavigate } from 'react-router-dom';
export default function Kryefaqja() {
    const history = useNavigate();

    const dataArray = JSON.parse(localStorage.getItem("data"))
    const userName = dataArray[dataArray.length-1].emer
    const info = dataArray[dataArray.length-1]

  return (
    <>
    
    <PageHeader
        className="site-page-header"
        title={'Pershendetje' +" " + userName}
        extra={[
          <Button key="3" onClick={() => history("/")}>
            Logout
          </Button>,
        ]}
      />
      
      <p style={{color:"#746868",fontSize:18,margin:15}}>Te dhenat e gjeneruara</p>
      <table class="content-table">
          <thead>
            <tr>
            <th>Emer</th>
            <th>Mbiemer</th>
            <th>Atesia</th>
            <th>Adresa</th>
            <th>Amesia</th>

            <th>Vendlindja</th>
            <th>Datelindja</th>
            <th>Email</th>

            </tr>

          </thead>
          <tbody>
                <tr>
                    <td>{userName}</td>
                    <td>{info.mbiemer}</td>
                    <td>{info.atesia}</td>
                    <td>{info.amesia}</td>

                    <td>{info.adresa}</td>
                    <td>{info.vendlindja}</td>
                    <td>{info.datelindja}</td>
                    <td>{info.email}</td>
                </tr>
          </tbody>
        </table>
    
      
      </>
  )
}

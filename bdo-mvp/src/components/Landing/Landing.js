/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
// yarn add antd

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import { Layout, Breadcrumb} from 'antd';
import { Form, Row, Col, Menu, Dropdown } from "antd"
import Input from "../Input/input";
import Button from "../Button/Button";
import Card from '../Card/card';
import Icon from '@ant-design/icons';


const {  Footer, Content } = Layout;

function Landing() {
 
  const [selectedPlayer, setSelectedPlayer] = useState('');
  const [visible, setVisible] = useState(false);
  const onSelect = name => {
    setSelectedPlayer(name);
    setVisible(true);
  }

  function handleButtonClick(e) {
    message.info('Click on left button.');
    console.log('click right button', e);
  }

  function handleMenuClick(e) {
    message.info('Click on menu item.');
    console.log('click', e);
  }
  const rules = {
    IdNumber: [
      {
        required: true,
        max: 20,
        min: 3,
        message: "Por favor ingrese su documento de identidad valido"
      },
    ],
  }
  const onFinish = (values) => {
    console.log("Received values of form: ", values)
  }

  const menu = (
    <Menu>
      <Menu.Item key="0">
      <Menu.Item key="3">Cedula de Ciudadanía</Menu.Item>
      </Menu.Item>
      <Menu.Item key="1">
      <Menu.Item key="3">Tarjeta de Identidad</Menu.Item>
      </Menu.Item>
      <Menu.Item key="3">Otro </Menu.Item>
    </Menu>
  );
  

    
   
  
    return (
      <Layout>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item></Breadcrumb.Item>
        </Breadcrumb>
        <div className="container-layout" style={{ padding: 24, minHeight: 455 }}>
        <Card title="MVP BDO"
      subtitle="Instruccion: ingresar documento">
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: false,
        }}
        onFinish={onFinish}>

    <Dropdown.Button onClick={handleButtonClick} overlay={menu}>
      Tipo de Documento
    </Dropdown.Button>
     
      <Form.Item name="IdNumber" rules={rules.IdNumber}>
          <Input  placeholder="documento de identidad" />
        </Form.Item>
        <Row gutter={[10, 10]} justify="center">
          <Col span={24}>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Continuar
            </Button>
          </Col>

          <Form.Item>
            <Link to="/src/components/Home/Home.js">
              <p className="backLogin"></p>
            </Link>
          </Form.Item>
        </Row>
      </Form>
    </Card>
          <br></br>
            </div>
      </Content>
       <Footer className="footer"style={{ textAlign: 'center' }}>MVP FOOTER</Footer>
       
    </Layout>
    );
  }

  
  export default Landing;
  
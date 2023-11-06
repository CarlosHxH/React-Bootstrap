import React, { useState } from 'react';
import Icons from './components/Icons';
import Db from './lib/storage';
import Loader from './components/Loader';

import {
  Container,
  Row,
  Col,
  Button,
  Navbar,
  Nav,
  NavDropdown,
} from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import InputGroup from 'react-bootstrap/InputGroup';
import Badge from 'react-bootstrap/Badge';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';

import './App.css';

const user = new Db('user');
const prod = new Db('prod');
const cate = new Db('cate');

function App() {
  const [show, setShow] = useState(false);
  const [formdata, setFormData] = useState({});
  const [data, setData] = useState([]);

  React.useEffect(() => sync(), []);

  const sync = () => {
    const all = user.allData;
    setData(all);
    setFormData([]);
  };

  const toggleSidebar = () => setShow(!show);

  const change = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formdata, [name]: value });
  };
  const update = (id) => {
    user.findById(id).then((e) => setFormData(e));
  };
  const submit = () => {
    !formdata['id']
      ? user
          .create(formdata)
          .then((res) => {
            console.log('created: ', res);
            sync();
          })
          .catch((err) => console.log('error: ', err))
      : user.update(formdata['id'], formdata).then((e) => {
          console.log('Update: ', e);
          sync();
        });
  };

  const del = (id) => user.delete(id).then((e) => sync());

  const menuList = [
    { title: 'Dashboard', icon: <Icons.Home /> },
    { title: 'Usuários', icon: <Icons.userGear />, badge: 5 },
  ];

  return (
    <div className="App">
      <header className={''}>
        <Navbar bg="primary" variant="dark">
          <Button
            onClick={toggleSidebar}
            className="d-sm-none toggle-button mx-2 btn-sm"
          >
            <Icons.Menu />
          </Button>

          <Navbar.Brand className={'mx-2'}>Dashboard</Navbar.Brand>

          <Nav className="ml-auto">
            <NavDropdown title="User" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Username</NavDropdown.Item>
              <NavDropdown.Item href="#">Email</NavDropdown.Item>
              <NavDropdown.Item href="#">Sair</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar>
      </header>

      <Container fluid>
        <Row>
          <Col sm={3} id="sidebar">
            <Offcanvas responsive={'sm'} show={show} onHide={toggleSidebar}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Dashboard</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav variant="pills" className="flex-column">
                  {menuList.map((data, i) => (
                    <Nav.Item
                      key={i}
                      className="d-flex justify-content-between align-items-center"
                    >
                      <Nav.Link>
                        {data.icon || ''}
                        {data.title || 'Null'}
                      </Nav.Link>
                      {data.badge && (
                        <Badge bg="primary" pill children={data.badge} />
                      )}
                    </Nav.Item>
                  ))}
                </Nav>
              </Offcanvas.Body>
            </Offcanvas>
          </Col>

          <Col sx={12} sm={9} md={9} id="content">
            <h1>Dashboard Content</h1>
            {/* Coloque aqui o conteúdo do seu dashboard */}
            {!data && <Loader />}
            {data &&
              data.map((d) => (
                <Row key={d.id} className={'mt-2'}>
                  <Col xs={2} sm={'auto'}>
                    <Image width={32} src={d.img} alt={d.name} roundedCircle />
                  </Col>
                  <Col xs={3} sm={'auto'}>
                    {d.name}
                  </Col>
                  <Col>{d.email} </Col>
                  <Col
                    xs={12}
                    sm={'auto'}
                    className={'d-flex justify-content-center'}
                  >
                    <Button
                      size={'sm'}
                      className={'mx-2'}
                      onClick={() => update(d.id)}
                    >
                      Edit
                    </Button>

                    <Button
                      size={'sm'}
                      variant={'danger'}
                      onClick={() => del(d.id)}
                    >
                      delete
                    </Button>
                  </Col>
                </Row>
              ))}
          </Col>
          <Col sm={12} className={'mt-5'}>
            <InputGroup className="mb-3">
              <InputGroup.Text style={{ width: '6em' }} id="basic-addon1">
                Username
              </InputGroup.Text>
              <Form.Control
                name={'name'}
                value={formdata['name'] || ''}
                onChange={change}
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text style={{ width: '6em' }} id="basic-addon2">
                Email
              </InputGroup.Text>
              <Form.Control
                name={'email'}
                value={formdata['email'] || ''}
                onChange={change}
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text style={{ width: '6em' }} id="basic-addon1">
                Senha
              </InputGroup.Text>
              <Form.Control
                name={'senha'}
                value={formdata['senha'] || ''}
                onChange={change}
                placeholder="Password"
                aria-label="password"
                aria-describedby="basic-addon1"
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text style={{ width: '6em' }} id="basic-addon3">
                Image Url
              </InputGroup.Text>
              <Form.Control
                id="basic-url"
                aria-describedby="basic-addon3"
                name={'img'}
                value={formdata['img'] || ''}
                onChange={change}
              />
            </InputGroup>
            <div className="d-grid gap-2">
              <Button onClick={submit} className={'mx-auto'}>
                {formdata['id'] ? 'Update' : 'Save'}
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

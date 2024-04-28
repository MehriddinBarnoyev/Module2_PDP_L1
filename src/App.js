import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss';
import { Button, Card, Container, Nav, Navbar, Tab,Tabs } from 'react-bootstrap';
import CustomButton from './components/CustomButton';
import img1 from '../src/images/uni.jpg'
import CustomTable from './components/CustomTable';

function App() {
  return (
    <div className='App'>
      <Navbar bg="primary" data-bs-theme="dark" className='shadow'>
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container className='py-4'>
        <Tabs defaultActiveKey="profile" id='uncontrolled-tab-example'>
          <Tab eventKey="home" title="home">

            <div className='d-flex gap-2 mt-4'>
              <Button variant="primary">Boshlash</Button>
              <Button variant="success">Boshlash</Button>
              <Button variant="danger">Boshlash</Button>
            </div>
          </Tab>
          <Tab eventKey="contact" title="contact">

            <div className="d-flex gap-2 mt-4">
              <CustomButton
                variant={"success "}
                style={{ color: "white" }}
                onDoubleClick={() => { alert("clicked") }}
              >Boshlash</CustomButton>
              <CustomButton variant={"primary "}>Boshlash</CustomButton>
              <CustomButton variant={"danger "}>Boshlash</CustomButton>


            </div>
          </Tab>

          <Tab eventKey="about" title="about">

            <div className="mt-4">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img1} />
                <Card.Body className='text-center'>
                  <Card.Title>Universe trevel</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Goo free</Button>
                </Card.Body>
              </Card>
            </div>
          </Tab>
          <Tab eventKey="table" title="Table">
         <CustomTable variant="dark"></CustomTable>
          </Tab>

        </Tabs>


      </Container>
    </div>
  );
}

export default App;

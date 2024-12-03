import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavBar from '../BaseComponents/Head';
import Content from "../AboutMe/Summary";
import Info from "../AboutMe/info";
import Owl from "../AboutMe/Owl";
import Footer from "../BaseComponents/Foot";

function Home() {
  return (
    <main>
      <Container className="py-5" id="Cont">
        <Row>
          <Col className="text-bg-dark rounded" id="mode">
            <NavBar />
            <Content />
            <Info />
            {/* <Owl /> */}
            <Footer />
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default Home;

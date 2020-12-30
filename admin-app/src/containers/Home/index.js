import React from "react";
import Layout from "../../components/Layout";
import { Jumbotron, Container } from "react-bootstrap";

function Home() {
  return (
    <>
      <Layout>
        <Jumbotron
          style={{ margin: "5rem", background: "#fff" }}
          className="text-center"
        >
          <Container>
            <h1>Welcome to Admin Dashboard</h1>
            <p>
              lorem ipsum dolor sit amet, consectetur adipis. Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book.
            </p>
          </Container>
        </Jumbotron>
      </Layout>
    </>
  );
}

export default Home;

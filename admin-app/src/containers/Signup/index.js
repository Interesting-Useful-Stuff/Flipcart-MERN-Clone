import React from "react";
import Layout from "../../components/Layout";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Input from "../../components/UI/Input";

function Signup() {
  return (
    <>
      <Layout>
        <Container>
          <Row style={{ marginTop: "100px" }}>
            <Col md={{ span: "6", offset: "3" }}>
              <Row>
                <Col md={"6"}>
                  <Input
                    label="First Name"
                    placeholder="First Name"
                    type="text"
                    value=""
                    onChange={() => {}}
                  />
                </Col>
                <Col md={"6"}>
                  <Input
                    label="Last Name"
                    placeholder="Last Name"
                    type="text"
                    value=""
                    onChange={() => {}}
                  />
                </Col>
              </Row>
              <Form>
                <Input
                  label="Email"
                  placeholder="Enter email"
                  type="email"
                  value=""
                  onChange={() => {}}
                />

                <Input
                  label="Password"
                  placeholder="Password"
                  type="password"
                  value=""
                  onChange={() => {}}
                />
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  );
}

export default Signup;

import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const LoginModal = () => {
  const secretUsername = "user";
  const secretPassword = "password";
  const [show, setShow] = useState(true);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [loginPrompt, setLoginPrompt] = useState("Bitte einloggen");

  const handleClose = () => setShow(false);

  const checkCredentials = () => {
    if (user === secretUsername && password === secretPassword) {
      handleClose();
    } else {
      handleWrongLogin();
    }
  };

  const handleWrongLogin = () => {
    setLoginPrompt(loginPrompt + "!");
  };

  return (
    <Modal
      show={show}
      backdrop="static"
      keyboard={false}
      onHide={handleWrongLogin}
    >
      <Modal.Header closeButton>
        <Modal.Title>{loginPrompt}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Benutzer</Form.Label>
            <Form.Control
              type="text"
              placeholder="user"
              onChange={(e) => setUser(e.target.value)}
            />
            <Form.Text className="text-muted">
              Ihr Gerät wird explodieren, wenn Sie die falschen Daten eingeben!
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Passwort</Form.Label>
            <Form.Control
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={checkCredentials}>
          Log in
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default LoginModal;

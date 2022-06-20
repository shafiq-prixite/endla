import React, { useState } from "react";
import { useFormik } from 'formik'
import { Modal, Button, Form } from "react-bootstrap";



const AddUserModal = ({addUserModalShow, handleAddUserModal}) =>{

    const formik = useFormik({
        initialValues: {
          firtName: '',
          lastName: '',
          email: ''
        },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });

    return(
        <Modal
            show={addUserModalShow}
            onHide={() => handleAddUserModal(false)}
            animation={true}
            size="lg"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>Add New User</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={formik.onSubmit}>
                <Form.Group className="mb-3" controlId="formUsername">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    name="firstName"
                    type="firstName"
                    placeholder="Please enter a first name"
                    onChange={formik.handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formUsername">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    name="lastName"
                    type="lastName"
                    placeholder="Please enter a last name"
                    onChange={formik.handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    name="email"
                    type="email"
                    placeholder="Please select a email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    required
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Modal.Body>
          </Modal>
    )
}

export default AddUserModal;
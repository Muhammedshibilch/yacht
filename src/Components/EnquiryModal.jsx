import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button, Form } from 'react-bootstrap';

const EnquiryModal = ({ show, handleClose, selectedProduct }) => {
  const [formData, setFormData] = useState({
    name: '',
    emailId: '',
    phoneNumber: '',
    price: '',
    title: ''
  });

  useEffect(() => {
    setFormData({
      name: '',
      emailId: '',
      phoneNumber: '',
      price: selectedProduct.price,
      title: selectedProduct.title
    });
  }, [selectedProduct]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://cardealers-cxu7.onrender.com/client/enquiry3', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      handleClose();  // Close the modal after successful submission
      alert('Anfrage erfolgreich gesendet!');
    } catch (error) {
      console.error('Error sending enquiry:', error);
      alert('Anfrage konnte nicht gesendet werden.');
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Details eingeben</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Geben Sie Ihren Namen ein" value={formData.name} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="emailId" className="mt-3">
              <Form.Label>E-Mail</Form.Label>
              <Form.Control type="email" placeholder="Geben Sie Ihre E-Mail-Adresse ein" value={formData.emailId} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="phoneNumber" className="mt-3">
              <Form.Label>Telefonnummer</Form.Label>
              <Form.Control type="text" placeholder="Geben Sie Ihre Telefonnummer ein" value={formData.phoneNumber} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="price" className="mt-3">
              <Form.Label>Preis</Form.Label>
              <Form.Control type="text" value={formData.price} readOnly />
            </Form.Group>
            <Form.Group controlId="title" className="mt-3">
              <Form.Label>Modellname</Form.Label>
              <Form.Control type="text" value={formData.title} readOnly />
            </Form.Group>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Schließen
              </Button>
              <Button variant="primary" type="submit">
                Anfrage senden
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EnquiryModal;

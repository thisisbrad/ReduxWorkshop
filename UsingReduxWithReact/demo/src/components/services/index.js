import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

import store from '../../redux/store';
import { addContact, fetchContacts, removeContact } from '../../redux/actions';

import styles from './styles.module.css';

class Services extends Component {
  state = {
    email: '',
    password: '',
    contacts: []
  };

  componentDidMount() {
    this.props.fetchContacts();
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    this.props.addContact({ name, number });
    console.log(store.getState());
    // this.setState({ contacts: [...contacts, { name, number }] });
  };

  removeContact = id => {
    console.log(id);
    this.props.removeContact(id);
  };

  renderContacts = () => {
    return this.props.contacts.map(contact => (
      <li key={contact.number}>
        {contact.name} {contact.number}
        <Button onClick={() => this.removeContact(contact.id)}>X</Button>
      </li>
    ));
  };

  render() {
    return (
      <>
        <div className={styles.cta}>
          <Container>
            <Row>
              <Col sm="6">
                <h3>Create New Contact</h3>
                <Form onSubmit={this.handleSubmit}>
                  <FormGroup>
                    <Label for="exampleTitle">Name</Label>
                    <Input
                      type="text"
                      name="name"
                      id="exampleName"
                      placeholder="Name of contact"
                      onChange={this.handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleNumber">Number</Label>
                    <Input
                      type="text"
                      name="number"
                      id="exampleNumber"
                      placeholder="Number for contact"
                      onChange={this.handleChange}
                    />
                  </FormGroup>
                  <Button type="submit" className={styles.btn}>
                    Add New Contact
                  </Button>
                </Form>
              </Col>
              <Col sm="6">
                <img src="/undraw.svg" className={styles.ctaImage} alt="girl" />
              </Col>
            </Row>
          </Container>
        </div>
        <Container>
          <Row className="my-4">
            <ul>{this.renderContacts()}</ul>
          </Row>
        </Container>
      </>
    );
  }
}

const mapStateToProps = state => ({ contacts: state.contacts });

export default connect(
  mapStateToProps,
  { addContact, fetchContacts, removeContact }
)(Services);

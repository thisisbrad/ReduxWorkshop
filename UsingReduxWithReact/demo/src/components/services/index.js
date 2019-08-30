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
import PropTypes from 'prop-types';

import styles from './styles.module.css';

class Services extends Component {
  render() {
    return (
      <>
        <div className={styles.cta}>
          <Container>
            <Row>
              <Col sm="6">
                {/* <h1 className={styles.heading}>Hollyway</h1> */}
                <h3>Create New Contacts</h3>
                <Form>
                  <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input
                      type="email"
                      name="email"
                      id="exampleEmail"
                      placeholder="with a placeholder"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input
                      type="password"
                      name="password"
                      id="examplePassword"
                      placeholder="password placeholder"
                    />
                  </FormGroup>
                </Form>
                <Button className={styles.btn} css>
                  Get Started
                </Button>
              </Col>
              <Col sm="6">
                <img src="/undraw.svg" className={styles.ctaImage} alt="girl" />
              </Col>
            </Row>
          </Container>
        </div>
        <Container>
          <Row className="my-4">
            <p>form here?</p>
          </Row>
        </Container>
      </>
    );
  }
}

Services.propTypes = {
  filters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string
    })
  ),
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string,
      id: PropTypes.string
    })
  )
};

Services.defaultProps = {
  filters: [
    {
      id: 'lamp',
      name: 'Lamp'
    },
    {
      id: 'sofa',
      name: 'Sofa'
    },
    {
      id: 'plants',
      name: 'Plants'
    },
    {
      id: 'miniature',
      name: 'Miniature'
    },
    {
      id: 'desk',
      name: 'Desk'
    }
  ],
  items: [
    {
      id: '123',
      title: 'Summer Peas',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam excepturi consectetur, ipsam consequuntur, porro vero! Ex doloribus, nemo consequatur iusto illo sunt voluptate. Pariatur rem obcaecati, amet eius possimus nobis!',
      type: 'plants'
    },
    {
      id: '234',
      title: 'Lamp1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam excepturi consectetur, ipsam consequuntur, porro vero! Ex doloribus, nemo consequatur iusto illo sunt voluptate. Pariatur rem obcaecati, amet eius possimus nobis!',
      type: 'lamp'
    }
  ]
};

export default Services;

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
  state = {
    email: '',
    password: '',
    todos: []
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { title, task, todos } = this.state;
    this.setState({ todos: [...todos, { title, task }] });
  };

  renderTodos = () => {
    if (this.state.todos) {
      return this.state.todos.map(todo => (
        <li>
          {todo.title} {todo.task}
        </li>
      ));
    }
    return null;
  };

  render() {
    return (
      <>
        <div className={styles.cta}>
          <Container>
            <Row>
              <Col sm="6">
                <h3>Create New Todos</h3>
                <Form onSubmit={this.handleSubmit}>
                  <FormGroup>
                    <Label for="exampleTitle">Title</Label>
                    <Input
                      type="text"
                      name="title"
                      id="exampleTitle"
                      placeholder="Title for Todo"
                      onChange={this.handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleTask">Task</Label>
                    <Input
                      type="text"
                      name="task"
                      id="exampleTask"
                      placeholder="Task of Todo"
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
            <ul>{this.renderTodos()}</ul>
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

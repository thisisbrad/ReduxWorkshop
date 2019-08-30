import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import PropTypes from 'prop-types';

import styles from './styles.module.css';
import Card from './card';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentFilter: 'lamp'
    };
  }

  filter = id => () => {
    this.setState({
      currentFilter: id
    });
  };

  render() {
    const { filters, items } = this.props;
    const { currentFilter } = this.state;
    console.log('currentFilter', currentFilter);
    return (
      <>
        <div className={styles.cta}>
          <Container>
            <Row>
              <Col sm="6">
                <h1 className={styles.heading}>Hollyway</h1>
                <h3>Decorative and Creative</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Libero aliquam in tempore obcaecati dicta praesentium alias id
                  sequi natus nam eaque repudiandae, vero perferendis rem,
                  facere explicabo fugit corporis illum.
                </p>
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
          <Row className={styles.filters}>
            {filters.map(filter => (
              <button
                type="button"
                key={filter.id}
                className={styles.filterLink}
                onClick={this.filter(filter.id)}
                css-active={(currentFilter === filter.id).toString()}
              >
                {filter.name}
              </button>
            ))}
          </Row>
          <Row className="my-4">
            {items
              .filter(item => item.type === currentFilter)
              .map(item => (
                <Col sm="4">
                  <Card item={item} key={item.id} />
                </Col>
              ))}
          </Row>
        </Container>
      </>
    );
  }
}

Home.propTypes = {
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

Home.defaultProps = {
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

export default Home;

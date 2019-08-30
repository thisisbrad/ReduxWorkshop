import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody, CardTitle, CardLink, CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';

function HomeCard({ item }) {
  return (
    <Card>
      <CardImg top width="100%" src="http://placehold.it/300x150" />
      <CardBody>
        <CardTitle>{item.title}</CardTitle>
        <p>{item.description}</p>
        <CardLink tag={Link} to={`/details/${item.id}`}>
          Another Link
        </CardLink>
      </CardBody>
    </Card>
  );
}

HomeCard.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    id: PropTypes.string
  }).isRequired
};

export default HomeCard;

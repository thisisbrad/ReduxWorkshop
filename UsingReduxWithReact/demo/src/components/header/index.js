import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Form,
  Container,
  Input
} from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import styles from './styles.module.css';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      displaySearch: false
    };
  }

  toggle = () => {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen
    });
  };

  search = () => {
    const { displaySearch } = this.state;
    if (!displaySearch) {
      this.setState({ displaySearch: true });
    }
  };

  render() {
    const { isOpen, displaySearch } = this.state;
    return (
      <div>
        <Navbar color="light" light expand="md" className={styles.nav}>
          <Container>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavLink
                    tag={RRNavLink}
                    activeClassName={styles.active}
                    className={styles.link}
                    to="/"
                  >
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    tag={RRNavLink}
                    activeClassName="active"
                    to="/services"
                    className={styles.link}
                  >
                    Services
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    tag={RRNavLink}
                    activeClassName={styles.active}
                    className={styles.link}
                    to="/news"
                  >
                    News
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    tag={RRNavLink}
                    activeClassName={styles.active}
                    className={styles.link}
                    to="/pricing"
                  >
                    Pricing
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    tag={RRNavLink}
                    activeClassName={styles.active}
                    className={styles.link}
                    to="/about"
                  >
                    About
                  </NavLink>
                </NavItem>
              </Nav>
              <Form inline>
                <Input
                  type="search"
                  name="search"
                  placeholder="search"
                  className="mr-2"
                  style={{ display: displaySearch ? 'block' : 'none' }}
                />
                <FontAwesomeIcon
                  icon={faSearch}
                  onClick={this.search}
                  className={styles.iconBtn}
                />
              </Form>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default Header;

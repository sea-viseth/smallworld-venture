import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Row, Col, Drawer, Menu } from "antd";
import { FiMenu } from "react-icons/fi";
function Nav() {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  return (
    <div className="nav">
      <Row align="middle" justify="space-between">
        <Col className="nav-logo">
          <NavLink to="/">
            <img src="/images/sw-white.png" alt="logo" />
          </NavLink>
        </Col>
        <Col className="nav-menu">
          <Row className="nav-list" gutter={60}>
            <Col>
              <NavLink to="/about" activeClassName="nav-active">
                About
              </NavLink>
            </Col>
            <Col>
              <NavLink to="/works" activeClassName="nav-active">
                Works
              </NavLink>
            </Col>
            <Col>
              <NavLink to="/news" activeClassName="nav-active">
                News
              </NavLink>
            </Col>
            <Col>
              <NavLink to="/spaces" activeClassName="nav-active">
                Spaces
              </NavLink>
            </Col>{" "}
            <Col>
              <NavLink to="/contact" activeClassName="nav-active">
                Contac
              </NavLink>
            </Col>
          </Row>
        </Col>
        <FiMenu className="open-menu-btn" onClick={showDrawer} />
        <Drawer
          closable={false}
          placement="left"
          onClose={onClose}
          visible={visible}
        >
          <div className="nav">
            <img src="/images/sw-white.png" alt="" />
          </div>
          <Menu className="side-nav">
            <Menu.Item onClick={onClose}>
              <NavLink className="sample" to="/" exact>
                Home
              </NavLink>
            </Menu.Item>

            <Menu.Item onClick={onClose}>
              {" "}
              <NavLink to="/about" exact>
                About
              </NavLink>
            </Menu.Item>
            <Menu.Item onClick={onClose}>
              <NavLink to="/works">Works</NavLink>
            </Menu.Item>
            <Menu.Item onClick={onClose}>
              <NavLink to="/news">News</NavLink>
            </Menu.Item>
            <Menu.Item onClick={onClose}>
              <NavLink to="/spaces">Spaces</NavLink>
            </Menu.Item>
            <Menu.Item onClick={onClose}>
              <NavLink to="/contact">Contact</NavLink>
            </Menu.Item>
          </Menu>
        </Drawer>
      </Row>
    </div>
  );
}

export default Nav;

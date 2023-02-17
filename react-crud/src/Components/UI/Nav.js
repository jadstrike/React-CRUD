import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
const { Header } = Layout;

const Nav = () => {
  return (
    <Layout>
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[""]}>
          <Menu.Item key="1">
            <span>Main Page</span>
            <Link to="/" />
          </Menu.Item>
          <Menu.Item key="2">
            <span>DragDrop</span>
            <Link to="/drag" />
          </Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
};

export default Nav;

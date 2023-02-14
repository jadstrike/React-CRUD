import { Layout } from "antd";
const { Footer } = Layout;
const NavFooter = () => {
  return (
    <Layout>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        This is Footer of React-CRUD App
      </Footer>
    </Layout>
  );
};
export default NavFooter;

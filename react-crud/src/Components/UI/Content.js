import { useDispatch, useSelector } from "react-redux";
import { Layout, Card, Button } from "antd";
import { deleteUser } from "../../store/user-slice";
import UserForm from "../User/UserForm";

const { Content } = Layout;

const MainContent = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  return (
    <Layout>
      <UserForm />
      <Content
        style={{
          padding: "24px",
        }}
      >
        {users.map((user) => (
          <Card key={user.id}>
            <p>Name: {user.name} </p>
            <p>Email: {user.email}</p>
            <p>Phone Numer: {user.phone}</p>

            <Button
              onClick={() => {
                dispatch(deleteUser(user.id));
              }}
              danger
            >
              delete
            </Button>
            <Button>edit</Button>
          </Card>
        ))}
      </Content>
    </Layout>
  );
};
export default MainContent;

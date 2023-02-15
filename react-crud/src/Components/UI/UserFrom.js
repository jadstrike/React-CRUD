import { Form, Input, Button } from "antd";
import usersSlice from "../Redux/usersSlice";
import { useDispatch } from "react-redux";
import { addUser } from "../Redux/usersSlice";

const UserForm = () => {
  console.log(usersSlice);
  const dispatch = useDispatch();

  const onFinish = (FormData) => {
    const id = new Date().getTime().toString();
    dispatch(addUser({ id, ...FormData }));
  };
  return (
    <div className="inputform">
      <Form onFinish={onFinish}>
        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true }, { type: "email" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="phone" label="Phone" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Add User
        </Button>
      </Form>
    </div>
  );
};

export default UserForm;

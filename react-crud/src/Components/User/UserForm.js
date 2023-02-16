import { Form, Input, Button } from "antd";
import usersSlice from "../../store/user-slice";
import { useDispatch } from "react-redux";
import { addUser } from "../../store/user-slice";
import "./UserForm.css";
import { message } from "antd";
import { useState } from "react";

const UserForm = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [success, setSuccess] = useState(false);
  console.log(usersSlice);
  const dispatch = useDispatch();

  const onFinish = (FormData) => {
    const id = new Date().getTime().toString();
    dispatch(addUser({ id, ...FormData }));
    setSuccess(true);

    messageApi.open({
      type: "success",
      content: "New user added 🫶🏻",
    });
  };
  return (
    <>
      {contextHolder}
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
    </>
  );
};

export default UserForm;

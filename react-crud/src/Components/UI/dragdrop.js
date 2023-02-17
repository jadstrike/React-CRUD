import { useSelector } from "react-redux";
import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Layout, Card } from "antd";

const { Content } = Layout;

const MainContent = () => {
  const users = useSelector((state) => state.users.users);
  const [updateUsers, setUpdateUsers] = useState(users);
  const onDragEndHandler = (result) => {
    if (!result.destination) {
      return;
    }
    const items = Array.from(updateUsers);
    const [reorderedItem] = items.splice(result.source.index, 1);
    console.log(reorderedItem);
    items.splice(result.destination.index, 0, reorderedItem);
    console.log(items);
    setUpdateUsers(items);
  };
  return (
    <Layout>
      <Content
        style={{
          padding: "24px",
        }}
      >
        <DragDropContext onDragEnd={onDragEndHandler}>
          <Droppable droppableId="users">
            {(provided) => (
              <ul {...provided.droppableProps} ref={provided.innerRef}>
                {updateUsers.map(({ id, name, email, phone }, index) => (
                  <Draggable key={id} draggableId={id.toString()} index={index}>
                    {(provided) => (
                      <Card
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        <p>Name: {name} </p>
                        <p>Email: {email}</p>
                        <p>Phone Numer: {phone}</p>
                      </Card>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </Content>
    </Layout>
  );
};
export default MainContent;

import MainContent from "./Components/UI/Content";
import Footer from "./Components/UI/Footer";
import Nav from "./Components/UI/Nav";
import { Route, Switch } from "react-router-dom";
import DragDrop from "./Components/UI/dragdrop";


const App = () => {
  return (
    <div>
      <Nav />
      <Switch>
        <Route path="/drag" exact>
          <DragDrop />
        </Route>

        <Route path="/">
          <MainContent />
          <Footer />
        </Route>
      </Switch>
    </div>
  );
};

export default App;

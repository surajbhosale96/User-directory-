import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Userlist from "./components/Userlist";
import Userdetails from "./components/Userdetails";
import { BrowserRouter, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" exact component={Userlist} />
        <Route path="/Userlist/:id/" component={Userdetails} />
      </div>
    </BrowserRouter>
  );
};

export default App;

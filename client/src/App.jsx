import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Axios from "axios";
import Form from "./Components/Form"
function App() {
  const [data, AddData] = useState([]);
  const [disabled,makeDisable] = useState(false);
  const [IsAdded,toggle] = useState(false);

  const FetchData = async () => {
    let res = await Axios.post("/fakedata");
    let new_data = [...data, ...res.data.data];
    AddData(new_data);
    makeDisable(true);
  };

  const UI = () => {
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">userId</th>
            <th scope="col">id</th>
            <th scope="col">title</th>
            <th scope="col">completed</th>
          </tr>
        </thead>
        <tbody>
          {data.map((todo,index) => (
            <tr key={index}>
              <th scope="row">{index}</th>
              <td>{todo.userId}</td>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td>{`${todo.completed}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const toggleForm = () =>{
    toggle(!IsAdded)
  }

  return (
    <div className="App">
      {
        IsAdded && <Form Data={data} IsAdded={toggleForm} AddData={AddData} />
      }
      <button type="button" className="btn btn-primary" disabled={disabled} onClick={FetchData}>
        Get Data From Api
      </button>
      {
        !IsAdded && (
        <button type="button" className="btn btn-primary" onClick={toggleForm}>
          Add Data
        </button>
      )}
      
      
      {UI()}
    </div>
  );
}

export default App;

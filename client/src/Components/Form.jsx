import { useEffect, useState } from "react";
import Axios from "axios";
import "../App.css"
function Form({Data,AddData,IsAdded}) {
  const [UserId, AdduserId] = useState(0);
  const [Id, Addid] = useState(0);
  const [Title, Addtitle] = useState("");
  const [Completed, Addcompleted] = useState(false);

  const Add = () => {
    let new_data = [...Data, {userId:UserId, id:Id, title:Title, completed:Completed}];
    AddData(new_data);
    IsAdded();
  };

  const changeValue = () => {
    let value = !Completed;
    Addcompleted(value);
  };
  return (
    <form className="Form" >
      <div className="form-group">
        <label htmlFor="exampleInputuserId1">userId</label>
        <input
          type="number"
          className="form-control"
          placeholder="Enter UserID"
          onChange={(e) => AdduserId(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputId1">Id</label>
        <input
          type="number"
          className="form-control"
          placeholder="Enter Id"
          onChange={(e) => Addid(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputTitle">Title</label>
        <input
          type="name"
          className="form-control"
          placeholder="Enter Title"
          onChange={(e) => Addtitle(e.target.value)}
        />
      </div>
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
          onChange={changeValue}
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Completed
        </label>
      </div>

      <input
        type="button"
        className="btn btn-primary"
        onClick={Add}
        value="Submit"
      />
    </form>
  );
}

export default Form;

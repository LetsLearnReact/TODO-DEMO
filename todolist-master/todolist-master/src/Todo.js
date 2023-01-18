import { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [list, setList] = useState([]);
  const [error, setError] = useState();

  const AddList = (e) => {
    e.preventDefault();
    if (todo.length === 0) {
      setError(true);
    } else {
      const newList = [...list, todo];
      setList(newList);
      console.log(newList);
      setTodo("");
      setError(false);
    }

    // console.log(todo)
  };

  const deleteHandler = (indexvalue) => {
    const newList = list.filter((list, index) => index !== indexvalue);
    setList(newList);
    console.log(indexvalue);
  };
  const handleClick = (event, index) => {
    console.log(event);
    if (event.target.style.textDecoration) {
      event.target.style.removeProperty("text-decoration");
      document.getElementById(index).checked = false;
    } else {
      event.target.style.setProperty("text-decoration", "line-through");
      document.getElementById(index).checked = true;
    }
  };

  return (
    <div>
      <div className="container">
        <h2>My To Do List</h2>
        <div className="addlist">
          <input
            className="inpufeild"
            type="text"
            id="myInput"
            placeholder="Title..."
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          ></input>

          <button className="addBtn" onClick={AddList}>
            Add
          </button>
        </div>
        {error ? <h1>It should not be empty</h1> : ""}
      </div>

      {list.map((item, index) => (
       
        <div
          key={index}
          className="listitems"
          onClick={(event) => handleClick(event, index)}
        >
          <div className="cardlist">
            <input type="checkbox" id={index} style={{ margin: "0 10px" }} />
            <h5>{item}</h5>

            <button className="addBtn2" onClick={() => deleteHandler(index)}>
              X
            </button>
          </div>
        </div>
        
      ))}
        
           
        
       
        
          
        

          
       
     
    </div>
  );
};
export default Todo;
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
      setTodo("");
      setError(false);
    }
  };
  console.log(list)

  const deleteHandler = (indexvalue) => {
    const newList = list.filter((list, index) => index !== indexvalue);
    setList(newList);
  };
  const handleClick = (event, index) => {
    event.preventDefault();
    if (event.target.style.textDecoration) {
      event.target.style.removeProperty("text-decoration");
      
      document.getElementById("p1").style.color = "black";
      document.getElementById("listitems").style.backgroundColor = "#f9f9f9";
      document.getElementById(index).checked = false;
     
    } else {
      event.target.style.setProperty("text-decoration", "line-through");
      
      document.getElementById("p1").style.color = "#FFFFFF";
      document.getElementById("listitems").style.backgroundColor = "#555";
      document.getElementById(index).checked = true;
      

      
      
      
    
      
    }
  };

  

  return (
    
    <div className="main">
      
      <div className="container">
        <h2>My To Do List</h2>
        <div className="addlist">
          <input
            className="inputfeild"
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
          id="listitems"
          onClick={(event) => handleClick(event, index)}
        >
          <div id="cardlist">
          <input type="checkbox" id={index} style={{ margin: "0 10px" }} />
            <h5 id="p1">{item}</h5>
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
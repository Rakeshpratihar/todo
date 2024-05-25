import React,{useEffect, useState} from "react";
import todo from "../images/todo.jpg";
const getlocalitem=()=>{
  const list=localStorage.getItem("rak")
  if(list){
return JSON.parse(localStorage.getItem("rak"))
  }
  else{
      return [];
  }
}
const Todo=()=>{
  const[data,setData]=useState("");
  const[items,setItems]=useState(getlocalitem());
  const handel=(e)=>{
    setData(e.target.value)
  }
    const addItem=()=>{
      if(!data){
        alert("GIVE SOME INPUT")
     }else{
   setItems([...items,data]);
   setData('');
      }
  }
  const deleteItem=(id)=>{
     const newvalue=items.filter((cur,ind)=>{
        return(
          ind !==id
             )
     }
     );
     setItems(newvalue);
  }
  const removeall=()=>{
    setItems([]);
  }
  useEffect(()=>{
      localStorage.setItem("rak",JSON.stringify(items))
  },[items])
  return(
    <div className="odiv">
     <div className="idiv">
        <div className="imgdiv">
            <img src={todo} alt=""></img>
            <p>Add your list hear</p>
        </div>
        <div className="inpdiv">
            <input type="text" placeholder="Add Items" value={data}
              onChange={handel}
            />
            <i className="fa-solid fa-plus addbtn" title="Add Item" onClick={addItem}></i>
        </div>
        <div className="mresdiv">
\          {
            items.map((cur,index)=>{
              return(
                <div className="resdiv" key={index}>
                   <h3>{cur}</h3>
                   <i className="fa-solid fa-trash adddelete" onClick={()=>deleteItem(index)}></i>
                </div>
              )
            }
          )
          }
        </div>
        <div className="checkbtn">
          <button onClick={removeall}>DELETE ALL</button>
        </div>
     </div>
    </div>
  );
}
export default Todo;
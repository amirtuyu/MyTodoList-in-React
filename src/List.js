import "./List.css";
import{DeletItem ,OpenAddText,OpenAndCloseText,CloseAddText,TextArea} from "./JSXworking"
import { useState } from "react";
import { useEffect } from "react";
function List(props) {
let [openAndCloseTextarea,setOpenAndCloseTextarea]=useState({})
let [text,setText]=useState({})
useEffect(() => {
  const initialState = {};
  props.arryObj.forEach((item) => {
    initialState[item.id] = false;
  });
  setOpenAndCloseTextarea(initialState);
}, [props.arryObj]);
useEffect(()=>{
  const initialState = {};
  props.arryObj.forEach((item) => {
    initialState[item.id] = "";
  });
  setText(initialState)
},[])
  const HandlerOpenAndCloseTextarea=(id)=>{
    setOpenAndCloseTextarea((prev)=>({...prev,[id]:!prev[id]}))
  }
  const GetText =(event)=>{
    console.log(event.target.value,event.target.id)
  setText((prev)=>({...prev,[event.target.id]:event.target.value}))
  }
 const HandlerText=(id)=>{
 console.log(id,text)
 }
  return (
    <ul className="List">
      {props.arryObj.map((item) => (
        <div key={item.id}>
        <li>
          {item.name}
          {item.Text?<OpenAndCloseText  />:(openAndCloseTextarea[item.id] ?<CloseAddText handlerOpenAndCloseTextarea={()=>{HandlerOpenAndCloseTextarea(item.id)}}/>:<OpenAddText handlerOpenAndCloseTextarea={()=>{HandlerOpenAndCloseTextarea(item.id)}}/>)}
          <DeletItem
            removeElement={() => {
              props.removElement(item.id);
            }}
          />
        </li>
        {(openAndCloseTextarea[item.id]&&<TextArea id={item.id} getText={GetText} handlerText={HandlerText} updateRipository={()=>props.updateRipository(item.id,text)}/>)}
        </div>
      ))}
    </ul>
  );
}
export default List;

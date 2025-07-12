import "./List.css";
import{DeletItem ,OpenAddText,OpenAndCloseText,CloseAddText,TextArea,Text} from "./JSXworking"
import { useState } from "react";
import { useEffect } from "react";
function List(props) {
let [openAndCloseTextarea,setOpenAndCloseTextarea]=useState({})
let [openAndCloseText,setOpenAndCloseText]=useState({})
let [text,setText]=useState({})
let[textForEdit,setTextForEdit]=useState("")
useEffect(() => {
  const initialState = {};
  props.arryObj.forEach((item) => {
    initialState[item.id] = false;
  });
  setOpenAndCloseTextarea(initialState);
   setOpenAndCloseText(initialState)
}, []);
useEffect(()=>{
  const initialState = {};
  props.arryObj.forEach((item) => {
    initialState[item.id] = "";
  });
  setText(initialState)
},[])
  const HandlerOpenAndCloseTextarea=(id)=>{
    setOpenAndCloseTextarea((prev)=>({...prev,[id]:!prev[id]}))
    setTextForEdit("")
  }
  const HandlerOpenAndCloseText=(id)=>{
    setOpenAndCloseText((prev)=>({...prev,[id]:!prev[id]}))

  }
  const GetText =(event)=>{
  setText((prev)=>({...prev,[event.target.id]:event.target.value}))
  }
 const HandlerText=(id)=>{
     setOpenAndCloseText((prev)=>({...prev,[id]:!prev[id]}))
     setOpenAndCloseTextarea((prev)=>({...prev,[id]:!prev[id]}))
     setTextForEdit("")
}
const OnchangForEdite =(event)=>{
setTextForEdit(event.target.value)
}
const GetTextForEdite=(id)=>{
const targetObj=props.arryObj.find((obj)=>obj.id==id)
const TextTarget =targetObj.Text
setOpenAndCloseTextarea((prev)=>({...prev,[id]:!prev[id]}))
setTextForEdit(TextTarget)
setOpenAndCloseText((prev)=>({...prev,[id]:!prev[id]}))
}
  return (
    <ul className="List">
      {props.arryObj.map((item) => (
        <div key={item.id}>
        <li>
          {item.name}
          {item.Text?<OpenAndCloseText  openAndCloseText={openAndCloseText[item.id]} handlerOpenAndCloseText={()=>HandlerOpenAndCloseText(item.id)}/>:(openAndCloseTextarea[item.id] ?<CloseAddText handlerOpenAndCloseTextarea={()=>{HandlerOpenAndCloseTextarea(item.id)}}/>:<OpenAddText handlerOpenAndCloseTextarea={()=>{HandlerOpenAndCloseTextarea(item.id)}}/>)}
          <DeletItem
            removeElement={() => {
              props.removElement(item.id);
            }}
          />
        </li>
        {(item.Text&&<Text getText={GetText} text={item.Text} openAndCloseText={openAndCloseText[item.id]} getTextForEdite={()=>GetTextForEdite(item.id)} updateRipository={()=>props.updateRipository(item.id,"")}/>)}
        {(openAndCloseTextarea[item.id]&&<TextArea onchangForEdite={OnchangForEdite} value={textForEdit} id={item.id} getText={GetText} handlerText={()=>{HandlerText(item.id)}} updateRipository={()=>props.updateRipository(item.id,text[item.id])}/>)}
        </div>
      ))}
    </ul>
  );
}
export default List;

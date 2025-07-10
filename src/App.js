import "./App.css";
import InputForm from "./InputForm";
import List from "./List";
import { useEffect, useState } from "react";
import {
  ObjCreator,
  IdCreator,
  SetLocalStorage,
  GetLocalStorage,
  RemoveItemFromArra,
  ChangeValueToObj,
} from "./working";
function App() {
  const [targetvalue, setTargetvalue] = useState("");
  const [arryObj, setArryObj] = useState(GetLocalStorage("myToDoList") || []);
  useEffect(() => {
    SetLocalStorage("myToDoList", arryObj);
  }, [arryObj]);
  const GetValue = (event) => {
    setTargetvalue(event.target.value);
  };
  const Clicked = () => {
    if (targetvalue) {
      let obj = new ObjCreator(targetvalue, IdCreator(), "");
      setArryObj([...arryObj, obj]);
      setTargetvalue("");
    }
  };
  const RemoveElement = (idObj) => {
    let newarryObj = RemoveItemFromArra(arryObj, idObj);
    setArryObj(newarryObj);
  };
  const UpdateRipository =(id,value)=>{
  let newarryObj=ChangeValueToObj(value,id,"Text",arryObj)
  setArryObj(newarryObj);
  }
  return (
    <>
      <div className="container">
        <InputForm getValue={GetValue} clicked={Clicked} value={targetvalue} />
        <List arryObj={arryObj} removElement={RemoveElement} updateRipository={UpdateRipository} />
      </div>
    </>
  );
}

export default App;

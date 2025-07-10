import "./JSXworking.css";
function DeletItem(props) {
  return (
    <span
      onClick={props.removeElement}
      className="material-symbols-outlined icon-Delet"
    >
      delete
    </span>
  );
}
function OpenAddText(props) {
  return <span onClick={props.handlerOpenAndCloseTextarea} className="material-symbols-outlined addtext">add</span>;
}
function CloseAddText(props){
return<span onClick={props.handlerOpenAndCloseTextarea} className="material-symbols-outlined closeAddTextv ">
close
</span>
}
function TextArea(props){
  return(
    <>
  <textarea id={props.id} onChange={props.getText} className="textarea" placeholder ="Title..."></textarea>
   <button onClick={()=>{props.handlerText();props.updateRipository()}} className="buttonChangText">ChangText</button>
   </>
  )
}
function OpenAndCloseText(){
  return <span class="material-symbols-outlined Icon-animation-Text">chevron_right</span>
}
export { DeletItem, OpenAddText,OpenAndCloseText,CloseAddText, TextArea};

import './InputForm.css'
import './JSXworking.css'
function InputForm(props){
  return(
       <div className="container-add">
        <h2>My To Do List</h2>
        <div className="container-search">
          <input onChange={props.getValue}value={props.value} id="input" type="text" placeholder="Title..." />
          <button onClick={props.clicked} className="button-Add">Add</button>
        </div>
      </div>
)
}


export default InputForm
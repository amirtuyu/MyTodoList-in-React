import "./JSXworking.css";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
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
  return (
    <span
      onClick={props.handlerOpenAndCloseTextarea}
      className="material-symbols-outlined addtext"
    >
      add
    </span>
  );
}
function CloseAddText(props) {
  return (
    <span
      onClick={props.handlerOpenAndCloseTextarea}
      className="material-symbols-outlined closeAddTextv "
    >
      close
    </span>
  );
}
function TextArea(props) {
  return (
    <>
      <textarea
        value={props.value}
        id={props.id}
        onChange={(event) => {
          props.getText(event);
          props.onchangForEdite(event);
        }}
        className="textarea"
        placeholder="Title..."
      ></textarea>
      <button
        onClick={() => {
          props.handlerText();
          props.updateRipository();
        }}
        className="buttonChangText"
      >
        ChangText
      </button>
    </>
  );
}
function OpenAndCloseText(props) {
  let classs = `material-symbols-outlined Icon-animation-Text ${
    props.openAndCloseText && "toggle-icon"
  }`;
  return (
    <span className={classs} onClick={props.handlerOpenAndCloseText}>
      chevron_right
    </span>
  );
}
function Text(props) {
  const [isOpen, setIsOpen] = useState(true);
  useEffect(() => {
    setIsOpen(props.openAndCloseText);
  }, [props.openAndCloseText]);
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="Text"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          style={{
            overflow: "hidden",
          }}
        >
          <div className="containerIconEditAndTimer">
            <div className="Timer">0seconds</div>
            <span
              onClick={() => {
                props.getTextForEdite();
                props.updateRipository();
              }}
              className="material-symbols-outlined show-icon"
              style={{ cursor: "pointer" }}
            >
              edit
            </span>
          </div>
          <div className="containerTargetText">{props.text}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
export {
  DeletItem,
  OpenAddText,
  OpenAndCloseText,
  CloseAddText,
  TextArea,
  Text,
};

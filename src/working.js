function SetLocalStorage(nameRipository, target) {
  localStorage.setItem(nameRipository, JSON.stringify(target));
}
function GetLocalStorage(nameRipository) {
  const dataString = localStorage.getItem(nameRipository);
  if (dataString) {
    return JSON.parse(dataString);
  } else {
    return null;
  }
}
function RemoveItemFromArra(aryy, idItem) {
  return aryy.filter((obj) => obj.id !== idItem);
}
function IdCreator() {
  return Date.now().toString() + Math.random().toString(36).substring(2, 8);
}
function ChangeValueToObj(value, id, propertyName, arry) {
  return arry.map((obj) => {
    if (obj.id == id) {
      return {
        ...obj,
        [propertyName]: value,
      };
    } else {
      return obj;
    }
  });
}
class ObjCreator {
  constructor(name, id, Text) {
    this.name = name;
    this.id = id;
    this.Text = Text;
  }
}
export {
  SetLocalStorage,
  GetLocalStorage,
  IdCreator,
  ObjCreator,
  RemoveItemFromArra,
  ChangeValueToObj,
};

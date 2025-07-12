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
function ChangeValueToObj(value, id, propertyName, arry, keyDate, Date) {
  return arry.map((obj) => {
    if (obj.id == id) {
      return {
        ...obj,
        [propertyName]: value,
        [keyDate]: Date,
      };
    } else {
      return obj;
    }
  });
}
function BirthDate(BirthDate) {
  let secondsTime = Math.floor(Date.now() / 1000) - BirthDate;

  if (secondsTime >= 0 && secondsTime < 60) {
    return secondsTime + "seconds";
  } else if (secondsTime >= 60 && secondsTime < 3600) {
    return Math.floor(secondsTime / 60) + "minutes";
  } else if (secondsTime >= 3600 && secondsTime < 86400) {
    return Math.floor(secondsTime / 3600) + "hours";
  } else if (secondsTime >= 86400 && secondsTime < 2592000) {
    return Math.floor(secondsTime / 86400) + "days";
  } else if (secondsTime >= 2592000 && secondsTime < 31536000) {
    return Math.floor(secondsTime / 2592000) + "months";
  } else if (secondsTime >= 31536000) {
    return Math.floor(secondsTime / 31536000) + "years";
  }
}
class ObjCreator {
  constructor(name, id, Text, BirthDate) {
    this.name = name;
    this.id = id;
    this.Text = Text;
    this.BirthDate = BirthDate;
  }
}
export {
  SetLocalStorage,
  GetLocalStorage,
  IdCreator,
  ObjCreator,
  RemoveItemFromArra,
  ChangeValueToObj,
  BirthDate
};

keyValueRetrival = (obj) => {
  let variables = [];
  let keys = Object.keys(obj);
  keys.forEach((element, index) => {
    if (typeof obj[element] === "string" || typeof obj[element] === "number") {
      variables.push(element);
    }
  });
  insider = (obj) => {
    for (var key in obj) {
      if (typeof obj[key] === "string" || typeof obj[key] === "number") {
        variables.push(obj[key]);
      } else {
        if (obj[key].length !== 0) {
          for (let i = 0; i < obj[key].length; i++) {
            variables.push(insider(obj[key][i]));
          }
        }
      }
    }
  };
  insider(obj);
  let length = keys.length;
  return { variables, length };
};

arrayToString = (array, length) => {
  let str = "";
  array.forEach((element, index) => {
    if (element) {
      if (!!Number(element)) {
        str += element + "\n";
      } else {
        if (index === length - 2) {
          str += element + "\n";
        } else {
          str += element + ",";
        }
      }
    }
  });
  return str + "\n";
};

exports.keyValueRetrival = keyValueRetrival;
exports.arrayToString = arrayToString;

var addBinary = function (a, b) {
  // use the shortest length from array a or b to using in for loop
  // the loop itself need to be using i--
  // it using the length as max and i as substract to get the index of array that got calculated by for loop
  // just use splice to adding new binary in front of the list
  // use join after we get all the binary to make it ones and toString to make the value string

  var based = null;
  var addition = null;

  if (a.length > b.length) {
    based = a;
    addition = b;
  } else {
    based = b;
    addition = a;
  }

  const length_adjustment = based.length-addition.length
  var adding_zero_to_addition =[]

  for(let i = 0;i<length_adjustment;i++){
    adding_zero_to_addition.push("0")
  }

  addition = "0" + adding_zero_to_addition.join("").toString() + addition
  based = "0" + based

  var result = [];
  var saved = "0";


  // console.log(based)
  // console.log(addition)


  for (let i = 0; i < based.length; i++) {
    let x = based[based.length - 1 - i];
    let y = addition[addition.length - 1 - i];

    if (saved === "1") {
      if (x === "1" && y === "1") {
        result.splice(0, 0, "1");
        saved = "1";
      } else if (x === "0" && y === "0") {
        result.splice(0, 0, "1");
        saved = "0";
      } else {
        result.splice(0, 0, "0");
        saved = "1";
      }
    } else {
      if (x === "1" && y === "1") {
        result.splice(0, 0, "0");
        saved = "1";
      } else if (x === "0" && y === "0") {
        result.splice(0, 0, "0");
        saved = "0";
      } else {
        result.splice(0, 0, "1");
        saved = "0";
      }
    }
  // console.log("result", result)
  }

  //counting 0 in the front of binary set that already been established
  var count = 0
  for(let i = 0; i < result.length;i++){
    if(result[i] === "1"){
      break
    }else{
      count++
    }
  }

  if(count === result.length){
    result = ["0"]
  }
  else{
    result = result.slice(count)
  }
    result = result.join("").toString()
    // console.log("final result", result)
    return result;
};

addBinary("100", "110010");

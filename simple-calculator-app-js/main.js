//selector
const display = document.querySelector("#display");
const clearBtn = document.querySelector(".clear-btn");
const delBtn = document.querySelector(".del-btn");
const calculateBtn = document.querySelector(".calculate-btn");
// function
const appendToDisplay = (input) => {
  display.value += input;
};

const clearDisplay = () => {
  display.value = "";
};
const deleteDisplay = () => {
  display.value = display.value.toString().slice(0, -1);
  console.log(display.value);
};
const calculate = () => {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
};
// event listener
clearBtn.addEventListener("click", clearDisplay);
calculateBtn.addEventListener("click", calculate);
delBtn.addEventListener("click", deleteDisplay);

// slice array
// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// console.log(animals.slice(0, -1));
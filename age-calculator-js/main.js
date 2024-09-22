// selector
const app = document.querySelector("#app");
const inputDate = document.querySelector("#date");
const btn = document.querySelector("#btn");
const result = document.querySelector("#result");

inputDate.max = new Date().toISOString().split("T")[0];
// function
const calculateAge = () => {
  const date = new Date(inputDate.value);
  const today = new Date();
  let d1 = date.getDate();
  let m1 = date.getMonth() + 1;
  let y1 = date.getFullYear();
  let d2 = today.getDate();
  let m2 = today.getMonth() + 1;
  let y2 = today.getFullYear();
  let age, month, day;
  age = y2 - y1;
  if (m2 >= m1) {
    month = m2 - m1;
  } else {
    age--;
    month = 12 + m2 - m1;
  }
  if (d2 >= d1) {
    day = d2 - d1;
  } else {
    month--;
    day = getDaysInMonth(y1, m1) + d2 - d1;
    console.log(day);
  }
  if (month < 0) {
    age--;
    month = 12 + month;
  }
  // const diff = today - date;
  // const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
  // const month=Math.floor(diff / (1000 * 60 * 60 * 24 * 30.44));
  // const day = Math.floor(diff / (1000 * 60 * 60 * 24));
  result.innerHTML = `Your age is <span class="text-yellow-400">${age}</span> years <span class="text-yellow-400">${month}</span> months <span class="text-yellow-400">${day}</span> days !`;
};
const getDaysInMonth = (year, month) => {
  const days = new Date(year, month, 0).getDate();
  return days;
};
console.log(getDaysInMonth(2023, 2));
// event
btn.addEventListener("click", calculateAge);

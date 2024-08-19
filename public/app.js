"use strict";
//SELECTION
const submit = document.querySelector(".submit");
const day = document.querySelector(".day");
const month = document.querySelector(".month");
const year = document.querySelector(".year");
const errorText = document.querySelectorAll(".errortext");
const errorText1 = document.querySelector(".errortext1");
const errorText2 = document.querySelector(".errortext2");
const errorText3 = document.querySelector(".errortext3");
const dayLabel = document.querySelector(".daylabel");
const monthLabel = document.querySelector(".monthlabel");
const yearLabel = document.querySelector(".yearlabel");
const inputs = document.querySelectorAll(".input");
const spanDay = document.querySelector(".spaday");
const spanMonth = document.querySelector(".spamonth");
const spanYear = document.querySelector(".spayear");

//FUNCTIONS
const calcAge = function (year) {
  if (month.value > 8) return 2024 - year;
  else return 2024 - year - 1;
};

const calcMonth = function (month) {
  if (month > 8) return month - 8;
  else return Number(month) - 8 + 12;
};

const calcDay = function (day) {
  if (day < 19) return 19 - day;
  else return day - 19 + 19;
};
submit.addEventListener("click", function (e) {
  //ERROR NOT INPUT
  if (!day.value) {
    errorText1.classList.remove("hidden");
    dayLabel.style.color = "red";
    day.style.outline = "1px solid #ff6347";
  }
  if (!month.value) {
    errorText2.classList.remove("hidden");
    monthLabel.style.color = "red";
    month.style.outline = "1px solid #ff6347";
  }
  if (!year.value) {
    errorText3.classList.remove("hidden");
    yearLabel.style.color = "red";
    year.style.outline = "1px solid #ff6347";
  }

  if (day.value > 31) {
    errorText1.classList.remove("hidden");
    errorText1.textContent = "Must be a valid day";
    day.style.outline = "1px solid #ff6347";
    dayLabel.style.color = "red";
  }

  if (
    (day.value == 30 && month.value == 2) ||
    (day.value == 31 && [4, 6, 9, 11].includes(parseInt(month.value)))
  ) {
    errorText1.classList.remove("hidden");
    errorText1.textContent = "Must be a valid date";
    day.style.outline = "1px solid #ff6347";
    dayLabel.style.color = "red";
    month.style.outline = "1px solid #ff6347";
    monthLabel.style.color = "red";
    year.style.outline = "1px solid #ff6347";
    yearLabel.style.color = "red";
  }

  if (month.value > 12) {
    errorText2.classList.remove("hidden");
    errorText2.textContent = "Must be a valid month";
    month.style.outline = "1px solid #ff6347";
    monthLabel.style.color = "red";
  }
  if (year.value > 2024) {
    errorText3.classList.remove("hidden");
    errorText3.textContent = "Must be in the past";
    year.style.outline = "1px solid #ff6347";
    yearLabel.style.color = "red";
  }

  //CALCULATION THE YEARS , MONTHS AND DAYS
  if (
    day.value &&
    month.value &&
    year.value &&
    day.value < 31 &&
    month.value < 12 &&
    year.value < 2024 &&
    !(
      (day.value == 30 && month.value == 2) ||
      (day.value == 31 && [4, 6, 9, 11].includes(parseInt(month.value)))
    )
  ) {
    spanYear.textContent = calcAge(year.value);
    spanMonth.textContent = calcMonth(month.value);
    spanDay.textContent = calcDay(day.value);
  }
});
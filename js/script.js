"use strict";
// import {
//   idEl,
//   transferNav,
//   dateEl,
//   typeEl,
//   detailsEl,
//   greetingEl,
//   curBalanceEl,
//   incBalanceEl,
//   expBalanceEl,
//   transactionsContainer,
//   inputAcc,
//   inputAmt,
//   inputPurp,
//   inputPin,
//   formLogin,
//   btnTransfer,
//   btnLogin,
//   inputUsernameLogin,
//   inputPinLogin,
//   account1,
//   account2,
//   accounts,
//   incomeFlows,
// } from "./variables.js";

//Elements
let currentAcc;
const navLink = document.querySelectorAll(".nav-link");
const homeIconLink = document.querySelectorAll(".home-icon-link");
const homeNav = document.querySelector(".nav-link-home");
const transferNav = document.querySelector(".nav-link-transfer");
const historyNav = document.querySelector(".nav-link-history");
const topupNav = document.querySelector(".nav-link-topup");
const contactNav = document.querySelector(".nav-link-contacts");
const settingsNav = document.querySelector(".nav-link-settings");
const homeIconNav = document.querySelector(".home-icon-link-home");
const transferIconNav = document.querySelector(".home-icon-link-transfer");
const historyIconNav = document.querySelector(".home-icon-link-history");
const loanIconNav = document.querySelector(".home-icon-link-loan");
const contactsIconNav = document.querySelector(".home-icon-link-contacts");
const settingsIconNav = document.querySelector(".home-icon-link-settings");
const btnLogout = document.querySelector(".log-out");
const idEl = document.querySelector(".id");
const dateEl = document.querySelector(".date");
const typeEl = document.querySelector(".type");
const detailsEl = document.querySelector(".details");
const greetingEl = document.querySelector(".greeting");
const curBalanceEl = document.querySelector(".current-bal");
const incBalanceEl = document.querySelector(".incomes-bal");
const expBalanceEl = document.querySelector(".expenses-bal");
const transactionsContainer = document.querySelector(".transactions");
const inputAcc = document.querySelector(".input-account");
const inputAmt = document.querySelector(".input-amount");
const inputPurp = document.querySelector(".input-purpose");
const inputPin = document.querySelector(".input-pin");
const formLogin = document.querySelector(".form");
const btnTransfer = document.querySelector(".transfer-btn");
const btnLogin = document.querySelector(".login-btn");
const inputUsernameLogin = document.querySelector(".login-username");
const inputPinLogin = document.querySelector(".login-pin");
const homePageUI = document.querySelector(".home-icon-box");
const transferPageUI = document.querySelector(".transfer-container");
const historyPageUI = document.querySelector(".transact-history-box");
const loginPageUI = document.querySelector(".form-container");
const bodyUI = document.querySelector(".header");
const btnDeleteAcc = document.querySelector(".delete-account");

const account1 = {
  holder: "Prince Ojukwu",
  accountNo: 78922,
  username: "vectorojay",
  incomeFlows: [3500, 20000, -3700, 7000, -15000, 235000, 6000, 15000],
  details: [
    `Domino's Pizza Large`,
    "Acceptance fee",
    "For Data",
    "Books payment",
    "March Loan",
    `Mom's shopping funds`,
    "Sneakers",
    "Chez payment",
  ],
  pin: 8090,
  currency: "NGN",
};

const account2 = {
  holder: "Eke Ojukwu",
  accountNo: 44567,
  username: "lalaa",
  incomeFlows: [8400000, 300000, -4000, 17000, -35000, -55500, 12000],
  details: [
    `Lekki Phase 2 Land`,
    "Solcom Wages",
    "For Data",
    "Books payment",
    "March Loan",
    `Mom's shopping funds`,
    "Sneakers",
  ],
  pin: 3151,
  currency: "NGN",
};

const accounts = [account1, account2];
const incomeFlows = [3500, 20000, -3700, 7000, -15000, 235000, 6000];

// Form Validation

// Check if username value is empty
// Check if it contains special characters
// Check if it is between 3 to 10 characters

// Setting error message
const setError = (element, message) => {
  const formControl = element.parentElement;
  const errorDisplay = formControl.querySelector("small");

  errorDisplay.textContent = message;
  errorDisplay.classList.add("error");
};

const setSuccess = (element, message) => {
  const formControl = element.parentElement;
  const errorDisplay = formControl.querySelector("small");

  errorDisplay.textContent = "";
};

// Displaying landing page
const displayPage = () => {
  loginPageUI.classList.add("hidden");
  bodyUI.classList.remove("hidden");
  homePageUI.classList.remove("hidden");
  transferPageUI.classList.add("hidden");
  historyPageUI.classList.add("hidden");
};

// Displaying login page
const displayLogin = () => {
  loginPageUI.classList.remove("hidden");
  bodyUI.classList.add("hidden");
  homePageUI.classList.add("hidden");
  transferPageUI.classList.add("hidden");
  historyPageUI.classList.add("hidden");
};

// Retrieving details from local storage
const storedUsername = localStorage.getItem("username");
const storedPin = localStorage.getItem("pin");

// Automatically display page if user has
if (storedUsername && storedPin) displayPage();

// Retrieving user inputs

// Validating user login
const validateUserLogin = () => {
  const inputUsernameLoginValue = inputUsernameLogin.value.trim();
  const inputPinLoginValue = inputPinLogin.value.trim();
  // Check if username or pin value is empty
  if (inputUsernameLoginValue === "" || inputPinLoginValue === "") {
    setError(inputUsernameLogin, "Please enter a username");
    setError(inputPinLogin, "Please enter a pin");
  } else if (
    // check if username and pin values is in local storage
    inputUsernameLoginValue === storedUsername &&
    inputPinLoginValue === storedPin
  ) {
    displayPage();
  } else {
    // Save the username and pin to local storage
    localStorage.setItem("username", inputUsernameLoginValue);
    localStorage.setItem("pin", inputPinLoginValue);

    displayPage();
  }
};

// Implementing Login
btnLogin.addEventListener("click", function (e) {
  e.preventDefault();
  validateUserLogin();
  // validatePinLogin();

  //   loginPageUI.classList.remove("hidden");
  //   bodyUI.classList.add("hidden");
  // });
  // if (
  //   inputUsernameLoginValue === storedUsername &&
  //   inputPinLoginValue === storedPin
  // ) {
  //   loginPageUI.classList.add("hidden");
  //   bodyUI.classList.remove("hidden");
  //   homePageUI.classList.remove("hidden");
  //   transferPageUI.classList.add("hidden");
  //   historyPageUI.classList.add("hidden");
  // } else {
  //   localStorage.setItem("username", inputUsernameLoginValue);
  //   localStorage.setItem("pin", inputPinLoginValue);

  //   loginPageUI.classList.add("hidden");
  //   bodyUI.classList.remove("hidden");
  //   homePageUI.classList.remove("hidden");
  //   transferPageUI.classList.add("hidden");
  //   historyPageUI.classList.add("hidden");
  // }
});

// Implementing Logout
btnLogout.addEventListener("click", function (e) {
  e.preventDefault();

  displayLogin();
});

btnDeleteAcc.addEventListener("click", function (e) {
  e.preventDefault();
  const confirmDelete = confirm(
    "Are you sure you want to delete your account?"
  );
  if (confirmDelete) {
    localStorage.removeItem("username");
    localStorage.removeItem("pin");

    displayLogin();
  }
});
// } else if (inputPinLoginValue.length < 4 || inputPinLoginValue.length > 4) {
//   alert("Pin must be 4 digits!");
// inputUsernameLogin.addEventListener("change", function (e) {
//   validateLoginInput();
// });

// Check if input pin value is empty
// Check if it is only numbers
// Check if it is 4 digits

// const validatePinLogin = () => {

//   if ((inputPinLoginValue = "")) {
//     alert("Please enter your pin!");
//   } else if (inputPinLoginValue.length < 4 || inputPinLoginValue.length > 4) {
//     alert("Pin must be 4 digits!");
//   }
// };

//  if (inputUsernameLoginValue === "" && inputPinLogin.value === "") {
//    alert("Please fill in your username and pin to continue!!!");
//  } else if (inputUsernameLogin.value === "") {
//    alert("Please fill in your username!!!");
//  } else if (inputPinLogin.value === "") {
//    alert("Please fill in your pin!!!");
//  }

// btnLogin.addEventListener("click", function (e) {
//   e.preventDefault();
//   validateUsernameLogin();
// });

// navLink.forEach((link) => {
//   link.style.opacity = ".6";
// });

// Functions

// Displaying transactions
// const displayTransaction = function (acc) {
//   transactionsContainer.innerHTML = "";

//   acc.incomeFlows.forEach(function (income, index) {
//     const type = income > 0 ? "deposit" : "transfer";

//     const now = new Date();
//     console.log(now);
//     const date = `${now.getDate()}`.padStart(2, 0);
//     const month = `${now.getMonth() + 1}`.padStart(2, 0);
//     const year = now.getFullYear();
//     const detailDisplay = acc.details[index];
//     console.log(detailDisplay);

//     const html = `<div class="transaction">
//         <div class="transaction-title id">
//           <p>#00${index + 1}</p>
//         </div>
//         <div class="transaction-title date">
//           <p>${date}/${month}/${year}</p>
//         </div>
//         <div class="transaction-title type type-${type}">
//           <p>${type.toUpperCase()}</p>
//         </div>
//         <div class="transaction-title details">
//           <p>${detailDisplay}</p>
//         </div>
//         <div class="transaction-title type-${type} amount">
//           <p>${currencyFormat(
//             Math.abs(income),
//             navigator.language,
//             acc.currency
//           )}</p>
//           </div>
//           </div>`;
//     transactionsContainer.insertAdjacentHTML("afterbegin", html);
//   });
// };

// // // console.log(transactionsContainer);

// // Displaying Date
// const displayDate = setInterval(function () {
//   const now = new Date();
//   // console.log(now);
//   const date = `${now.getDate()}`.padStart(2, 0);
//   const month = `${now.getMonth() + 1}`.padStart(2, 0);
//   const year = now.getFullYear();
//   const hour = `${now.getHours()}`.padStart(2, 0);
//   const minutes = `${now.getMinutes()}`.padStart(2, 0);

//   const options = {
//     day: "numeric",
//     month: "short",
//     year: "numeric",
//     hour: "numeric",
//     minute: "numeric",
//     second: "numeric",
//   };

//   dateEl.textContent = new Intl.DateTimeFormat("en-US", options).format(now);
// }, 1000);

// // Formatting currency
// const currencyFormat = function (value, locale, currency) {
//   return new Intl.NumberFormat(locale, {
//     style: "currency",
//     currency: currency,
//   }).format(value);
// };

// // Displaying Current Balance
// const displayCurBalance = function (acc) {
//   acc.totalBalance = acc.incomeFlows.reduce((acc, cur) => acc + cur, 0);
//   curBalanceEl.textContent = currencyFormat(
//     acc.totalBalance,
//     navigator.language,
//     acc.currency
//   );
//   console.log(curBalanceEl.textContent);
//   console.log(acc.totalBalance);
// };

// // Displaying Total Incomes
// const displayIncomes = function (acc) {
//   acc.totalIncomes = acc.incomeFlows
//     .filter((income) => income > 0)
//     .reduce((acc, cur) => acc + cur, 0);

//   incBalanceEl.textContent = currencyFormat(
//     acc.totalIncomes,
//     navigator.language,
//     acc.currency
//   );
//   console.log(acc.totalIncomes);
// };

// // Displaying Total Expenses
// const displayExpenses = function (acc) {
//   acc.totalExpenses = acc.incomeFlows
//     .filter((income) => income < 0)
//     .reduce((acc, cur) => acc + cur, 0);

//   expBalanceEl.textContent = currencyFormat(
//     Math.abs(acc.totalExpenses),
//     navigator.language,
//     acc.currency
//   );
//   console.log(acc.totalExpenses);
// };

// // let currentAcc;
// // let username;
// // let pin;

// const homeActive = function () {
//   homeNav.style.opacity = "1";
//   historyNav.style.opacity = ".6";
//   transferNav.style.opacity = ".6";
//   topupNav.style.opacity = ".6";
//   contactNav.style.opacity = ".6";
//   settingsNav.style.opacity = ".6";
//   homePageUI.classList.remove("hidden");
//   historyPageUI.classList.add("hidden");
//   transferPageUI.classList.add("hidden");
// };

// const transferActive = function () {
//   transferNav.style.opacity = "1";
//   homeNav.style.opacity = ".6";
//   historyNav.style.opacity = ".6";
//   topupNav.style.opacity = ".6";
//   contactNav.style.opacity = ".6";
//   settingsNav.style.opacity = ".6";
//   transferPageUI.classList.remove("hidden");
//   historyPageUI.classList.add("hidden");
//   homePageUI.classList.add("hidden");
// };

// const historyActive = function () {
//   historyNav.style.opacity = "1";
//   homeNav.style.opacity = ".6";
//   transferNav.style.opacity = ".6";
//   topupNav.style.opacity = ".6";
//   contactNav.style.opacity = ".6";
//   settingsNav.style.opacity = ".6";
//   historyPageUI.classList.remove("hidden");
//   homePageUI.classList.add("hidden");
//   transferPageUI.classList.add("hidden");
// };

// const username = inputUsernameLogin.value.trim();
// console.log(username);

// const pin = Number(inputPinLogin.value);
// console.log(pin);

// currentAcc = accounts.find((acc) => acc.username === username);
// console.log(currentAcc);

// if (currentAcc?.pin === pin) {
//   loginPageUI.classList.add("hidden");
//   bodyUI.classList.remove("hidden");
//   homePageUI.classList.remove("hidden");
//   transferPageUI.classList.add("hidden");
//   historyPageUI.classList.add("hidden");
//   greetingEl.textContent = `Good morning, ${username}`;
// } else {
//   validateUsernameLogin();
//   validateLoginInput();
// }

// inputUsernameLogin.value = "";
// inputPinLogin.value = "";

// displayTransaction(currentAcc);
// displayCurBalance(currentAcc);
// displayIncomes(currentAcc);
// displayExpenses(currentAcc);
// console.log(currentAcc);
// });

// // displayCurBalance(currentAcc);
// // displayExpenses(currentAcc);
// // displayIncomes(currentAcc);
// // displayTransaction(currentAcc);
// // console.log(currentAcc.totalBalance);

// // Implementing transfers
// btnTransfer.addEventListener("click", function (e) {
//   e.preventDefault();

//   const receiverAcc = accounts.find(
//     (acc) => acc.accountNo === Number(inputAcc.value)
//   );
//   const amount = Number(inputAmt.value);
//   const purpose = inputPurp.value;
//   const pin = Number(inputPin.value);

//   if (
//     receiverAcc?.accountNo !== currentAcc.accountNo &&
//     amount > 0 &&
//     amount <= currentAcc.totalBalance &&
//     currentAcc.pin === pin
//   ) {
//     currentAcc.incomeFlows.push(-amount);
//     currentAcc.details.push(purpose);
//     receiverAcc.incomeFlows.push(amount);
//     receiverAcc.details.push(purpose);
//   }

//   inputAmt.value = "";
//   inputPurp.value = "";
//   inputPin.value = "";
//   inputAcc.value = "";

//   displayCurBalance(currentAcc);
//   displayExpenses(currentAcc);
//   displayIncomes(currentAcc);
//   displayTransaction(currentAcc);
//   console.log(currentAcc.totalBalance);
// });

// // Implementing navigations

// // Preventing side navigation link defaults
// navLink.forEach((link) => {
//   link.addEventListener("click", function (e) {
//     e.preventDefault();
//   });
// });

// // Preventing home icon navigation link defaults
// homeIconLink.forEach((link) => {
//   link.addEventListener("click", function (e) {
//     e.preventDefault();
//   });
// });

// // Showing active links
// homeNav.addEventListener("click", function (e) {
//   homeActive();
// });

// historyNav.addEventListener("click", function (e) {
//   historyActive();
// });

// transferNav.addEventListener("click", function (e) {
//   transferActive();
// });

// // topupNav.addEventListener("click", function (e) {});

// // contactNav.addEventListener("click", function (e) {});

// // settingsNav.addEventListener("click", function (e) {});

// homeIconNav.addEventListener("click", function (e) {
//   homeActive();
// });

// transferIconNav.addEventListener("click", function (e) {
//   transferActive();
// });

// historyIconNav.addEventListener("click", function (e) {
//   historyActive();
// });

// loanIconNav.addEventListener("click", function (e) {
//   // topupActive();
// });

// contactsIconNav.addEventListener("click", function (e) {
//   // contactsActive();
// });

// settingsIconNav.addEventListener("click", function (e) {
//   // settingActive();
// });
// // export {
// //   displayTransaction,
// //   displayDate,
// //   displayCurBalance,
// //   displayIncomes,
// //   displayExpenses,
// // };

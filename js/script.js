"use strict";

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

// Retrieving registered users from local storage
const storedUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];

// Removing error message when user starts typing in input box
inputUsernameLogin.addEventListener("input", function (e) {
  setSuccess(inputUsernameLogin);
});

inputPinLogin.addEventListener("input", function (e) {
  setSuccess(inputPinLogin);
});

const userExists = storedUsers.some((user) => user.username);

// // Retrieving user inputs

// Validating user login
const validateUserLogin = () => {
  const inputUsernameLoginValue = inputUsernameLogin.value.trim();
  const inputPinLoginValue = inputPinLogin.value.trim();
  // const storedUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];

  //   storedUsers.push(newUser);

  //   localStorage.setItem("users", JSON.stringify(storedUsers));

  // Check if username or pin value is empty
  if (inputUsernameLoginValue === "" && inputPinLoginValue === "") {
    setError(inputUsernameLogin, "Please enter a username");
    setError(inputPinLogin, "Please enter a pin");
    return;
  }

  if (inputUsernameLoginValue === "") {
    setError(inputUsernameLogin, "Please enter a username");
    return;
  }

  if (inputPinLoginValue === "") {
    setError(inputPinLogin, "Please enter a pin");
    return;
  }

  // Checking if user exists in local storage

  const user = storedUsers.find(
    (user) => user.username === inputUsernameLoginValue
  );

  const userExists = storedUsers.some((user) => user.username);

  if (userExists) {
    if (inputPinLoginValue === user.pin) {
      console.log(user);
      displayPage();
    } else {
      setError(inputPinLogin, "Incorrect Pin");
    }
  } else {
    storedUsers.push({ inputUsernameLoginValue, inputPinLoginValue });
    console.log(storedUsers);
    localStorage.setItem("registeredUsers", JSON.stringify(storedUsers));
    displayPage();
  }
};

//   // if (
//   //   // check if username and pin values is in local storage
//   //   storedUsers.includes(newUser[username])
//   //   // inputUsernameLoginValue === storedUsername &&
//   //   // inputPinLoginValue === storedPin
//   // ) {
//   //   displayPage();
//   // } else {
//   //   // Save the username and pin to local storage
//   //   // storedUsers.push(newUser);
//   //   // localStorage.setItem("username", inputUsernameLoginValue);
//   //   // localStorage.setItem("pin", inputPinLoginValue);

//   //   displayPage();
//   // }
// };

// // Implementing Login
btnLogin.addEventListener("click", function (e) {
  e.preventDefault();
  validateUserLogin();
  // validatePinLogin();
});

// // Implementing Logout
// btnLogout.addEventListener("click", function (e) {
//   e.preventDefault();
//   displayLogin();
// });

// btnDeleteAcc.addEventListener("click", function (e) {
//   e.preventDefault();
//   const confirmDelete = confirm(
//     "Are you sure you want to delete your account?"
//   );
//   if (confirmDelete) {
//     localStorage.removeItem("username");
//     localStorage.removeItem("pin");

//     displayLogin();
//   }
// });

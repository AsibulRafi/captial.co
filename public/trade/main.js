// let accounts = [defaultAccount];

function renderIframe(webtraderLink) {
  console.log("renderIframe");
  document.getElementById(
    "iframe"
  ).innerHTML = `<iframe src=${webtraderLink} title="webtrader" />`;
}

function selectAccount(selectedAccount) {
  const webtraderLink = `https://currency.web-trader.online/#/?login=${selectedAccount.login}&password=${selectedAccount.password}`;
  console.log("selectedAccount()", selectedAccount);
  renderIframe(webtraderLink);
}

function createAccountsList(accounts) {
  console.log("createAccountsList()", accounts);
  const selector = document.getElementById("account-select");
  if (Array.isArray(accounts)) {
    if (accounts.length !== 0) {
      accounts.map((accountCred) => {
        console.log(accountCred);
        const option = document.createElement("option");
        const text = document.createTextNode(accountCred.login);
        option.appendChild(text);
        option.value = accountCred.login;
        selector.appendChild(option);
      });
      selector.style.display = "block";

      selectAccount(accounts[0]);
      document.getElementById("demo-area").style.display = "none";
      selector.onchange = function (event) {
        selectAccount(event.target.value);
      };
    } else {
      // alert('You need to create an account for trading')
      console.log("Client have no accounts");
    }
  } else {
    console.log("Account list error");
  }
  // selectAccount(selectElement.value);
}

function deleteAccountsList() {
  console.log("deleteAccountsList()");
  const selector = document.getElementById("account-select");
  selector.innerHTML = "";
  selector.style.display = "none";
}

function getAccountsList(email) {
  console.log("getAccountsList()", email);
  $.post("accounts.php", { email: email }, (data) => {
    if (data.length) {
      //   accounts = data;
      console.log(JSON.parse(data));
      createAccountsList(JSON.parse(data));
    } else {
      alert("You have no any account");
    }
  });
}

// getAccountsList();

function firstLogin() {
  console.log("firstLogin()");
  let defaultAccount = {
    login: "50502849",
    password: "Aa123456",
  };
  let account = defaultAccount;
  const webtraderLink = `https://currency.web-trader.online/#/?login=${account.login}&password=${account.password}`;

  //   if (account !== defaultAccount) {
  deleteAccountsList();
  document.getElementById("demo-area").style.display = "block";
  showHideSignUpButton();
  // createAccountsList();

  renderIframe(webtraderLink);
}

function showHideSignUpButton() {
  var x = document.getElementById("openaccount-li");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function clickOnDemo() {
  document.querySelector(".login__action-link").click();
}
// firstLogin();

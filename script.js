"use strict";

const fromCur = document.querySelector("#fromCur");
const fromVal = document.querySelector(".from");
const toCur = document.querySelector("#toCur");
const toVal = document.querySelector(".to");
const result = document.querySelector(".result");

function updateRate() {
  let fromCurValue = fromCur.value;
  let fromValValue = fromVal.value;
  let toCurValue = toCur.value;
  let toValValue;

  // API Call
  // https://apilayer.com/marketplace

  let myHeaders = new Headers();
  myHeaders.append("apikey", "CPpjk0coNkQJMfg47HJ9e6rnbDELN39U");

  let requestOptions = {
    method: "GET",
    redirect: "follow",
    headers: myHeaders,
  };

  fetch(
    `https://api.apilayer.com/currency_data/convert?to=${toCurValue}&from=${fromCurValue}&amount=${fromValValue}`,
    requestOptions
  )
    .then((response) => response.json())
    .then((jsonObj) => {
      if (fromValValue >= 1) {
        toValValue = jsonObj.result.toFixed(3);
      } else {
        toValValue = 0;
      }

      // displaying the value
      toVal.value = toValValue;
      result.textContent = `${fromValValue}  ${fromCurValue} = ${toValValue}  ${toCurValue}`;
    });
}

// displaying the value on opening the site => default
updateRate();

// on changing the from currency
fromCur.addEventListener("change", updateRate);

// on changing the from currency value
fromVal.addEventListener("input", updateRate);

// on changing the to currency
toCur.addEventListener("change", updateRate);

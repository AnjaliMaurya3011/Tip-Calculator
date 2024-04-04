let billAmount = document.getElementById("billAmount");
let percentTip = document.getElementById("percentTip");
let error = document.getElementById("error-message")
let errorMessage = "Please Enter Valid Number!!!"
let tipAmount = document.getElementById("tipAmount")
let total =document.getElementById("total")

function calucalte() {
    let amount = billAmount.value;
    let percent = percentTip.value;
    if (amount === "") {
        // console.log("hello")
        error.textContent = errorMessage;
    }

    else if (percent === "") {
        error.textContent = errorMessage;
          // console.log("hello")
    }

    else {
        error.textContent = ""
        let bill = parseFloat(amount);
        let percents = parseFloat(percent);

         let tipAmounts = (percents/100)*bill;
         tipAmount.textContent= tipAmounts
        //  console.log (tipAmounts)
         let totals = bill+tipAmounts;
        //  console.log(totals)
        total.textContent=totals;

        // tipAmount.value=  tipAmounts;
        // total.value = totals
    }
}
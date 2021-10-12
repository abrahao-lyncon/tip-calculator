function calculate(){
    var billAmount = Number(document.getElementById("bill-amount").value);
    var tipAmount  = Number(document.getElementById("tip-p").value);
    tipAmount = tipAmount / 100;
    var totalTip = billAmount * tipAmount;
    var totalBill = billAmount + totalTip;
    var tipHtml = "<h3>The total tip is: $ <small>" + totalTip.toFixed(2) + "</small></h3>";
    var billHtml = "<h3>Your Bill with Tip is: $ <small>" + totalBill.toFixed(2) + "</small></h3>";
    document.getElementById("res-tip").innerHTML = tipHtml
    document.getElementById("res-conta").innerHTML = billHtml
}




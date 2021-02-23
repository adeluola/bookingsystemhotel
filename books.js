var book = document.getElementById('book');
var room = document.getElementById('rooms');
var checkin = document.getElementById('inputDate1');
var checkout = document.getElementById('inputDate2');
room.style.display = 'none';
var body = document.getElementsByTagName("body");
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

}
else {
    body[0].innerHTML = '<h1> Not a mobile devices </h1>';
    console.log(body);
}
function booker() {
    book.style.display = 'none';
    room.style.display = '';
}
function makePayment() {

    checkout = checkout.value;
    checkin = checkin.value;
    const firstDate = new Date(checkin);
    const secondDate = new Date(checkout);
    const oneDay = 24 * 60 * 60 * 1000;
    var diff = Math.round(Math.abs((secondDate - firstDate) / oneDay));


    var amount = document.getElementById("roomtype").value;
     var types = document.getElementById(amount);
    var price = types.getAttribute('price');
    var product = price * diff;
    
    FlutterwaveCheckout({
    public_key: "FLWPUBK_TEST-SANDBOXDEMOKEY-X",
    tx_ref: "hooli-tx-1920bbtyt",
    amount: product,
    currency: "GHS",
    country: "GH",
    payment_options: "card, mobilemoneyghana, ussd",
    redirect_url: 
      "https://callbacks.piedpiper.com/flutterwave.aspx?ismobile=34",
    meta: {
      consumer_id: 23,
      consumer_mac: "92a3-912ba-1192a",
    },
    customer: {
      email: "user@gmail.com",
      phone_number: "08102909304",
      name: "yemi desola",
    },
    callback: function (data) {
      console.log(data);
    },
    onclose: function() {
      // close modal
    },
    customizations: {
      title: "My store",
      description: "Payment for items in cart",
      logo: "C:/niit/Frontend/booking/User-Avatar-in-Suit-PNG.png",
    },
  });

}
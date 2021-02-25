if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

}
else {
  var body = document.getElementsByTagName("body");
    body[0].innerHTML = '<h1> Not a mobile devices </h1>';
}
var book = document.querySelectorAll('.butt');
var room = document.querySelectorAll('.rooms');
var checkin = document.querySelectorAll('.inputDate');
var checkout = document.querySelectorAll('.inputDate');
console.log(room[0]);
console.log(checkin[0]);
room[0].style.display = 'none';
room[1].style.display = 'none';
room[2].style.display = 'none';
function standard() {
    book[0].style.display = 'none';
    room[0].style.display = '';

    book[1].style.display = '';
    room[1].style.display = 'none';

    book[2].style.display = '';
    room[2].style.display = 'none';
  
}

function executive(){
  book[1].style.display = 'none';
  room[1].style.display = '';

  room[0].style.display = 'none';
  book[0].style.display = '';

  room[2].style.display = 'none';
  book[2].style.display = '';


}
function presidential(){
  book[2].style.display = 'none';
  room[2].style.display = '';

  room[0].style.display = 'none';
  book[0].style.display = '';

  room[1].style.display = 'none';
  book[1].style.display = '';
}
function closer(){
book[0].style.display = '';
room[0].style.display = 'none';
}
function closer2()
{
  book[1].style.display = '';
  room[1].style.display = 'none';
}
function closer3(){
  book[2].style.display = '';
  room[2].style.display = 'none';
}
function makePayment() {

  checkout1 = checkout[0].value;
  checkin1 = checkin[0].value;
  console.log(checkin1,checkout1);
  const firstDate = new Date(checkin1);
  const secondDate = new Date(checkout1);
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
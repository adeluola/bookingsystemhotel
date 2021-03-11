if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

}
else {
  var body = document.getElementsByTagName("body");
  body[0].innerHTML = '<h1> Not a mobile devices </h1>';
}

var book = document.querySelectorAll('.butt');
var room = document.querySelectorAll('.rooms');
var checkin = document.querySelectorAll('.inputDate');
var checkout = document.querySelectorAll('.outputDate');
var images = document.querySelectorAll('.images');
var recipt = document.querySelectorAll('.recipt');
var roomie = document.querySelectorAll('.rommie');
var nights = document.querySelectorAll('.nights');
console.log(images[0]);
room[0].style.display = 'none';
room[1].style.display = 'none';
room[2].style.display = 'none';

recipt[0].style.display = 'none';
recipt[1].style.display = 'none';
recipt[2].style.display = 'none';
function standard() {
  book[0].style.display = 'none';
  room[0].style.display = '';

  book[1].style.display = '';
  room[1].style.display = 'none';

  book[2].style.display = '';
  room[2].style.display = 'none';

}

function executive() {
  book[1].style.display = 'none';
  room[1].style.display = '';

  room[0].style.display = 'none';
  book[0].style.display = '';

  room[2].style.display = 'none';
  book[2].style.display = '';


}
function presidential() {
  book[2].style.display = 'none';
  room[2].style.display = '';

  room[0].style.display = 'none';
  book[0].style.display = '';

  room[1].style.display = 'none';
  book[1].style.display = '';
}
function closer() {
  book[0].style.display = '';
  room[0].style.display = 'none';
}
function closer2() {
  book[1].style.display = '';
  room[1].style.display = 'none';
}
function closer3() {
  book[2].style.display = '';
  room[2].style.display = 'none';
}
function standardPayment() {

  var diff = getDateDifference();

  room[0].style.display = 'none';
  recipt[0].style.display = '';

  roomie[0].innerHTML += 'Standard Room';
  nights[0].innerHTML += diff + " ";


 
  

}
function getTotalCharge() {

   var diff = getDateDifference();

  var types = images[0].getAttribute('price');
  var product = types * diff;

  return product;

}
function getDateDifference(){

  checkout1 = checkout[0].value;
  checkin1 = checkin[0].value;

  const firstDate = new Date(checkin1);
  const secondDate = new Date(checkout1);
  const oneDay = 24 * 60 * 60 * 1000;
  var diff = Math.round(Math.abs((secondDate - firstDate) / oneDay));

return diff;
}
function makePayment(){
 FlutterwaveCheckout({
    public_key: "FLWPUBK_TEST-SANDBOXDEMOKEY-X",
    tx_ref: "hooli-tx-1920bbtyt",
    amount: getTotalCharge(),
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
    onclose: function () {
    },
    customizations: {
      title: "My store",
      description: "Payment for items in cart",
      logo: "https://assets.piedpiper.com/logo.png",
    },
  });
}

function executivePayment()
{
  checkout1 = checkout[1].value;
  checkin1 = checkin[1].value;

  const firstDate = new Date(checkin1);
  const secondDate = new Date(checkout1);
  const oneDay = 24 * 60 * 60 * 1000;
  var diff = Math.round(Math.abs((secondDate - firstDate) / oneDay));
  
  var types = images[1].getAttribute('price');
  var product = types * diff;
  console.log(diff);
  console.log(types);
  console.log(product);

}

function presPayment()
{
  checkout1 = checkout[2].value;
  
  checkin1 = checkin[2].value;

  const firstDate = new Date(checkin1);
  const secondDate = new Date(checkout1);
  const oneDay = 24 * 60 * 60 * 1000;
  var diff = Math.round(Math.abs((secondDate - firstDate) / oneDay));
  
  var types = images[2].getAttribute('price');
  var product = types * diff;

}
var nine = moment().set('hour', 9);
$(".custom-list9").text(nine.format("H a"));

var ten = moment().set('hour', 10);
$(".custom-list10").text(ten.format("H a"));

var eleven = moment().set('hour', 11);
$(".custom-list11").text(eleven.format("H a"));

var twelve = moment().set('hour', 12);
$(".custom-list12").text(twelve.format("H a"));

var thirteen = moment().set('hour', 13);
$(".custom-list13").text(thirteen.format("H a"));

var now = moment();
$(".custom-list").text(now.format("H a"));

var fourteen = moment().set('hour', 14);
$(".custom-list14").text(fourteen.format("H a"));

var fifteen = moment().set('hour', 15);
$(".custom-list15").text(fifteen.format("H a"));

var sixteen = moment().set('hour', 16);
$(".custom-list16").text(sixteen.format("H a"));

var seventeen = moment().set('hour', 17);
$(".custom-list17").text(seventeen.format("H a"));


function save(){
   localStorage.setItem('');
};

function get(){
    localStorage.getItem('');
}

var button = document.querySelector('.button');

button.addEventListener("click", function(event) {
    event.preventDefault();
}
);

window.onload = function get() {
};

get('');
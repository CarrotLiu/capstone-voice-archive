//get time
var arr = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"];

var time = new Date();

var year = time.getFullYear();
var month = time.getMonth();
var date = time.getDate();
var hours = time.getHours();
var minutes = time.getMinutes();
var seconds = time.getSeconds();
var week = time.getDay();

function forgetYear() {
  var a = parseInt(year / 1000);
  var b = parseInt((year % 1000) / 100);
  var c = parseInt((year % 100) / 10);
  var d = year % 10;

  console.log(a, b, c, d);
  return arr[a] + arr[b] + arr[c] + arr[d] + "年";
}
console.log(forgetYear());

function forgetNum(num) {
  var a = parseInt(num / 10);
  var b = num % 10;
  if (num <= 10) {
    return arr[num];
  } else if (num < 20) {
    return "十" + arr[b];
  } else if (num % 10 === 10) {
    return arr[a] + "十";
  } else {
    return arr[a] + "十" + arr[b];
  }
}
var str = "";

str += forgetYear(year);
str += forgetNum(month) + "月";
str += forgetNum(date) + "日";
str += forgetNum(hours) + "小时";
str += forgetNum(minutes) + "分钟";
str += forgetNum(seconds) + "秒";

console.log(str);

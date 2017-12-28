function palindrom(str) {
var strl = str.length;
str = str.split('').reverse().join('');
for (var i = 0; i < strl; i++) {
if (str[i] == str[strl - i - 1]) {
return true;
}
else {
return false;
}
}
}
var result = prompt("Введите строку: ");

if (palindrom(result))
alert("палиндром");
else alert("не палиндром");

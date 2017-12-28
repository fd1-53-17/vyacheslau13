function Min() {
var min = arguments[0];
for (var i = 0; i < arguments.length; i++) {
if (arguments[i] < min) min = arguments[i];
}
alert("Минимальное число=" + min);
}
Min(1, 7, 12, 500, 1000);

function Max() {
var max = arguments[1];
for (var i = 0; i < arguments.length; i++) {
if (arguments[i] > max) max = arguments[i];
}
alert("Максимальное число=" + max);
}
Max(1, 7, 12, 500, 1050);
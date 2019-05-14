/* "use strict";

var count = 0;

 function random(min, max){
	 var rand = min + Math.random() * (max + 1 - min);
	 rand = Math.floor(rand);
	 return rand;
 } 
 var randomNum = random(1, 3);
console.log(randomNum);
 
function checkAnswer(random){
	var answer = +prompt('Укажите число');
	console.log(answer);
	
	if(answer === randomNum){
		alert('Поздравляем, вы угадали число!');
		
	} else {
		count++;
		alert('Не угадали\n попыток: ' + count);
		checkAnswer(random);
	}
} 
 checkAnswer(randomNum); */
 
 
/*  function compare(a, b){ // функция с параметрами
    if(a >= 0 && b >= 0){
        var result = a - b;
        alert("Оба числа положительные. A - B = " + result);
    } else if(a < 0 && b < 0){
        result = a * b;
        alert("Оба числа отрицательные. A * B = " + result);
    } else {
        result = a + b;
        alert("Знаки чисел различны. A + B = " + result);
    }
}

compare(3,2); // Вызов функции с параметрами. 3 - а, 2 - b. Выведет: A больше чем В

function inputParams() { // функция без параметров
    var first = +prompt('Введите число a');
    var second = +prompt('Введите число b');
    compare(first,second);
}

inputParams(); // Вызов функции без параметров. */







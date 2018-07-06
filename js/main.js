document.addEventListener('DOMContentLoaded', function() {
	// console.log(document.forms[0]);
	// console.log(document.test);
	// console.log(document.forms[0].elements);
	// console.log(document.test.fname);
	// document.test.fname.value = 'Alex';
	// alert(document.forms[0].elements[2].value);
	/*var fname = document.test.fname;
	fname.onfocus = function() {
		this.style.backgroundColor = 'lightgreen';
		console.log('focused');
	};
	fname.onblur = function() {
		this.style.backgroundColor = 'red';
		console.log('blur');
	};
	fname.onchange = function() {
		console.log('changed');
	};*/
	// RegExp 1 - /Pattern/
	// search, replace, match, split
	// var pattern = /\d\d\d/g;
	// var pattern = /\d{4}/g; 1, 12 ,432,
	/*var pattern = /\d{2}/g;
	var pattern2 = /\d{4}/g;
	var t1 = '02';
	var t2 = '123311';
	console.log(pattern.test(t1));
	console.log(pattern2.test(t2));
	// console.log(pattern.test(t1) || pattern2.test(t2));

	var testString = 'Hello123my123name45364646isRegExp';

	var result = testString.replace(pattern, '');

	console.log(result);
	// создает массив элементов, которые соответствуют паттерну
	result = testString.match(pattern);
	console.log(result);
	result = testString.split(pattern);
	console.log(result);*/
	var phone = document.test.phone;

	phone.onchange = function() {
		//+38(123) 553-23-12
		var pattern = /\+38\(\d{3}\)\s\d{3}\-\d{2}\-\d{2}/;
		if (pattern.test(this.value)) {
			this.classList.remove('invalid');
			this.classList.add('valid');
		} else {
			this.classList.remove('valid');
			this.classList.add('invalid');
		}
	};

	var email = document.test.email;
	email.onchange = function() {
		console.log(event);
		//+38(123) 553-23-12
		var pattern = /[a-zA-Z0-9._]@[a-z]{1,10}\.[a-z]{2,4}/;
		if (pattern.test(this.value)) {
			this.classList.remove('invalid');
			this.classList.add('valid');
		} else {
			this.classList.remove('valid');
			this.classList.add('invalid');
		}
	};

	document.test.onsubmit = function() {
		var isValid = true;
		var message;
		for (var i = 0; i < document.test.elements.length; i++) {
			if (document.test.elements[i].value == '') {
				isValid = false;
				message = 'empty fields';
			}
		}

		if (isValid == false) {
			event.preventDefault();
			alert(message);
		}
	};
});

// Метасимволы.
// \w Любой алфавитно-цифровой символ в верхнем и нижнем регистре и символ подчеркивания(тоже самое, что и [a-zA-Z0-9_]).
// \W Любой символ не являющийся подчеркиванием и не относящийся к алфавитно-цифровым
// \s любой пробельный символ (тоже самое, что [\r\n\f\v\t])
// \S Любой не пробельный символ (тоже самое, что [^\r\n\f\v\t])
// \d любая цифра (digit)
// \D любой не цифровой символ (тоже самое, что [^0-9])

// \v (вертикальная табуляция)
// \t (табуляция)
// \r (перевод каретки)
// \n (перевод строки)
// \f (перевод страницы)

// Наборы символов
// [RrGgBb] - Соответствие указанным символам
// [a-z] Соответствие символам английского алфавита в нижнем регистре
// [0-9] Соответствие указанным цифрам
// [^0-9] Соответствие с чем угодно кроме цифр заданного диапазона

// Квантификатор (Кванторы)
// + Один или несколько символов
// * ноль и более символов
// ? ноль или одно вхождение

// Интервалы
// {3} точное количество совпадений
// {2,3} диапазон
// {3,} не менее
// {,3}  не более

// Якорные символы
// ^  Начало строки
// $  Конец строки
// \b соответствует границе слова

// Флаги
// i выполнение поиска не чувствительного к регистру.
// g выполнение глобального поиска.
// m многострочный режим.
/*var table = document.getElementById('table');*/
/*table.onclick = function(event) {
		if (event.target.tagName == 'TD') {
			event.target.style.backgroundColor = 'yellow';
		}
		if (event.target.tagName == 'TR') {
		}
		if (event.target.tagName == 'TBODY') {
			console.log('tbody clicked');
		}
		if (event.target.tagName == 'TABLE') {
			console.log('table clicked');
		}
		console.log(event.target.tagName);
	};
	for (var i = 0; i < table.rows.length; i++) {
		table.rows[i].onclick = function() {
			this.style.backgroundColor = 'red';
			alert(this);
		};
	}*/

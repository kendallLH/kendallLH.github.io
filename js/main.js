//Famous quotes (original)
$(window).ready(function(){
	var quote = $.ajax({
		url: 'https://andruxnet-random-famous-quotes.p.mashape.com/',
		type: 'POST',
		data: {cat:'famous'},
		dataType: 'json',
		success: function(data) {
			document.getElementById("quote_here").innerHTML = "\"" + data.quote + "\"";
			document.getElementById("author").innerHTML = "-" + data.author;
		},
		beforeSend: function(xhr) {
    		xhr.setRequestHeader("X-Mashape-Authorization", "fDL01xsfZsmsh1h3EtKTxL794D7Gp1t994cjsnUcS6mNnm4jnB"); // Enter here your Mashape key
		}
	});
});


function generate_quote() {
	var quote = $.ajax({
		url: 'https://andruxnet-random-famous-quotes.p.mashape.com/',
		type: 'POST',
		data: {cat:'famous'},
		dataType: 'json',
		success: function(data) {
			document.getElementById("quote_here").innerHTML = "\"" + data.quote + "\"";
			document.getElementById("author").innerHTML = "-" + data.author;
		},
		beforeSend: function(xhr) {
    		xhr.setRequestHeader("X-Mashape-Authorization", "fDL01xsfZsmsh1h3EtKTxL794D7Gp1t994cjsnUcS6mNnm4jnB"); // Enter here your Mashape key
		}
	});
}


//IDEA FOR CAT PAGE: FUNNY PICTURES W/ CAT FACTS UNDER THEM

 
/* //they said so freemium
$(window).ready(function(){
	var quote = $.ajax({
		url: 'https://theysaidso.p.mashape.com/quote',
		type: 'POST',
		data: {category:'inspirational'},
		dataType: 'json',
		success: function(data) {
			//$(xml).find()
			document.getElementById("quote_here").innerHTML = "\"" + data.quote + "\"";
			document.getElementById("author").innerHTML = "-" + data.author;
		},
		beforeSend: function(xhr) {
    		xhr.setRequestHeader("X-Mashape-Authorization", "fDL01xsfZsmsh1h3EtKTxL794D7Gp1t994cjsnUcS6mNnm4jnB");
		}
	});
});


function generate_quote() {
	var quote = $.ajax({
		url: 'https://theysaidso.p.mashape.com/quote',
		type: 'POST',
		data: {category:'inspiration'},
		dataType: 'json',
		success: function(data) {
			document.getElementById("quote_here").innerHTML = "\"" + data.quote + "\"";
			document.getElementById("author").innerHTML = "-" + data.author;
		},
		beforeSend: function(xhr) {
    		xhr.setRequestHeader("X-Mashape-Authorization", "fDL01xsfZsmsh1h3EtKTxL794D7Gp1t994cjsnUcS6mNnm4jnB");
		}
	});
}
*/

/*
$(window).ready(function(){
	
	var quote = $.ajax({
		url: 'http://api.forismatic.com/api/1.0/?method=getQuote&key=&format=jsonp&language=en&jsonp=callbackfunc()',
		type: 'POST',
		//data: {method:'getQuote', key: '', format: 'jsonp', language: 'en', jsonp: 'callbackfunc()'},
		dataType: 'text',
		success: function(data) {
			//$(xml).find()
			//document.getElementById("quote_here").innerHTML = "\"" + data.quote + "\"";
			//document.getElementById("author").innerHTML = "-" + data.author;
		}
	});
	
});

function callbackfunc(data) {
	alert(data) ;
}


function generate_quote() {
	var quote = $.ajax({
		url: 'http://api.forismatic.com/api/1.0/',
		type: 'POST',
		data: {method:'getQuote', key: '', format: 'jsonp', language: 'en'},
		dataType: 'text',
		success: function(data) {
			//document.getElementById("quote_here").innerHTML = "\"" + data.quote + "\"";
			//document.getElementById("author").innerHTML = "-" + data.author;
		}
	});
}
*/

function generate_quote() {
	alert('in generate quote') ;
	var quote = $.ajax({
		url: 'https://andruxnet-random-famous-quotes.p.mashape.com/',
		type: 'POST',
		data: {cat:'famous'},
		dataType: 'json',
		success: function(data) {
			document.getElementById("quote_here").innerHTML = data.quote;
		},
		beforeSend: function(xhr) {
    		xhr.setRequestHeader("X-Mashape-Authorization", "fDL01xsfZsmsh1h3EtKTxL794D7Gp1t994cjsnUcS6mNnm4jnB"); // Enter here your Mashape key
		}
	});
}
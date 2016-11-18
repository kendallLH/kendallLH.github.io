
$(window).ready(function(){
	generate_facts() ;
});

function generate_facts() {
	var num = Math.random()*100 ;
	$.ajax({
		url: 'https://montanaflynn-cat-overflow.p.mashape.com/',
		type: 'GET',
		data: {limit:'1', offset: num},
		dataType: 'text',
		success: function(data) {
			document.getElementById("cat_pic").src = data ;
			//alert(data) ;
		},
		beforeSend: function(xhr) {
    		xhr.setRequestHeader("X-Mashape-Authorization", "fDL01xsfZsmsh1h3EtKTxL794D7Gp1t994cjsnUcS6mNnm4jnB"); // Enter here your Mashape key
		}
	});
}
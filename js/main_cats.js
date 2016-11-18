
$(window).ready(function(){
	generate_cats() ;
});

function generate_cats() {
	$.ajax({
		url: 'https://montanaflynn-cat-overflow.p.mashape.com/',
		type: 'GET',
		data: {limit:'100', offset: 0},
		dataType: 'text',
		success: function(data) {
			//var url = 'https://catoverflow.com/cats/' + 

			var cats = data.split("\n") ;
			var pickCat = cats[Math.floor(Math.random()*100)] ;
			document.getElementById("cat_pic").src = pickCat ;
		},
		beforeSend: function(xhr) {
    		xhr.setRequestHeader("X-Mashape-Authorization", "fDL01xsfZsmsh1h3EtKTxL794D7Gp1t994cjsnUcS6mNnm4jnB"); // Enter here your Mashape key
		}
	});
	return ;
}
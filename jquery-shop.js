$(function() {

$(".buy-item").click(function(){

	var itemLabel = $(this).siblings("h2").text();
	var itemPrice = $(this).siblings("span.price").text();
	var listItem = "<li>"+itemLabel+"(£<span>"+itemPrice+"</span>)<button>Remove</button></li>";
	var totalPrice = parseInt($("#total").text());
	var newPrice = totalPrice + parseInt(itemPrice);

	$("#shopping-cart").append(listItem);
	$("#total").text(newPrice);
});



$("#shopping-cart").on("click", "li button", function(){

	var price = $(this).parent("li").children("span").text();
	var totalPrice = parseInt($("#total").text());
	var newPrice = totalPrice - parseInt(price);

	$("#total").text(newPrice);
	$(this).parent("li").remove();

});
});

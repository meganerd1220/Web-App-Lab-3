function popupfunction(x)
{
	 document.getElementById('popup'+x).style.display='block';
	 document.getElementById('fade'+x).style.display='block';
}

function popupclose(x)
{
	document.getElementById('popup'+x).style.display='none';
	document.getElementById('fade'+x).style.display='none';
}
function addToCart(x)
{
	alert("Item Successfully Added to Cart...");
	document.getElementById("mycart").innerHTML+=x+"<br>";
}

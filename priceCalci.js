var quantity=document.getElementById("4");
var price=document.getElementById("2");
//to display price and quantity
var display=document.getElementById("3");
var quantityDisplay=document.getElementById("6");

var button=document.getElementById("10");

//this function will calculate total and will update the result
function calculateTotal(){
    var itemPrice=price.value;
    var itemQuantity=quantity.value;
    var cost=itemPrice*itemQuantity;
    
    //As soon as the cost is calculated the display will be updated
    display.innerHTML="$"+cost;
    //this will update the quantity
    quantityDisplay.innerHTML=itemQuantity;
    return cost;
      
}
//to display the total on submit.
function onSubmit(){
    var totalonSubmit=calculateTotal();
    alert(totalonSubmit);
}
//when value is entered in price and quantity eventListener will be called and on input calculateTotal function will run
price.addEventListener('input',calculateTotal);
quantity.addEventListener('input',calculateTotal);
quantityDisplay.addEventListener('input',calculateTotal);
button.addEventListener('click',onSubmit);




$(document).ready(function() {
    $("#btnSubmit").click(function(event) {

        var sizeOfPizza = $('#size').val();
        console.log(sizeOfPizza);
        var pizzaCrust = $('#crust').val();
        console.log(pizzaCrust);
        var toppings = [];
        $("input[type = checkbox]:checked").each(function() {
            toppings.push($(this).val())
        });
        var top = 0;
        for (var i = 0; i < toppings.length; i++) {
            top += parseInt(toppings[i]);
        }
        var total = parseInt(sizeOfPizza) + parseInt(pizzaCrust) + parseInt(top);
        alert("the total is: " + total);

        $('#sizeP').append("<td>" + sizeOfPizza + "</td>");
        $('#crustP').append("<td>" + pizzaCrust + "</td>");
        $('#toppz').append("<td>" + top + "</td>");
        event.preventDefault();
    });
    $("#btnAddMore").click(function(event) {
        alert("delivery fee is 2000");
        prompt("enter your location: ");
        alert("we'll reach to you in a few");
    });
});
$(document).ready(function() {
    $("#btnSubmit").click(function(event) {
        event.preventDefault();
        var sizeOfPizza = $('#size').val();
        var pizzaCrust = $('#crust').val();
        var toppings = [];
        $("input[type = checkbox]:checked").each(function() {
            toppings.push($(this).val())
        });
        var top = 0;
        for (var i = 0; i < toppings.length; i++) {
            top += parseInt(toppings[i]);
        }
        var total = parseInt(sizeOfPizza) + parseInt(pizzaCrust) + parseInt(top);
        alert("the total is:" + total);


    });
});
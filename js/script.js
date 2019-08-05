$(document).ready(function() {
    $("#btnSubmit").click(function(event) {
        event.preventDefault();
        var sizeOfPizza = $('#size').val();
        console.log(sizeOfPizza);
        // document.getElementById('sizeP').innerHTML = sizeOfPizza;
        var pizzaCrust = $('#crust').val();
        console.log(pizzaCrust);
        // document.getElementById('crustP').innerHTML = pizzaCrust;
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
        $('#size').text(total);
        $('#sizeP').append("<td>" + sizeOfPizza + "</td>");
        $('#crustP').append("<td>" + pizzaCrust + "</td>");
        $('#toppz').append("<td>" + top + "</td>")
    });
    $("#btnAddMore").click(function(event) {
        event.preventDefault();
        var c = location.reload(forceGet);
    });
});
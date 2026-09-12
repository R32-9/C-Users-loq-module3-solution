$(function () {

    // Close the mobile menu after clicking a menu item
    $(".navbar-nav li a").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

});

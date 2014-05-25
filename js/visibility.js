$(document).ready(function () {

    $(".moreinfo").click(function () {
        $(this).toggleClass("active");
        $(this).next().slideToggle();
    });

});

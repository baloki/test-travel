/* Array containing list of all current listings */
var listingArray = [];

function cacheListings() {

    var productArray = [];

    $(".listing").each(function () {
        productArray.push($(this).attr("data-uniqueid"));       // [0]
        productArray.push($(this).attr("data-resortname"));     // [1]
        productArray.push($(this).attr("data-star"));           // [2]
        productArray.push($(this).attr("data-price"));          // [3]

        listingArray.push(productArray);

        // Resetting Product Array
        productArray = [];
    });

};

function detachListings() {

    var uniqueID = "";

    $(".listing").each(function () {
        uniqueID = $(this).attr("data-uniqueid");

        listings[uniqueID] = $(this).detach();
    });

};

function attachListings() {

    $.each(listingArray, function(key, value) {
        uniqueID = value[0];
        listings[uniqueID].appendTo("#listings");
    });

}

function sortPrice() {

    detachListings();
    listingArray.sort(function(a,b) { return parseFloat(a[3]) - parseFloat(b[3]) } );
    attachListings();

};

function sortStarRating() {

    detachListings();
    listingArray.sort(function(a,b) { return parseFloat(a[2]) - parseFloat(b[2]) } );
    attachListings();

};

function sortAlphabetically() {

    detachListings();
    listingArray.sort(function(a,b) {
        var textA = a[1].toUpperCase();
        var textB = b[1].toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    } );
    attachListings();

};

/* bind sort classes to buttons on document ready */
$(document).ready(function () {

    // Cache all the data values
    cacheListings();
    // Default to sorting by price
    sortPrice();

    // Set-up button bindings
    $(".button[data-sorttype='alphabetically']").click(function () {
        $(".button").removeClass("active");
        $(".button[data-sorttype='alphabetically']").addClass("active");
        sortAlphabetically();
    });

    $(".button[data-sorttype='price']").click(function () {
        $(".button").removeClass("active");
        $(".button[data-sorttype='price']").addClass("active");
        sortPrice();
    });

    $(".button[data-sorttype='star']").click(function () {
        $(".button").removeClass("active");
        $(".button[data-sorttype='star']").addClass("active");
        sortStarRating();
    });

});

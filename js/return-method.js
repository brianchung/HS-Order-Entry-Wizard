const radioCard = $('input[name="returnMode"');
const retOriginContainer = $('.return-origin');
const retAbandonContainer = $('.return-abandon');


radioCard.on( "click", function() {
    const id = $(this).attr("id");

    switch(id) {
        case "retOrigin":
            retOriginContainer.show();
            retAbandonContainer.hide();


            break;
        case "retAbandon":
            retOriginContainer.hide();
            retAbandonContainer.show();


            break;
    }
} );

// function toggleAddress() {
// if ($(this).is(':checked')==true) {
//         $('.return-addr').hide();
//         $('.return-addr-manual').show();
//         $('.return-addr-manual').css('display', 'flex');
//     } else {
//         $('.return-addr').show();
//         $('.return-addr-manual').hide();
//     }
// }

// toggleAddress();

// $('#sameAsSender').on("click", toggleAddress);
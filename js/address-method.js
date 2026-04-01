const radioCard = $('input[name="addrMode"');
const addrSearchContainer = $('.addr-search');
const addrManualContainer = $('.addr-manual');

radioCard.on( "click", function() {
    const id = $(this).attr("id");

    switch(id) {
        case "modeSearch":
            addrSearchContainer.show();
            addrManualContainer.hide();

            break;
        case "modeManual":
            addrSearchContainer.hide();
            addrManualContainer.show();

            break;
    }

    $('.btn-container button').prop('disabled', false);
} );
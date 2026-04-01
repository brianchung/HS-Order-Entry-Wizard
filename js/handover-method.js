const radioCard = $('input[name="senderHandover"');
const courierContainer = $('.handover-courier');
const dropoffContainer = $('.handover-dropoff');
const btnContinue = $('.btn-continue');
const btnNext = $('.btn-next');

radioCard.on( "click", function() {
    const id = $(this).attr("id");

    switch(id) {
        case "handoverPickup":
            courierContainer.show();
            dropoffContainer.hide();

            btnContinue.show();
            btnNext.hide();
            break;
        case "handoverDropoff":
            courierContainer.hide();
            dropoffContainer.show();

            btnContinue.hide();
            btnNext.show();
            break;
    }

    // $('.btn-container button').prop('disabled', false);
} );
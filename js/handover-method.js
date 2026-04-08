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

            btnContinue.css('display', 'flex');
            btnNext.hide();
            break;
        case "handoverDropoff":
            courierContainer.hide();
            dropoffContainer.show();

            btnContinue.hide();
            btnNext.css('display', 'flex');
            break;
    }

    // $('.btn-container button').prop('disabled', false);
} );
const radioCard = $('input[name="verify"');
const btnContinue = $('.btn-continue');
const btnNext = $('.btn-next');

radioCard.on( "click", function() {
    const id = $(this).attr("id");

    switch(id) {
        case "verYes":
            btnContinue.css('display', 'flex');
            btnNext.hide();
            break;
        case "verNo":
            btnContinue.hide();
            btnNext.css('display', 'flex');
            break;
    }
} );
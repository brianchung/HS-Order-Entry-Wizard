const radioCard = $('input[name="cod"');
const btnCart = $('#btn-cart');
const btnInvoice = $('#btn-invoice');

radioCard.on( "click", function() {
    const id = $(this).attr("id");

    switch(id) {
        case "codYes":
            btnCart.css('display', 'flex');
            btnInvoice.hide();
            break;
        case "codNo":
            btnCart.hide();
            btnInvoice.css('display', 'flex');
            break;
    }
} );
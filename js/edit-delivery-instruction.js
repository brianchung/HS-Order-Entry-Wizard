$(function () {
    $('#confirmDetailsButton').on('click', function () {
        $('.address-value').each(function () {
            $(this).text($(this).data('confirmed'));
        });

        $('#fullDetailsButton').addClass('d-none');
        $('#confirmedChip').removeClass('d-none');
        $('#trackingActions').removeClass('d-none');

        bootstrap.Modal
            .getOrCreateInstance($('#viewDetailsModal')[0])
            .hide();
    });

    $('input[name="deliveryOption"]').on('change', function () {
        const selectedOption = $(this).val();

        $('[data-option-panel]').each(function () {
            $(this).prop(
                'hidden',
                $(this).data('option-panel') !== selectedOption
            );
        });
    });

    $('#deliveryInstructionsForm').on('submit', function (event) {
        event.preventDefault();

        bootstrap.Modal
            .getOrCreateInstance($('#editDeliveryInstructionsModal')[0])
            .hide();
    });

    $('input[name="safePlace"]').on('change', function () {
        const selectedOption = $(this).val();

        if (selectedOption === 'location') {
            $('#safePlaceLocation').show();
        } else {
            $('#safePlaceLocation').hide();
        }
    });
});
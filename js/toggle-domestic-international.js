function setRouteUI() {
    const isDomestic = $('#routeDomestic').is(':checked');
    $('.domestic').toggle(isDomestic);
    $('.international').toggle(!isDomestic);
}

// init
setRouteUI();

// bind
$('input[name="routeType"]').on('change', setRouteUI);
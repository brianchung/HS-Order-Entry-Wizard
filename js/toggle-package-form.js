function togglePackageUI() {
    const radioChecked = $('input[name="pkgSize"]').is(':checked');
    const isCustom = $('#szCustom').is(':checked');

    if (radioChecked) {
         if(isCustom) {     
            $('#package-input-editable').css({'display': 'flex'});
            $('#package-input-disabled').css({'display': 'none'});
         }
         else {
            $('#package-input-editable').css({'display': 'none'});
            $('#package-input-disabled').css({'display': 'flex'});
         }
    }
}

// init
togglePackageUI();

// bind
$('input[name="pkgSize"]').on('change', togglePackageUI);
function parcelRadioCheck() {
    const radioChecked = $('#typePackage, #typeMail').is(':checked');
    if(radioChecked) {
        $('div.btn-container > button').prop('disabled', false); 
    }
}

// init
parcelRadioCheck();

// bind
$('input[name="parcelType"]').on('change', parcelRadioCheck);
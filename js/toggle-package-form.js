function togglePackageUI() {
   const pkgSizeID = $('input[name="pkgSize"]:checked').attr('id');
   const inputEdit = $('#package-input-editable');
   const inputDisabled = $('#package-input-disabled');

   const weight = $('#package-input-disabled #weight');
   const length = $('#package-input-disabled #length');
   const width = $('#package-input-disabled #width');
   const height = $('#package-input-disabled #height');

   switch(pkgSizeID) {
      case 'szSmall':
         weight.val('1');
         length.val('30');
         width.val('20');
         height.val('8');
         inputDisabled.css({'display': 'flex'});
         inputEdit.css({'display': 'none'});

         break;
      case 'szMedium':
         weight.val('3');
         length.val('50');
         width.val('30');
         height.val('20');
         inputDisabled.css({'display': 'flex'});
         inputEdit.css({'display': 'none'});

         break;
      case 'szLarge':
         weight.val('20');
         length.val('100');
         width.val('50');
         height.val('50');
         inputDisabled.css({'display': 'flex'});
         inputEdit.css({'display': 'none'});

         break;
      case 'szCustom':
         inputDisabled.css({'display': 'none'});
         inputEdit.css({'display': 'flex'});

         break;
      default:
         // code block
   }
}

// init
togglePackageUI();

// bind
$('input[name="pkgSize"]').on('change', togglePackageUI);
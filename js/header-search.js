const actionSearchBtn = $('.header-action-search');
const headerSearch = $('.header-search');
const desktopNav = $('.desktop-nav');
const desktopAction = $('.header-actions');
const closeSearch = $('.header-search-close');

actionSearchBtn.on( "click", function() {
  desktopNav.hide();
  desktopAction.hide();
  headerSearch.addClass('active');
} );


closeSearch.on( "click", function() {
  desktopNav.show();
  desktopAction.show();
  headerSearch.removeClass('active');
} );
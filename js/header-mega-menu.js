$(".nav-item-wrap").on("mouseenter", function () {
    $(this).addClass("active");
});

$(".nav-item-wrap").on("mouseleave", function () {
    const $this = $(this);
    $this.removeClass("active");
});
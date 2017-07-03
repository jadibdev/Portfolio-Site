$(document).on("click", "a", function(event) {
  event.preventDefault();

  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top
    },
    500
  );
});

$(document).ready(function() {
  $(".navbar-toggle").on("click", function() {
    $(this).toggleClass("active");
  });
});

$(document).ready(function() {
  $(".dropdown-toggle").dropdown();
});


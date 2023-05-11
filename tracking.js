// Unobtrusive Event Tracking
$(".track").on("click", function () {
  // Defined variables for tracking
  var eCategory = $(this).data("category");
  var eAction = $(this).data("action");
  var eLabel = $(this).data("label");

  // Test
  // console.log(eCategory + ", " + eAction + ", " + eLabel);

  // Google Event Track
  ga("send", "event", eCategory, eAction, eLabel);

  // Redirect to the href
  window.open(this.href);

  // Don't jump the gun
  return false;
});

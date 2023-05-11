// Unobtrusive Event Tracking
$(".track").on("click", function (event) {
    // Defined variables for tracking
    const eCategory = $(this).data("category");
    const eAction = $(this).data("action");
    const eLabel = $(this).data("label");
  
    if (!eCategory || !eAction || !eLabel) {
      console.error("Missing data attributes for event tracking");
      return;
    }
  
    // Test
    // console.log(eCategory + ", " + eAction + ", " + eLabel);
  
    // Google Event Track
    ga("send", "event", eCategory, eAction, eLabel);
  
    // Redirect to the href
    event.preventDefault();
    window.open(this.href, "_blank");
  });
  
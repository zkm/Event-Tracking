// Unobtrusive Event Tracking (Vanilla JS)
function trackEventHandler(event) {
  // Defined variables for tracking
  const element = event.currentTarget;
  const eCategory = element.getAttribute("data-category");
  const eAction = element.getAttribute("data-action");
  const eLabel = element.getAttribute("data-label");

  if (!eCategory || !eAction || !eLabel) {
    console.error("Missing data attributes for event tracking");
    return;
  }

  // Google Event Track
  if (typeof ga === "function") {
    ga("send", "event", eCategory, eAction, eLabel);
  } else {
    console.error("Google Analytics (ga) is not defined");
  }

  // For demo: show tracking event before navigating
  event.preventDefault();
  if (element.tagName === "A" && element.href) {
    setTimeout(function() {
      window.open(element.href, "_self");
    }, 800); // Delay navigation so user can see the event log
  }
}

document.querySelectorAll(".track").forEach(function (element) {
  element.addEventListener("click", trackEventHandler);
});

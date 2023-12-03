(function () {
  function logNothingToCollect() {
    console.log("no channel points to collect.");
  }

  function simulateClick(element) {
    var clickEvent = new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
      view: window,
    });

    element.dispatchEvent(clickEvent);
  }

  function collectChannelPoints(button) {
    simulateClick(button);
    console.log("points collected.");
  }

  function monitorChannelPoints() {
    console.log("monitoring channel points...");

    var interval = setInterval(function () {
      console.log("checking channel points...");

      var pointsSummary = document.querySelector(".community-points-summary");

      if (!pointsSummary) {
        logNothingToCollect();
        return;
      }

      var buttons = pointsSummary.querySelectorAll("button");

      if (buttons.length !== 2) {
        logNothingToCollect();
        return;
      }

      clearInterval(interval);

      collectChannelPoints(buttons[buttons.length - 1]);
      monitorChannelPoints();
    }, 5000);
  }

  function onDOMContentLoaded() {
    monitorChannelPoints();
  }

  document.addEventListener("DOMContentLoaded", function () {
    onDOMContentLoaded();
  });
})();

(function () {
  "use strict";

  // --- Countdown -----------------------------------------------------------
  // Launch target: 30 days from first visit, persisted so the timer is stable.
  var STORAGE_KEY = "eload-launch-target";
  var DEFAULT_OFFSET_MS = 30 * 24 * 60 * 60 * 1000;

  function getLaunchTarget() {
    var stored = null;
    try {
      stored = window.localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      // localStorage unavailable (private mode / disabled) — fall back below.
    }

    var target = stored ? parseInt(stored, 10) : NaN;
    if (!stored || isNaN(target) || target < Date.now()) {
      target = Date.now() + DEFAULT_OFFSET_MS;
      try {
        window.localStorage.setItem(STORAGE_KEY, String(target));
      } catch (e) {
        /* ignore */
      }
    }
    return target;
  }

  var launchTarget = getLaunchTarget();
  var units = {
    days: document.querySelector('[data-unit="days"]'),
    hours: document.querySelector('[data-unit="hours"]'),
    minutes: document.querySelector('[data-unit="minutes"]'),
    seconds: document.querySelector('[data-unit="seconds"]'),
  };

  function pad(n) {
    return String(n).padStart(2, "0");
  }

  function renderCountdown() {
    var diff = Math.max(0, launchTarget - Date.now());
    var totalSeconds = Math.floor(diff / 1000);

    var days = Math.floor(totalSeconds / 86400);
    var hours = Math.floor((totalSeconds % 86400) / 3600);
    var minutes = Math.floor((totalSeconds % 3600) / 60);
    var seconds = totalSeconds % 60;

    if (units.days) units.days.textContent = pad(days);
    if (units.hours) units.hours.textContent = pad(hours);
    if (units.minutes) units.minutes.textContent = pad(minutes);
    if (units.seconds) units.seconds.textContent = pad(seconds);

    return diff > 0;
  }

  if (units.days) {
    renderCountdown();
    var timer = window.setInterval(function () {
      if (!renderCountdown()) {
        window.clearInterval(timer);
      }
    }, 1000);
  }

  // --- Notify form ---------------------------------------------------------
  var form = document.getElementById("notify-form");
  var message = document.getElementById("notify-message");
  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function setMessage(text, type) {
    if (!message) return;
    message.textContent = text;
    message.classList.remove("is-error", "is-success");
    if (type) message.classList.add("is-" + type);
  }

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var input = form.querySelector("#email");
      var button = form.querySelector("button");
      var value = (input.value || "").trim();

      if (!EMAIL_RE.test(value)) {
        setMessage("Please enter a valid email address.", "error");
        input.focus();
        return;
      }

      // No backend yet — store the address locally so nothing is lost, and
      // confirm to the visitor. Swap this for a real API call at launch.
      try {
        var list = JSON.parse(
          window.localStorage.getItem("eload-subscribers") || "[]"
        );
        if (list.indexOf(value) === -1) {
          list.push(value);
          window.localStorage.setItem(
            "eload-subscribers",
            JSON.stringify(list)
          );
        }
      } catch (e) {
        /* ignore storage errors */
      }

      button.disabled = true;
      setMessage("You're on the list! We'll be in touch. 🎉", "success");
      form.reset();
    });
  }

  // --- Footer year ---------------------------------------------------------
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();

/* quiz.js — reusable multiple-choice widget with immediate feedback.
 *
 * Markup contract:
 *   <div class="quiz">
 *     <p class="q">Question text</p>
 *     <ul class="opts">
 *       <li><button data-correct="true">…</button></li>
 *       <li><button>…</button></li>
 *     </ul>
 *     <p class="feedback" data-correct="…" data-wrong="…"></p>
 *   </div>
 *
 * Exactly one button per quiz carries data-correct="true".
 * On click: the chosen button is marked, all buttons lock, and the matching
 * feedback string is revealed. No dependencies, no network.
 */
(function () {
  "use strict";

  function wire(quiz) {
    var buttons = Array.prototype.slice.call(quiz.querySelectorAll(".opts button"));
    var feedback = quiz.querySelector(".feedback");
    var correctCount = quiz.querySelectorAll('[data-correct="true"]').length;

    if (correctCount !== 1) {
      console.warn("[quiz] expected exactly one data-correct=\"true\", found " + correctCount, quiz);
    }

    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        if (quiz.dataset.answered === "true") return;
        quiz.dataset.answered = "true";

        var isCorrect = btn.getAttribute("data-correct") === "true";
        btn.classList.add(isCorrect ? "correct" : "wrong");

        if (!isCorrect) {
          var right = quiz.querySelector('[data-correct="true"]');
          if (right) right.classList.add("correct");
        }

        buttons.forEach(function (b) { b.disabled = true; });

        if (feedback) {
          feedback.classList.add("show", isCorrect ? "correct" : "wrong");
          var text = isCorrect
            ? feedback.getAttribute("data-correct")
            : feedback.getAttribute("data-wrong");
          if (text) {
            feedback.innerHTML =
              '<span class="verdict">' + (isCorrect ? "Correct. " : "Not quite. ") + "</span>" + text;
          }
        }
      });
    });
  }

  function init() {
    Array.prototype.forEach.call(document.querySelectorAll(".quiz"), wire);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

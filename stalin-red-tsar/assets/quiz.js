/* quiz.js — reusable quiz widget for every lesson in this workspace.
   Markup contract (see lessons/*.html for live examples):

   <div class="quiz">
     <p class="quiz-q">Question …</p>
     <button class="quiz-option" data-correct="false">…</button>
     <button class="quiz-option" data-correct="true">…</button>
     <p class="quiz-explanation" hidden>Shown after the first click. …</p>
   </div>

   Behavior: first click locks the quiz, marks the picked option, always reveals
   the correct one, and shows the explanation. No dependencies. Idempotent per page. */
(function () {
  'use strict';

  document.querySelectorAll('.quiz').forEach(function (quiz) {
    var options = Array.prototype.slice.call(quiz.querySelectorAll('.quiz-option'));
    var explanation = quiz.querySelector('.quiz-explanation');

    options.forEach(function (option) {
      option.addEventListener('click', function () {
        if (quiz.classList.contains('quiz-answered')) return;
        quiz.classList.add('quiz-answered');

        var pickedCorrect = option.getAttribute('data-correct') === 'true';

        options.forEach(function (o) {
          o.disabled = true;
          if (o.getAttribute('data-correct') === 'true') o.classList.add('quiz-correct');
        });
        if (!pickedCorrect) option.classList.add('quiz-wrong');
        if (explanation) explanation.hidden = false;
      });
    });
  });
})();

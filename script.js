document.addEventListener('DOMContentLoaded', function() {
    
    const Quizz = document.getElementById('quiz-form');
    const MessageAlerte = document.getElementById('alert');

    Quizz.addEventListener('submit', function(event) {
        
        // Est censé empêcher la soumission de se faire toute seule
        event.preventDefault();

        // Vérifie les réponses
        checkAnswers();

        // Affiche le message pendant 5 secondes
        showMessageAlerte();

        // Réinitialise le quiz après 5 secondes
        setTimeout(reset, 5000);
    
    });

    function checkAnswers() {

        checkAnswer('answer-1', 2); // La réponse correcte pour la première question est la deuxième option
        checkAnswer('answer-2', 3); // La réponse correcte pour la deuxième question est la troisième option
        checkAnswer('answer-3', 1); // La réponse correcte pour la troisième question est la première option
    
    }

    function checkAnswer(question, bonNumero) {

        const answers = document.getElementsByName(question);
        
        let selectedAnswer;

        // Trouve si la réponse est sélectionnée
        answers.forEach((answer, index) => {

            if (answer.checked) {

                selectedAnswer = index + 1; // décalage index et numéro réponse

            }
        
        });

        // Qualifie la question de correcte ou d'inqcorrecte à la question en fonction de la réponse
        const questionItem = answers[0].closest('.question-item');

        if (selectedAnswer === bonNumero) {

            questionItem.classList.add('correct');

        } else {

            questionItem.classList.add('incorrect');

        }
    }

    function showMessageAlerte() {

        MessageAlerte.style.display = 'block'; // Affiche le message
        
        setTimeout(() => {

            MessageAlerte.style.display = 'none'; // cache le message après 5 secondes
        
        }, 5000);
    }

    function reset() {

        // Réinitialise les classes
        const questionItems = document.querySelectorAll('.question-item');
        
        questionItems.forEach(item => {

            item.classList.remove('correct', 'incorrect');
        
        });

        // Décoche toutes les sélections
        const selections = document.querySelectorAll('input[type="radio"]');

        selections.forEach(selectionCase => {

            selectionCase.checked = false;

        });
    }
});

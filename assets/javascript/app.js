//Unable to get timer to stop at 0 and get results page to show.

$("#start").on("click", function () {
    game.start();
});

$(document).on("click", "#end", function() {
    game.done();
})

var questions = [{
    question: "Where does Texas rank population wise among other states?",
    answers: ["1", "2", "3", "4"],
    correctAnswer: "1"
}, {
    question: "What is the Texas state plant?",
    answers: ["Prickly Pear Cactus", "The Texas Oak Tree", "The Bluebonnet", "The Sunflower"],
    correctAnswer: "Prickly Pear Cactus"
}, {
    question: "Texas is the second largest if the 50 U.S. states with only what state being larger?",
    answers: ["California", "Montana", "Nevada", "Alaska"],
    correctAnswer: "Alaska"
}, {
    question: "What is the Texas state molecule?",
    answers: ["Buckeyball", "Aldrin", "Carnallite", "Epsomite"],
    correctAnswer: "Buckeyball"
}, {
    question: "What U.S. state borders Texas to the West?",
    answers: ["Arizona", "Nevada", "New Mexico", "Arkansas"],
    correctAnswer: "New Mexico"
}, {
    question: "What is the Texas state insect?",
    answers: ["Monarch Butterfly", "Queen Honeybee", "Eastern Tiger Swallowtail", "Four-Spot Skimmer Dragonfly"],
    correctAnswer: "Monarch Butterfly"
}, {
    question: "What is the Texas state gem?",
    answers: ["Star Blue Quartz", "Diamond", "Aquamarine", "Blue Topaz"],
    correctAnswer: "Blue Topaz"
}, {
    question: "What is the Texas state fruit?",
    answers: ["Grapefruit", "Blackberry", "Peach", "Strawberry"],
    correctAnswer: "Grapefruit"
}, {
    question: "What is the Texas state fish?",
    answers: ["Guadalupe Bass", "Largemouth Bass", "American Shad", "Cutthroat Trout"],
    correctAnswer: "Guadalupe Bass"
}, {
    question: "What is the biggest city in the state of Texas?",
    answers: ["Austin", "Dallas", "San Antonio", "Houston"],
    correctAnswer: "Houston"
}];

var game = {
    correct: 0,
    incorect: 0,
    counter: 60,
    countdown: function () {
        game.counter--;
        $("#counter").html(game.counter);
        if (game.counter <= 0) {
            console.log("Time is Up!");
            game.done();
        }
    },

    start: function () {
        timer = setInterval(game.countdown, 1000);

        $("#subwrapper").prepend("<h2>Time Remaining: <span id='counter'>60</span> Seconds</h2>");

        $("#start").remove();

        for (var i = 0; i < questions.length; i++) {
            $("#subwrapper").append("<h2>" + questions[i].question + "</h2>");

            for (var j = 0; j < questions[i].answers.length; j++) {
                $("#subwrapper").append("<input type='radio' name='question-" + i + "' value='" + questions[i].answers[j] + "'>" + questions[i].answers[j])
            }
        }

        $("#subwrapper").append("<br><button id='end'>Done</button>");
    },
    
    done: function() {
        $.each($('input[name="question-0]":checked'),function(){
            if($(this).val()==questions[0].correct.Answer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        $.each($('input[name="question-1]":checked'),function(){
            if($(this).val()==questions[1].correct.Answer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        $.each($('input[name="question-2]":checked'),function(){
            if($(this).val()==questions[2].correct.Answer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        $.each($('input[name="question-3]":checked'),function(){
            if($(this).val()==questions[3].correct.Answer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        $.each($('input[name="question-4]":checked'),function(){
            if($(this).val()==questions[4].correct.Answer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        $.each($('input[name="question-5]":checked'),function(){
            if($(this).val()==questions[5].correct.Answer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        $.each($('input[name="question-6]":checked'),function(){
            if($(this).val()==questions[6].correct.Answer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        $.each($('input[name="question-7]":checked'),function(){
            if($(this).val()==questions[7].correct.Answer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        $.each($('input[name="question-8]":checked'),function(){
            if($(this).val()==questions[8].correct.Answer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        $.each($('input[name="question-9]":checked'),function(){
            if($(this).val()==questions[9].correct.Answer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        this.result();
    },

    result: function() {
        clearInterval(timer);
        $("#subwrapper h2").remove();
        $("#subwrapper").html("<h2>You're Done!</h2>")
        $("#subwrapper").append("<h3>Correct Answer: "+this.correct+"<h3>");
        $("#subwrapper").append("<h3>Incorrect Answer: "+this.incorrect+"<h3>");
        $("#subwrapper").append("<h3>Unanswered: "+(questions.length-(this.incorrect+this.correct))+"<h3>");
    }
};
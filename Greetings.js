var slide = $("#middleScreen");
var wordTimerCounter = 10;

var greetingsQuestions = [{
    question: "How do you say, 'How are you?' as a greeting in Tagalog?",
    answer: "Kumusta?"
}, {
    question: "'Kumusta' comes from the Spanish 'Como estas?",
    answer: "That comes from the fact that the Philipines used to be a Spanish Colony."
}, {
    question: "How do you say, 'How are you?' in a way that actually is asking how the other person is?",
    answer: "Kumusta ka?"
}, {
    question: "The addition of the word 'ka' which means 'you', personalizes the question and makes it a sincere inquiery as to how they are.",
    answer: ""
}, {
    question: "How do you say 'How have you been' in Tagalog?",
    answer: "Kumusta ka na?"
}, {
    question: "How do you ask a person earnestly how they are in Tagalog?",
    answer: "Kumusta ka?"
}, {
    question: "How do you ask a person how they've been in Tagalog?",
    answer: "Kumusta ka na" ?
}, {
    question: "What is your name?",
    answer: "Anong ang pangaalan mo?"
}, {
    question: "What are you doing?",
    answer: "Anong ginagawa mo?"
}, {
    question: "Now, how do you ask 'What is your name?' in Tagalog? ",
    answer: "Anong ang pangaalan mo?"
}, {
    question: "How do you say 'What are you doing?' in Tagalog?",
    answer: "Anong ginagawa mo?"
}],

var timer;

var game = {
    questions: greetingsQuestions,
    currentQuestion: 0,
    counter: wordTimerCounter,

    counterdown: function () {
        this.counter--;

    }
}
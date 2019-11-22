$(document).ready(function () {
    $("#start").click(function () {
        $("#screenImage").attr('src', 'greetingsquestionsset/questionOne.png');
        $("#start").remove();

    });
    $("#necks").click(function () {
        changeImage();

    });
    $("#beck").click(function () {
        backImage();

    });
    var images = [];

    images[0] = 'greetingsquestionsset/questionTwo.png';
    images[1] = 'greetingsquestionsset/questionThree.png';
    images[2] = 'greetingsquestionsset/questionFour.png';
    images[3] = 'greetingsquestionsset/questionFive.png';
    images[4] = 'greetingsquestionsset/questionSix.png';
    images[5] = 'greetingsquestionsset/questionSeven.png';
    images[6] = 'greetingsquestionsset/questionEight.png';
    images[7] = 'greetingsquestionsset/questionNine.png';
    images[8] = 'greetingsquestionsset/questionTen.png';
    images[9] = 'greetingsquestionsset/questionEleven.png';

    var i;
    function changeImage() {
        $('#screenImage').attr('src', images[i]);

        if (i < images.length - 1) {
            i++;
        } else {
            i = 0;
        }

    }

    function backImage() {
        $("#screenImage").attr('src', images[i]);
        if (i < images.length - 1) {
            i--;
        } else {
            i = 0;
        }
        console.log(images[i]);
    }
});





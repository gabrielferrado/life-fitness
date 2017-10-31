$('#menuButton').click(function (event) {
    $('.ui.sidebar').sidebar('toggle');
});

let resim = $("body");

resim.hammer().on("swiperight", function (ev) {
    $('.ui.sidebar').sidebar('toggle');
});

$('.tabular.menu .item').tab();

$('.new.user.action').click(function () {
    $('.ui.student.modal').modal('show');
});

$('.new.trainer.action').click(function () {
    $('.ui.trainer.modal').modal('show');
});

$('.new.part.action').click(function () {
    $('.ui.part.modal').modal('show');
});

$('.new.exercise.action').click(function () {
    $('.ui.exercise.modal').modal('show');
});

$('.new.training.action').click(function () {
    $('.ui.training.modal:not(.edit)').modal('show');
});

$('.ui.accordion').accordion();

$('tr').mouseenter(function () {
    $(this).find(".icon.action").css("opacity", 1)
}).mouseleave(function () {
    $(this).find(".icon.action").css("opacity", 0)
});


////////////////////////////////////////

$('.edit.action').click(function () {
    let repetition = $(this).parent().prevAll('.repetition.value').text();
    let serie = $(this).parent().prevAll('.serie.value').text();
    let weight = $(this).parent().prevAll('.weight.value').text();

    let modal = $('.ui.edit.training.modal');
    $(modal).modal('show');
    $(modal).find('input[name=repetitions]').val(repetition);
    $(modal).find('input[name=serie]').val(serie);
    $(modal).find('input[name=weight]').val(weight);
});




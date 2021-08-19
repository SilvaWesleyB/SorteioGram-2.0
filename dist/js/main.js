/* 
 Created on : 16/08/2021, 14:23:06
 Author     : SilvaWes
 */
$(document).ready(function () {
    $('#number-resultado').mask('0#');
    $('#number-inicial').mask('0#');
    $('#number-final').mask('0#');
    $('#name-resultado').mask('0#');
});
/*Função que limpa os Forms*/
$('#btn-finalizar').click(function () {
    var form = $('.form-sort');
    for (i = 0; i < form.length; i++) {
        form[i].reset();
    }
});
/*Função que limpa os Forms*/

/*Função que gera resultado do sorteio de nome*/
function getName(n) {
    return Math.floor(Math.random() * n.length);
}
/*Função que gera resultado do sorteio de nome*/

/*Função que gera resultado do sorteio de Numeros*/
function getNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
/*Função que gera resultado do sorteio de Numeros*/

/*Função Modal*/
function opModal() {
    $('#resultados-sorteios').modal('show');
}
/*Função Modal*/

/*Função Data*/
function getDate() {
    var now = new Date();
    return now.getDate() + '/' + (now.getMonth() + 1) + '/' + now.getFullYear();
}
/*Função Data*/

/*Função Horas*/
function getHours() {
    var now = new Date();
    return now.getHours() + ':' + now.getMinutes();
}
/*Função Horas*/

/*Função Validação Campo*/
function valida(field) {
    camp = field.val();
    if (camp === "") {
        field.removeClass('is-valid');
        field.addClass('is-invalid');
    } else {
        field.removeClass('is-invalid');
        field.addClass('is-valid');
    }
}
/*Função Validação Campo*/

/*Ação click Botão Sorteio Numero*/
$('#btn-num').click(function () {
    /*Variaveis*/
    var min = $('#number-inicial');
    var max = $('#number-final');
    var qtd_resultado = $('#number-resultado');
    var resultado = [];
    var h = getHours();
    var d = getDate();
    var re = "";
    var te = "";

    /*Gerando resultado sem repetir numero*/
    for (var i = 0; i < qtd_resultado.val(); i++) {
        var temp = getNumber(min.val(), max.val());
        if (resultado.indexOf(temp) === -1) {
            resultado.push(temp);
        } else {
            i--;
        }
    }

    /*Montando dados a exibir no modal*/
    te += 'Resultado do Sorteio de Numeros';
    re += '<p><b>Números Sorteados:</b> ' + qtd_resultado.val() + '</p>';
    re += '<p><b>Intervalo:</b> Entre ' + min.val() + ' e ' + max.val() + '.' + '</p>';
    re += '<p><b>Data e Hora do Sorteio:</b> ' + (d) + ' às ' + (h) + '.</p>';
    re += '<h4 class="text-center m-auto bg-info table-dark"><b>Resultado:</b> ' + resultado.join([separador = ' - ']) + '</h4>';

    $('#result').html(re);
    $('#title-modal').html(te);

    if (min.val() !== "" && max.val() !== "" && qtd_resultado.val() !== "") {
        opModal();
    } else {
        valida(qtd_resultado);
        valida(max);
        valida(min);
    }
});
/*Ação click Botão Sorteio Numero*/

/*Ação click Botão Sorteio Nomes*/
$('#btn-name').click(function () {
    /*Variaveis*/
    var qtd_name = $('#name-resultado');
    var name_sorteio = $('#names-sorteio').val().split(',');
    var resultado = [];
    var h = getHours();
    var d = getDate();
    var re = "";
    var te = "";

    /*Gerando resultado sem repetir nome*/
    for (x = 0; x < qtd_name.val(); x++) {
        var temp = name_sorteio[getName(name_sorteio)];
        if (resultado.indexOf(temp) === -1) {
            resultado.push(temp);
        } else {
            x--;
        }
    }

    /*Montando dados a exibir no modal*/
    te += 'Resultado do Sorteio de Nomes';
    re += '<p><b>Nomes Sorteados:</b> ' + qtd_name.val() + '</p>';
    re += '<p><b>Data e Hora do Sorteio:</b> ' + (d) + ' às ' + (h) + '.</p>';
    re += '<h4 class="text-center m-auto bg-info table-dark"><b>Resultado:</b> <span class="text-uppercase">' + resultado.join([separador = ' - ']) + '</span></h4>';

    $('#result').html(re);
    $('#title-modal').html(te);
    if (qtd_name.val() !== "" && $('#names-sorteio').val() !== "") {
        opModal();
    } else {
        valida(qtd_name);
        valida($('#names-sorteio'));
    }

});
/*Ação click Botão Sorteio Nomes*/
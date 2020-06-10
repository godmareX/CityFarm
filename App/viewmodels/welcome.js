define(['durandal/app'], function (app) {
    var page = function () {
        this.displayName = 'Bem vindo à loja online da Vegetables Society';
        this.description = 'Esta loja permte a compra de produtos agrícolas locais, directamente ao agricultor nacional. Todos os produtos aqui vendidos são verificados para garantir um bom nivel de qualidade.Para alem disso, os produtos são colhidos após a encomenda, para garantir que estes são frescos e são entregues até 24 horas após o pagamento.';
    };

    return page;
});
$(document).ready(function () {
    $('#carousel').carousel({ interval: 300 });
    var name = "index=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            var user = c.substring(name.length, c.length)
            break;
        }
    }
    if (user == "") {
        document.cookie("index=0");
    }

    var name = "pindex=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            var puser = c.substring(name.length, c.length)
            break;
        }
    }
    if (puser == "") { document.cookie("pindex=0"); }
});
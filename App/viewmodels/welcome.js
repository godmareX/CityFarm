define(['durandal/app'], function (app) {
    var page = function () {
        this.displayName = 'Bem vindo à loja online da Vegetables Society';
        this.description = 'Bottom Text';
    };

    return page;
});
$(document).ready(function () { $('#carousel').carousel({ interval: 300 }) });
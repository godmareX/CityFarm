define(['durandal/app'], function (app) {
    var page = function () {
        this.displayName = 'Bem vindo à loja online da Vegetables Society';
        this.description = 'Bottom Text';
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
    if (user == "") { document.cookie("index=0"); }
});
define(['durandal/app'], function (app) {
    var vm = function () {
        console.log('ViewModel initiated...');
        //---Variáveis locais
        var self = this;
        self.displayName = '';
        self.error = ko.observable('');
        self.record = ko.observable();
        self.Entry = ko.observableArray([]);
        self.cookies = ko.observable(0);
        self.index = ko.computed(function () {
            var name = "index=";
            var decodedCookie = decodeURIComponent(document.cookie);
            var ca = decodedCookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    self.cookies(parseInt(c.substring(name.length, c.length)));
                }
            }
        });
        self.adicionarCarrinho = function (item) {
            var tempparaAdicionar = JSON.stringify({ Tipo: item.Tipo, Nome: item.Nome, Vendedor: self.displayName, Rating: self.record().Rating, Preco: item.Preco, Stock: item.Stock, Imagem: item.Imagem, Quantidade:1, Id:self.cookies() });
            document.cookie = "vendedor" + self.cookies() + "=" + tempparaAdicionar;
            document.cookie = "index=" + (self.cookies() + 1);
            self.cookies(self.cookies() + 1)
            app.showMessage('O produto foi adicionado ao carrinho')

        };
        self.activate = function (id) {
            // Activation code here
            console.log('CALL: getVendedores...');
            var composedUri = id + ".txt";
            self.displayName = id
            console.log("composedUri = " + composedUri);
            $.getJSON(composedUri, function (data) { self.record(data); })


        };
    };

    return vm;
});
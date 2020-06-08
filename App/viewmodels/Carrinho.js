define(['durandal/app'], function (app) {
    var vm = function () {
        console.log('ViewModel initiated...');
        //---Variáveis locais
        var self = this;
        self.displayName = 'Carrinho';
        self.error = ko.observable('');
        self.records = ko.observableArray([]);
        self.Entry = ko.observableArray([]);
        self.incrementa1 = function (item) {
            item.Quantidade(item.Quantidade() + 1);
            console.log(self.records()[item.Id]);
            var temp = JSON.parse(JSON.stringify(item));
            temp.Quantidade = item.Quantidade();
            document.cookie = "vendedor" + item.Id + "=" + JSON.stringify(temp);
        }
        self.incrementa25 = function (item) {
            item.Quantidade(item.Quantidade() + 0.25);
            console.log(self.records()[item.Id]);
            var temp = JSON.parse(JSON.stringify(item));
            temp.Quantidade = item.Quantidade();
            document.cookie = "vendedor" + item.Id + "=" + JSON.stringify(temp);
        }
        self.decresce1 = function (item) {
            item.Quantidade(item.Quantidade() - 1);
            console.log(self.records()[item.Id]);
            var temp = JSON.parse(JSON.stringify(item));
            temp.Quantidade = item.Quantidade();
            document.cookie = "vendedor" + item.Id + "=" + JSON.stringify(temp);
        }
        self.decresce25 = function (item) {
            item.Quantidade(item.Quantidade() - 0.25);
            console.log(self.records()[item.Id]);
            var temp = JSON.parse(JSON.stringify(item));
            temp.Quantidade = item.Quantidade();
            document.cookie = "vendedor" + item.Id + "=" + JSON.stringify(temp);
        }
        self.PrecoTotal = ko.computed(function () {
            var sum = 0;
            for (var i = 0; i < self.records().length; i++) { sum = sum + (self.records()[i].Quantidade() * self.records()[i].Preco); }
            return sum;
        });
        self.Encomenda = function () {
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
            var tempJSON = { Preco: self.PrecoTotal(), Produtos: [], Id: puser }   //Quando for introduzido o sistema de login, adicionar informação do cliente como contribuinte, morada, etc
            for (var i = 0; i < self.records().length; i++) {
                var limpo = JSON.parse(JSON.stringify(self.records()[i]));
                limpo.Quantidade = self.records()[i].Quantidade();
                tempJSON.Produtos.push(limpo);
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
           // $.post("Pedido.php", { mydata: JSON.stringify(tempJSON) });      a post to later make the info go to the data base
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
                for (var i = 0; i < user; i++) { document.cookie = "vendedor" + i + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC;"; };
            document.cookie = "index=0";
            return true;
        }
        //--- Page Events
        self.activate = function () {
            // Activation code here
            console.log('CALL: getCarrinho...');
            var name = "vendedor";
            var decodedCookie = decodeURIComponent(document.cookie);
            var ca = decodedCookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    var temp = JSON.parse(c.substring(name.length + 2, c.length));
                    temp.Quantidade = ko.observable(temp.Quantidade);
                    self.records.push(temp);
                }
            }


        };
    }

        return vm;
 
});
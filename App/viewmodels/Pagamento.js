define(['durandal/app'], function (app) {
    var vm = function () {
        console.log('ViewModel initiated...');
        //---Variáveis locais
        var self = this;
        self.displayName = 'Pagamento';
        self.error = ko.observable('');
        self.record = ko.observable({ Entidade: '00000', Referencia: '000000000' })
    }
    return vm;
});
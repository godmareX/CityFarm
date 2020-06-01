define(['durandal/app'], function (app) {
    var vm = function () {
        console.log('ViewModel initiated...');
        //---Variáveis locais
        var self = this;
        var baseUri = '';
        self.displayName = '';
        self.error = ko.observable('');
        self.record = ko.observable();
        self.Entry = ko.observableArray([]);
        self.color = ko.observable()
        self.activate = function (id) {
                // Activation code here
                console.log('CALL: getPokemonSpecie...');
            var composedUri = id + ".txt" ;
            self.displayName = id
                console.log("composedUri = " + composedUri);

                    

                };
        };   

    return vm;
});
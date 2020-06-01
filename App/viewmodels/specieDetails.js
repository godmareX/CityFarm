define(['durandal/app'], function (app) {
    var vm = function () {
        console.log('ViewModel initiated...');
        //---Variáveis locais
        var self = this;
        var baseUri = '';
        self.displayName = 'Pokemón Specie Details';
        self.error = ko.observable('');
        self.record = ko.observable();
        self.Entry = ko.observableArray([]);
        self.color = ko.observable()
        self.activate = function (id) {
                // Activation code here
                console.log('CALL: getPokemonSpecie...');
                var composedUri = baseUri + id;
                console.log("composedUri = " + composedUri);
                ajaxHelper(composedUri, 'GET').done(function (data) {
                    self.record(data);
                    self.Entry.push(data.flavorText[0]);
                    

                });
                ajaxHelper('http://ieeta-cloudpt.web.ua.pt/itw/pokemons/api/Pokemons/' + id, 'GET').done(function (data) { self.color(data.Pokemon_TypeMaps[0].Color) });
        };
        //--- Internal functions
        function ajaxHelper(uri, method, data) {
            self.error(''); // Clear error message
            return $.ajax({
                type: method,
                url: uri,
                dataType: 'json',
                contentType: 'application/json',
                data: data ? JSON.stringify(data) : null,
                error: function (jqXHR, textStatus, errorThrown) {
                    console.log("AJAX Call[" + uri + "] Fail...");
                    self.error(errorThrown);
                }
            });
        }       
    };

    return vm;
});
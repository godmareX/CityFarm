define(['durandal/app'], function (app) {
    var vm = function () {
        console.log('ViewModel initiated...');
        //---Variáveis locais
        var self = this;
        var baseUri = '';
        self.displayName = 'Pokemón Details';
        self.error = ko.observable('');
        self.record = ko.observable();
        self.MovetoShow = ko.observableArray([]);
        self.BackgroundColor = ko.observable();
        self.Specie = ko.observable();
        self.activate = function (id) {
            // Activation code here
            console.log('CALL: getPokemonSpecie...');
            var composedUri = baseUri + id;
            console.log("composedUri = " + composedUri);
            ajaxHelper(composedUri, 'GET').done(function (data) {
                self.record(data);
                self.MovetoShow.push(data.Moves[0]);
                self.BackgroundColor(data.Pokemon_TypeMaps[0].Color);
                self.Specie(data.Specie.Id)
                console.log(typeof data.Specie.Id)
            });
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
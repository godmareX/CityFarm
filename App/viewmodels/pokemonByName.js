define(['durandal/app'], function (app) {
    var vm = function () {
        console.log('SinglePokemonPage initiated...');
        var self = this;
        var baseUrl = '';
        self.displayName = 'Search Pokemon by name';
        self.pokemons = ko.observableArray([]);
        console.log(self.pokemons)
        self.error = ko.observable('');
        //--- Page Events
        self.searchPokemon = ko.observable();
        getPokemon = ko.computed(function () {
            var composedUrl = baseUrl + self.searchPokemon();
            ajaxHelper(composedUrl, 'GET').done(function (data) {
                if (data.length == 0 && self.searchPokemon().length != 0)
                        app.showMessage("There are no Pokemón with " + self.searchPokemon() + " on their name");
                else
                    self.pokemons(data);
            });
        });
        function ajaxHelper(uri, method, data) {
            self.error('Pokemon nao encontrado'); // Clear error message
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
define(['durandal/app'], function (app) {
    var vm = function () {
        console.log('ViewModel initiated...');
        //---Variáveis locais
        var self = this;
        var baseUri = ''
        self.displayName = ko.observable('Pokemón Species List');
        self.error = ko.observable('');
        self.passingMessage = ko.observable('');
        self.records = ko.observableArray([]);
        //--- Page Events
        self.activate = function (name, id) {
            // Activation code here
            console.log('CALL: getSpecies...');
            if (name == "Habitats") {
                var composedUri = baseUri + name.replace('s', '') + "?name=" + id
                self.displayName(id.charAt(0).toUpperCase() + id.slice(1) + "'s Pokemon List")
            }
            else if (name == 'Colors') {
                var composedUri = baseUri + 'SpeciesBy' + name.replace('s', '') + "?color=" + id;
                self.displayName(id.charAt(0).toUpperCase() + id.slice(1) + ' Pokemon List')
            }
            else {
                var composedUri = baseUri + 'SpeciesBy' + name.replace('s', '') + "?name=" + id;
                self.displayName(id.charAt(0).toUpperCase() + id.slice(1).replace('-', ' ') + ' Pokemon List')
            }
            console.log(composedUri)
            if (name == "Habitats")
                ajaxHelper(composedUri, 'GET').done(function (data) {
                    self.records(data.Species);
                });
            else
                ajaxHelper(composedUri, 'GET').done(function (data) {
                    self.records(data);

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
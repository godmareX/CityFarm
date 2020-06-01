define(['durandal/app'], function (app) {
    var vm = function () {
        console.log('ViewModel initiated...');
        //---Variáveis locais
        var self = this;
        var baseUri = ''
        self.displayName =ko.observable( 'Filter List');
        self.error = ko.observable('');
        self.passingMessage = ko.observable('');
        self.records = ko.observableArray([]);
        //--- Page Events
        self.activate = function (name) {
            // Activation code here
            console.log('CALL: getSpecies...');
            var composedUri = baseUri + name
            ajaxHelper(composedUri, 'GET').done(function (data) {
                self.records({ name, data });
                self.displayName('Pokemón '+ name.replace('s', '') + ' List')
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
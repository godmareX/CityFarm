define(['durandal/app'], function (app) {
    var vm = function () {
        console.log('ViewModel initiated...');
        //---Variáveis locais
        var self = this;
        var baseUri = ''
        self.displayName = ko.observable('Type Pokemon');
        self.error = ko.observable('');
        self.passingMessage = ko.observable('');
        self.records = ko.observableArray([]);
        //--- Page Events
        self.activate = function (name) {
            // Activation code here
            console.log('CALL: getSpecies...');
            var composedUri = baseUri + "?name=" + name
            console.log(composedUri)
            ajaxHelper(composedUri, 'GET').done(function (data) {
                self.records(data.Pokemon);
                self.displayName(name.charAt(0).toUpperCase() + name.slice(1)+ ' Type Pokemon')
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
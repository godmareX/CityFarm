define(['durandal/app'], function (app) {
    var vm = function () {
        console.log('ViewModel initiated...');
        //---Variáveis locais
        var self = this;
        var baseUri = ''
        self.displayName = 'Pokemón Type List';
        self.error = ko.observable('');
        self.pagesize = 20;
        self.passingMessage = ko.observable('');
        self.records = ko.observableArray([]);
        //--- Page Events
        self.activate = function (id) {
            // Activation code here
            if (id)
                self.currentPage(id);
            console.log('CALL: getSpecies...');
            ajaxHelper(baseUri, 'GET').done(function (data) {
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
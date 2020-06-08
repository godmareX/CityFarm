define(['durandal/app'], function (app) {
    var vm = function () {
        console.log('ViewModel initiated...');
        //---Variáveis locais
        var self = this;
        self.displayName = 'Vendedores';
        self.error = ko.observable('');
        self.pagesize = 20;
        self.passingMessage = ko.observable('');
        self.records = ko.observableArray([]);
        //self.totalRecords = ko.observable(-1);
        self.totalRecords = ko.observable(250);
        self.currentPage = ko.observable(1);
        self.previousPage = ko.computed(function () {
            return self.currentPage() * 1 - 1;
        }, self);
        self.nextPage = ko.computed(function () {
            return self.currentPage() * 1 + 1;
        }, self);
        self.fromRecord = ko.computed(function () {
            return self.previousPage() * self.pagesize + 1;
        }, self);
        self.toRecord = ko.computed(function () {
            return Math.min(self.currentPage() * self.pagesize, self.totalRecords());
        }, self);
        self.totalPages = ko.computed(function () {
            return Math.ceil(self.totalRecords() / self.pagesize);
        }, self);
        self.pageArray = function () {
            var list = [];
            var size = Math.min(self.totalPages(), 9);
            var step;
            if (size < 9 || self.currentPage() === 1)
                step = 0;
            else if (self.currentPage() >= self.totalPages() - 4)
                step = self.totalPages() - 9;
            else
                step = Math.max(self.currentPage() - 5, 0);

            for (var i = 1; i <= size; i++)
                list.push(i + step);
            return list;
        };
        //--- Page Events
        self.activate = function (id) {
            // Activation code here
            if (id)
                self.currentPage(id);
            console.log('CALL: getVendedores...');
            $.getJSON("Vendedores.txt", function (data) { self.records(data.Vendedores); self.totalRecords(data.Total); });

        };

        //--- Internal functions
    };

    return vm;
});
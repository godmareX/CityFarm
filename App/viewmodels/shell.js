define(['plugins/router', 'durandal/app'], function (router, app) {
    return {
        router: router,
        search: function() {
            //It's really easy to show a message box.
            //You can add custom options too. Also, it returns a promise for the user's response.
            app.showMessage('Search not yet implemented...');
        },
        activate: function () {
            router.map([
                { route: '', title:'', moduleId: 'viewmodels/welcome', nav: true },
                { route: 'Produto', title: 'Produtos Agricolas', moduleId: 'viewmodels/Produto', nav: true },
                { route: 'Produto(/:id)', title: 'Produtos Agricolas', moduleId: 'viewmodels/Produto', hash: '#produto', nav: false },
                { route: 'ProdutoDetails(/:id)', title: 'Produto', moduleId: 'viewmodels/ProdutoDetails', hash: '#produto', nav: false },
                { route: 'Cabazes(/:id)', title:'Cabazes', moduleId: 'viewmodels/Cabazes', nav: true, hash: '#cabazes'},
                { route: 'CabazDetails(/:id)', title: 'Cabaz', moduleId: 'viewmodels/CabazDetails', hash: '#cabaz', nav: false },
                { route: 'Vendedores(/:id)', title: 'Vendedores', moduleId: 'viewmodels/Vendedores', hash: '#vendedores', nav: true },
                { route: 'VendedorDetails(/:id)', title: 'Vendedor', moduleId: 'viewmodels/VendedorDetails', hash: '#vendedordetails', nav: false },
                { route: 'Carrinho', title: 'Carrinho', moduleId: 'viewmodels/Carrinho', hash: '#carrinho', nav: true },
                { route: 'Pagamento', title: 'Pagamento', moduleId: 'viewmodels/Pagamento', hash: '#pagamento', nav: false}

            ]).buildNavigationModel();
            
            return router.activate();
        }
    };
});
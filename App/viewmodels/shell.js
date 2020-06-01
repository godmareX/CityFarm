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
                { route: '', title:'Página Inicial', moduleId: 'viewmodels/welcome', nav: true },
                { route: 'species', title: 'Produtos Agricolas', moduleId: 'viewmodels/species', nav: true },
                { route: 'species(/:id)', title: 'Species', moduleId: 'viewmodels/species', hash: '#species', nav: false },
                { route: 'specieDetails(/:id)', title: 'Specie Details', moduleId: 'viewmodels/specieDetails', hash: '#specieDetails', nav: false },
                { route: 'pokemons(/:id)', title:'Cabazes', moduleId: 'viewmodels/pokemons', nav: true, hash: '#pokemons'},
                { route: 'pokemonDetails(/:id)', title: 'aa', moduleId: 'viewmodels/pokemonDetails', hash: '#pokemonDetails', nav: false },
                { route: 'pokemonByName(/:id)', title: 'Vendedores', moduleId: 'viewmodels/pokemonByName', hash: '#pokemonByName', nav: true},
                { route: 'filtertype', title: 'Filtrar', moduleId: 'viewmodels/filtertype', hash: '#filtertype', nav: false },
                { route: 'filterbytype(/:name)', title: 'Pokemóns', moduleId: 'viewmodels/filterbytype', hash: '#filterbytype', nav: false },
                { route: 'filter(/:name)', title: 'Filtrar', moduleId: 'viewmodels/filter', hash: '#filter', nav: false },
                { route: 'filterby(/:name)(/:id)', title: 'Filtrar', moduleId: 'viewmodels/filterby', hash:'#filterby', nav: false}

            ]).buildNavigationModel();
            
            return router.activate();
        }
    };
});
(function () {

    angular.module('app')
        .component('charDetail', { // the tag for using this is <char-detail>
            templateUrl: "characters/char-detail.component.html",
            controller: charDetailController,
            controllerAs: 'vm',
            bindings: {
                character: '<',
                onClose: '&'
            }
        })
        .config(charListConfig);

    function charListConfig($stateProvider) {
        $stateProvider.state('char-detail', {
            views: {
                'char-detail': {
                    template: '<char-detail></char-detail>'
                }
            }
        });
    }

    function charDetailController() {
        var vm = this;

        vm.user = {};
        vm.user.name = '';
        vm.user.height = 0;
        vm.user.mass = 0;

        vm.save = function() {
            console.log('saving...');
            console.log(JSON.stringify(vm.user));
            console.log('TODO: Finish save implementation here');
        }

        vm.delete = function() {
            console.log('deleting...');
            console.log(JSON.stringify(vm.user));
            console.log('TODO: Finish delete implementation here');
        }
    }

})();

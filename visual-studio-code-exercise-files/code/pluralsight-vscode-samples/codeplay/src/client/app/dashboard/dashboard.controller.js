(function () {
    'use strict';
   

  angular
        .module('app.dashboard')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['$q', 'dataservice', 'logger'];
    
    function DashboardController($q, dataservice, logger) {
        var vm = this;
      
        vm.news = {
            title: 'codeplay',
            description: 'Hot Towel  is a SPA template for Angular developers.'
        };
        vm.messageCount = 0;
        vm.people = [];
        vm.title = 'Dashboard';
        
        activate();
        function activate() {
            console.log('hello');
        }



       

        function getMessageCount() {
            return dataservice.getMessageCount().then(function (data) {
                vm.messageCount = data;
                return vm.messageCount;
            });
        }

        function getPeople() {
            return dataservice.getPeople().then(function (data) {
                vm.people = data;
                return vm.people;
            });
        }
    }
})();


function name(params) {
    
}





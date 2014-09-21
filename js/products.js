(function(){
    var app = angular.module('store-product', []);
    app.directive('productTitle',function(){
        return {
            restrict: 'E',
            templateUrl: 'include/product-title.html'
        };
    });
    
    app.directive('productPanels', function(){
        return {
            restrict: 'E',
            templateUrl: 'include/product-panels.html',
            controller:  function(){
                this.tab = 1;

                this.selectTab = function(setTab){
                    console.log("set "+setTab);
                    this.tab = setTab;
                }

                this.isSelected = function(checkTab){
                    return this.tab === checkTab;
                }    
            },
            controllerAs: 'panel'
    
        };
    });
})();   


(function () {
    'use strict';

    angular
        .module('app.whiteboard')
        .controller('WhiteBoardController', WhiteBoardController);

    WhiteBoardController.$inject = [
        '$stateParams',
        '$scope',
        '$sce'
    ];
    
    function WhiteBoardController(
        $stateParams,
        $scope,
        $sce
    ) {
		$scope.windowHeight = screen.height;
		var x = decodeURIComponent($stateParams.whiteBoardUrl);
		$scope.whiteBoardUrl = $sce.trustAsResourceUrl(x);
     }
})();
//today is saturday 25 Mar 2017.
'use strict';
app.controller('LoginController', ['$scope', function ($scope) {

    $scope.entity = {
        userName: null
    }

    $scope.txt_username = {
        hoverStateEnabled: false,
        placeholder: 'UserName',
        bindingOptions: {
            value: 'entity.userName',

        }
    };

    $scope.logIn = function () {
        alert($scope.entity.userName);
    }

}]);
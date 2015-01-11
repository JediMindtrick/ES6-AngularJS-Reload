import mod2 from './mod2_module';

let mod =
mod2.controller('MainCtrl',['$scope',function($scope){
    $scope.name = 'Main';
}])
;

export default mod;

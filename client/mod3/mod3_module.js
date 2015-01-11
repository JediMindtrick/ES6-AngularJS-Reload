import angular from 'shims/angular_shim';

let mod = angular.module('mod3',[])
.config([function(){
    console.log('hello from mod3');
}]);

export default mod;

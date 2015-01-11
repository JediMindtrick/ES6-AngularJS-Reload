import angular from 'shims/angular_shim'

let mod = angular.module('mod1',[])
.config([function(){
    console.log('hello from mod1');
}]);

export default mod;

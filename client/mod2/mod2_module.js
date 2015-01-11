import angular from 'shims/angular_shim';
import mod1 from 'mod1/mod1_module'

let mod = angular.module('mod2',['mod1'])
.config([function(){
    console.log('hello from mod2');
}]);

export default mod;

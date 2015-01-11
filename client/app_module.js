import angular from 'shims/angular_shim';
import mod2 from 'mod2/mod2_module';
import mainCtrl from 'mod2/mod2_controller';
import mod3 from 'mod3/mod3_module';

let mod = angular.module('app',['mod2','mod3'])
.config([function(){
    console.log('hello from app');
}]);

export default mod;

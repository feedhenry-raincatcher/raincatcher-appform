var ngModule;
try {
  ngModule = angular.module('wfm.appform');
} catch (e) {
  ngModule = angular.module('wfm.appform', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/appform-field-text.tpl.html',
    '<md-input-container class="md-block" class="appform-field-text">\n' +
    '\n' +
    '  <label for="inputName" class="">{{fieldTextCtrl.field.name}}</label>\n' +
    '  <input type="text"\n' +
    '         placeholder="{{fieldTextCtrl.field.helpText}}"\n' +
    '         name="inputName"\n' +
    '         ng-model="fieldTextCtrl.field.value"\n' +
    '         ng-required="fieldTextCtrl.field.required",\n' +
    '         ng-change="fieldTextCtrl.field.updateValue()"\n' +
    '  >\n' +
    '</md-input-container>\n' +
    '');
}]);

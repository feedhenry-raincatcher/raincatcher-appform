var ngModule;
try {
  ngModule = angular.module('wfm.appform');
} catch (e) {
  ngModule = angular.module('wfm.appform', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/appform-field-email.tpl.html',
    '<!--\n' +
    '\n' +
    'The template for rendering a Email field into the form.\n' +
    'Note here that the ng-change directive is bound to the fieldEmailCtrl.field.updateValue function.\n' +
    ' This function is internal to the field definition in the Submission Model.\n' +
    '\n' +
    ' Any values that are to be applied to the submission for this field should use that function.\n' +
    '-->\n' +
    '\n' +
    '<md-input-container class="md-block" class="appform-field-email">\n' +
    '\n' +
    '  <label for="inputName" class="">{{fieldEmailCtrl.field.name}}</label>\n' +
    '  <input type="email"\n' +
    '    name="inputName"\n' +
    '    ng-model="fieldEmailCtrl.field.value"\n' +
    '    ng-required="fieldEmailCtrl.field.required",\n' +
    '    ng-change="fieldEmailCtrl.field.updateValue()"\n' +
    '  >\n' +
    '</md-input-container>\n' +
    '');
}]);

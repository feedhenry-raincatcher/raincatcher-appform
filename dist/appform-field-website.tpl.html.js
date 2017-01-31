var ngModule;
try {
  ngModule = angular.module('wfm.appform');
} catch (e) {
  ngModule = angular.module('wfm.appform', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/appform-field-website.tpl.html',
    '<!--\n' +
    '\n' +
    'The template for rendering a Website field into the form.\n' +
    'Note here that the ng-change directive is bound to the fieldWebsiteCtrl.field.updateValue function.\n' +
    ' This function is internal to the field definition in the Submission Model.\n' +
    '\n' +
    ' Any values that are to be applied to the submission for this field should use that function.\n' +
    '-->\n' +
    '\n' +
    '<md-input-container class="md-block" class="appform-field-website">\n' +
    '\n' +
    '  <label for="inputName" class="">{{fieldWebsiteCtrl.field.name}}</label>\n' +
    '  <input type="url"\n' +
    '    name="inputName"\n' +
    '    ng-model="fieldWebsiteCtrl.field.value"\n' +
    '    ng-required="fieldWebsiteCtrl.field.required",\n' +
    '    ng-change="fieldWebsiteCtrl.field.updateValue()"\n' +
    '  >\n' +
    '</md-input-container>\n' +
    '');
}]);

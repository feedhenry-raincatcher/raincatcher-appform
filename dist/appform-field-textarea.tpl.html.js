var ngModule;
try {
  ngModule = angular.module('wfm.appform');
} catch (e) {
  ngModule = angular.module('wfm.appform', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/appform-field-textarea.tpl.html',
    '<!--\n' +
    '\n' +
    'The template for rendering a Textarea field into the form.\n' +
    'Note here that the ng-change directive is bound to the fieldTextareaCtrl.field.updateValue function.\n' +
    ' This function is internal to the field definition in the Submission Model.\n' +
    '\n' +
    ' Any values that are to be applied to the submission for this field should use that function.\n' +
    '-->\n' +
    '\n' +
    '<md-input-container class="md-block" class="appform-field-textarea">\n' +
    '\n' +
    '  <label for="inputName" class="">{{fieldTextareaCtrl.field.name}}</label>\n' +
    '  <textarea\n' +
    '    name="inputName"\n' +
    '    ng-model="fieldTextareaCtrl.field.value"\n' +
    '    ng-minlength="fieldTextareaCtrl.field.fieldOptions.validation.min"\n' +
    '    ng-maxlength="fieldTextareaCtrl.field.fieldOptions.validation.max"\n' +
    '    ng-required="fieldTextareaCtrl.field.required"\n' +
    '    ng-change="fieldTextareaCtrl.field.updateValue()"\n' +
    '  ></textarea>\n' +
    '</md-input-container>\n' +
    '');
}]);

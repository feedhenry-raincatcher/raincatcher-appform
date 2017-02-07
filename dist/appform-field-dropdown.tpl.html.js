var ngModule;
try {
  ngModule = angular.module('wfm.appform');
} catch (e) {
  ngModule = angular.module('wfm.appform', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/appform-field-dropdown.tpl.html',
    '<!--\n' +
    '\n' +
    'The template for rendering a Dropdown field into the form.\n' +
    'Note here that the ng-change directive is bound to the fieldDropdownCtrl.field.updateValue function.\n' +
    ' This function is internal to the field definition in the Submission Model.\n' +
    '\n' +
    ' Any values that are to be applied to the submission for this field should use that function.\n' +
    '-->\n' +
    '\n' +
    '<md-input-container class="md-block" class="appform-field-dropdown">\n' +
    '\n' +
    '  <label for="inputName" class="">{{fieldDropdownCtrl.field.name}}</label>\n' +
    '  <md-select\n' +
    '    name="inputName"\n' +
    '    ng-model="fieldDropdownCtrl.field.value"\n' +
    '    ng-required="fieldDropdownCtrl.field.required"\n' +
    '    ng-change="fieldDropdownCtrl.field.updateValue()"\n' +
    '  >\n' +
    '    <md-option\n' +
    '      md-option-empty\n' +
    '      ng-if="fieldDropdownCtrl.field.fieldOptions.definition.include_blank_option">\n' +
    '    </md-option>\n' +
    '    <md-option\n' +
    '      ng-value="opt"\n' +
    '      ng-repeat="opt in fieldDropdownCtrl.field.fieldOptions.definition.options"\n' +
    '      ng-selected="opt.checked">\n' +
    '      {{ opt.label }}\n' +
    '    </md-option>\n' +
    '  </md-select>\n' +
    '</md-input-container>\n' +
    '');
}]);

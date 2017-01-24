var ngModule;
try {
  ngModule = angular.module('wfm.appform.directives');
} catch (e) {
  ngModule = angular.module('wfm.appform.directives', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/appform-field-textarea.tpl.html',
    '\n' +
    '<md-input-container class="md-block" class="{{field.props.fieldCode}} appform-field-textarea">\n' +
    '  <label for="inputTextarea" class="">{{field.props.name}}</label>\n' +
    '  <textarea\n' +
    '    placeholder="{{ctrl.field.props.helpText}}"\n' +
    '    name="inputTextarea"\n' +
    '    ng-model="ctrl.model.textarea"\n' +
    '    ng-change="ctrl.updateModel()"\n' +
    '    ng-required="ctrl.field.props.required"\n' +
    '  ></textarea>\n' +
    '  <div ng-messages="$parent.fieldForm.inputName.$error" ng-show="$parent.fieldForm.inputName.$dirty || $parent.fieldForm.$submitted">\n' +
    '    <div ng-message="required">A {{field.props.name}} is required.</div>\n' +
    '    <div ng-message="max" class="help-block">Value must be at most {{field.props.fieldOptions.validation.max}} characters.</div>\n' +
    '    <div ng-message="min" class="help-block">Value must be at least {{field.props.fieldOptions.validation.min}} characters.</div>\n' +
    '  </div>\n' +
    '</md-input-container>\n' +
    '');
}]);

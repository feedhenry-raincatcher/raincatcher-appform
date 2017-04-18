var ngModule;
try {
  ngModule = angular.module('wfm.appform');
} catch (e) {
  ngModule = angular.module('wfm.appform', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/appform-field-radio.tpl.html',
    '\n' +
    '<div>\n' +
    '    <md-radio-group ng-model="fieldRadioCtrl.field.value">\n' +
    '        <div ng-repeat="option in fieldRadioCtrl.field.fieldOptions.definition.options" layout="row">\n' +
    '            <div flex>\n' +
    '                <md-radio-button ng-value="option.label" aria-label="{{option.label}}">{{option.label}}</md-radio-button>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </md-radio-group>\n' +
    '</div>');
}]);

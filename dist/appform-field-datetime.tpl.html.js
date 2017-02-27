var ngModule;
try {
  ngModule = angular.module('wfm.appform');
} catch (e) {
  ngModule = angular.module('wfm.appform', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/appform-field-datetime.tpl.html',
    '<div layout="row">\n' +
    '  <p class="md-caption">{{fieldDateTimeCtrl.field.name}}</p>\n' +
    '  <md-input-container flex class="md-block appform-field-number">\n' +
    '    <label for="inputDate" class="">Date</label>\n' +
    '    <input type="date"\n' +
    '      placeholder="{{fieldDateTimeCtrl.field.helpText}}"\n' +
    '      name="inputDate"\n' +
    '      ng-model="fieldDateTimeCtrl.field.date"\n' +
    '      ng-change="fieldDateTimeCtrl.updateModel()"\n' +
    '      min="{{fieldDateTimeCtrl.field.fieldOptions.validation.min}}"\n' +
    '      max="{{fieldDateTimeCtrl.field.fieldOptions.validation.max}}"\n' +
    '      ng-required="fieldDateTimeCtrl.field.required"\n' +
    '    >\n' +
    '  </md-input-container>\n' +
    '\n' +
    '  <md-input-container flex class="md-block appform-field-number">\n' +
    '    <label for="inputTime" class="">Time</label>\n' +
    '    <input type="time"\n' +
    '           placeholder="{{fieldDateTimeCtrl.field.helpText}}"\n' +
    '           name="inputTime"\n' +
    '           ng-model="fieldDateTimeCtrl.field.time"\n' +
    '           ng-change="fieldDateTimeCtrl.updateModel()"\n' +
    '           min="{{fieldDateTimeCtrl.field.fieldOptions.validation.min}}"\n' +
    '           max="{{fieldDateTimeCtrl.field.fieldOptions.validation.max}}"\n' +
    '           ng-required="fieldDateTimeCtrl.field.required"\n' +
    '    >\n' +
    '  </md-input-container>\n' +
    '</div>\n' +
    '');
}]);

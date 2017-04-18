//Here, we can initialise the wfm.appform module.

//The appform module requires several modules to

'use strict';

/*global angular:true*/

module.exports = 'wfm.appform';

angular.module('wfm.appform', [
  require('fh-wfm-mediator')
])
  .run(function(mediator, appformClient) {
    appformClient.init();
  });

//All of the display templates for the fields.
require('../../dist/index');

//FORM Components
require('./form/formController');
require('./form/formDirective');

//Page Components
require('./page/pageController');
require('./page/pageDirective');

//Section Components
require('./section/sectionController');
require('./section/sectionDirective');

//Field Components
require('./field/fieldController');
require('./field/fieldDirective');

//Number Field Components
require('./fieldNumber/fieldNumberController');
require('./fieldNumber/fieldNumberDirective');

//Text Field Components
require('./fieldText/fieldTextController');
require('./fieldText/fieldTextDirective');

//Email Field Components
require('./fieldEmail/fieldEmailController');
require('./fieldEmail/fieldEmailDirective');

//Website Field Components
require('./fieldWebsite/fieldWebsiteController');
require('./fieldWebsite/fieldWebsiteDirective');

//DateTime Fields
require('./fieldDateTime');

//Location Field
require('./fieldLocation/fieldLocationController');
require('./fieldLocation/fieldLocationDirective');

//Photo Field
require('./fieldPhoto/fieldPhotoController');
require('./fieldPhoto/fieldPhotoDirective');

//File Field
require('./fieldFile/fieldFileController');
require('./fieldFile/fieldFileDirective');

//Textarea Field
require('./fieldTextarea/fieldTextareaController');
require('./fieldTextarea/fieldTextareaDirective');

//Dropdown Field
require('./fieldDropdown/fieldDropdownController');
require('./fieldDropdown/fieldDropdownDirective');

//Radio Field
require('./fieldRadio/fieldRadioController');
require('./fieldRadio/fieldRadioDirective');

//Checkbox Field
require('./fieldCheckbox/fieldCheckboxController');
require('./fieldCheckbox/fieldCheckboxDirective');
require('./fieldCheckbox/fieldCheckboxValidation');

//Shared Services
require('./shared');

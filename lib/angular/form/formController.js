
/*global angular:true*/


/**
 * The controller for the Form directive.
 *
 * This controller manages getting the form from the $fh.forms API using the appformClient Service
 *
 * TODO: Implement Submission and Back Commands.
 *
 * @param $scope
 * @param appformClient
 * @param mediator
 * @constructor
 */
function FormController($scope, appformClient, mediator) {
  var formCtrl = this;

  formCtrl.submit = function() {
    console.log("Submitting form locally", formCtrl.submission);
    formCtrl.submission.submit(function(err) {
      if (err) {
        //TODO Error Handling
        console.log("Error submitting submission", err);
        return err;
      }

      //The sumbmission has completed uploading to the remote server (TODO: This should be moved to mediator topcis)
      formCtrl.submission.on('submitted', function(submissionId) {
        console.log("Submission ID", submissionId);
      });

      //No error submitting the form, upload it to the remote server. (TODO: This should be moved to mediator topcis)
      formCtrl.submission.upload(function(err) {
        console.log("Submission Upload Started", err);
      });
    });
  };

  formCtrl.back = function() {
    mediator.publish('wfm:workflow:step:back');
  };

  //Getting a form from the $fh.forms Client API
  var formPromise = appformClient.getForm(formCtrl.formId);
  formPromise.then(function(form) {

    //Creating a new submission for the form to bind to the page, section and field view etc.
    appformClient.createNewSubmission(form).then(function(submission) {
      $scope.$apply(function() {
        formCtrl.submission = submission;
        formCtrl.form = submission.submissionState;
      });
    });
  }, function(error) {
    console.error("Error Loading Form", error);
  });
}

angular.module('wfm.appform').controller('FormController', ['$scope', 'appformClient', 'mediator', FormController]);
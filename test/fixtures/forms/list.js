var sinon = require('sinon');

module.exports = function() {
  var listFormsStub = sinon.stub();
  var mockFormsModel = {
    props: {
      forms: [{
        _id: "formid"
      }]
    }
  };

  listFormsStub.callsArgWith(1, undefined, mockFormsModel);

  return listFormsStub;
};
Package.describe({
  name: 'jayuda:bootstrap-material-datepicker',
  version: '0.1.3',
  summary: 'Datetime picker with Material Design. Modal dialog will appear when onFocus and OnClick',
  git: 'https://github.com/Jayuda/Meteor-bootstrap-material-datepicker.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.5');
  api.use('underscore');
  api.use('momentjs:moment@2.9.0');
  api.use('jquery');
  api.use('fezvrasta:bootstrap-material-design@0.3.0');

  api.addFiles('lib/bootstrap-material-datepicker.css', 'client');
  api.addFiles('lib/bootstrap-material-datepicker.js', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('jayuda:bootstrap-material-datepicker');
  api.addFiles('lib/bootstrap-material-datepicker.css', 'client');
  api.addFiles('test/bootstrap-material-datepicker-tests.js', 'client');
});

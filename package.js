Package.describe({
  name: 'marcelpanse:jquery-titlealert',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Plugin for flashing messages in the browser title bar.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/marcelpanse/jquery-titlealert',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('0.9.0');
  api.addFiles('jquery-titlealert.js', 'client');
});

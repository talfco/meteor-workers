Package.describe({
  name: 'talfco:workers',
  summary: 'Headless worker meteor processes derived from differential-workers',
  version: '1.0.0',
  git: 'https://github.com/talfco/meteor-workers'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  Npm.depends({
    monq: '0.3.3'
  });

  api.use([
    'coffeescript',
    'mongo',
    'random',
    'underscore',
    'differential:cluster@1.0.1',
    'percolate:synced-cron@1.1.1',
    'underscorestring:underscore.string@3.2.2'
  ], 'server');

  api.addFiles([
    'collections/jobs.coffee',
    'lib/Job.coffee',
    'lib/init.coffee'
  ], 'server');

  api.export(['Job', 'Jobs'], 'server');
  api.imply('differential:cluster');
});

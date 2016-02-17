
/*
 Copyright (c) 2012, Yahoo! Inc.  All rights reserved.
 Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var Store = require('istanbul/lib/store'),
    Report = require('istanbul/lib/report'),
    Command = require('istanbul/lib/command');

Store.register(require('istanbul/lib/store/fslookup.js'));
Store.register(require('istanbul/lib/store/memory.js'));
Store.register(require('istanbul/lib/store/tmp.js'));

Report.register(require('istanbul/lib/report/clover.js'));
Report.register(require('istanbul/lib/report/cobertura.js'));
Report.register(require('istanbul/lib/report/html.js'));
Report.register(require('istanbul/lib/report/json-summary.js'));
Report.register(require('istanbul/lib/report/json.js'));
Report.register(require('istanbul/lib/report/lcov.js'));
Report.register(require('istanbul/lib/report/lcovonly.js'));
Report.register(require('istanbul/lib/report/none.js'));
Report.register(require('istanbul/lib/report/teamcity.js'));
Report.register(require('istanbul/lib/report/text-lcov.js'));
Report.register(require('istanbul/lib/report/text-summary.js'));
Report.register(require('istanbul/lib/report/text.js'));

Command.register(require('istanbul/lib/command/check-coverage.js'));
Command.register(require('istanbul/lib/command/cover.js'));
Command.register(require('istanbul/lib/command/help.js'));
Command.register(require('istanbul/lib/command/instrument.js'));
Command.register(require('istanbul/lib/command/report.js'));
Command.register(require('istanbul/lib/command/test.js'));
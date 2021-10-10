const mocha = require('mocha');
const core = require('@actions/core');
module.exports = ActionsReporter;

function getParents(suite, acc = "") {
	if (suite.parent && suite.parent.title != "") {
		return getParents(suite.parent, suite.title + (acc ? " ▷ " + acc : ""))
	}
	return suite.title + " ▷ " + acc
}

function ActionsReporter(runner) {
	mocha.reporters.Base.call(this, runner);

	var passes = 0;
	var failures = 0;

	// runner.on('pass', function (test) {
	// 	passes++;
	// });

	runner.on('fail', function (test, err) {
		const parents = getParents(test)
		core.error(err, {
			title: parents,
		})
	});

	// runner.on('end', function () {
	// 	console.log('end: %d/%d', passes, passes + failures);
	// });
}

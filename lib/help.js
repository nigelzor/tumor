var _ = require('lodash-node'),
	color = require('./color');

function message(print) {
	function params(p) {
		_.each(p, function (desc, param) {
			var padding = new Array(12 - param.length).join(' ');
			print('  ' + color.param(param) + padding + desc);
		});
	}

	print(color.prog('tumor link') + ' [options]');
	print('  clone missing projects and run ' + color.prog('npm link') + ' as required');
	params({
		'-j N': 'run N tasks in parallel',
		'--verbose': 'show debugging output',
		'--noop': 'print commands instead of executing them'
	});
	print();
	print(color.prog('te') + ' [options] [--] <command>');
	print(color.prog('tumor exec') + ' [options] [--] <command>');
	print('  run <command> in each selected project');
	params({
		'-j N': 'run N tasks in parallel',
		'--verbose': 'show debugging output',
		'--noop': 'print commands instead of executing them',
		'--fail': 'stop execution if <command> exits with a non-zero status code'
	});
	print();
	print(color.prog('tumor status'));
	print('  report missing projects, unlinked dependencies, and git changes across projects');
	print();
	print('To work on a single project, run from the directory containing package.json.');
	print('If no package.json is found in the current directory, all projects matching */package.json will be selected.');
}

module.exports = function () {
	message(console.log);
	process.exit(1);
};
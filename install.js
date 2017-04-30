var ps = require('package-script');
var rimraf = require('rimraf');
var prompt = require('prompt');
var currentDir = process.cwd();

var property = {
  name: 'yesno',
  message: 'All done installing, would you like me to remove the installation folder for you?',
  validator: /y[es]*|n[o]?/,
  warning: 'Must respond yes or no',
  default: 'yes'
};

console.log('Welcome to the CodeGorilla NPM installer, about to install global NPM packages for you.');
console.log('This may take a while, you should go get a banana...');

var opts = {
	init: {
		global: true,
		log: false,
		debug: 0,
		depth: '0'
	},
	callback: function(){
		prompt.start();

		prompt.get(property, function (err, result) {
		  console.log('Command-line input received:');
		  console.log('  result: ' + result.yesno);
		});		
	}
}

var modules = [
	{
		name: 'yo',
		admin: true
	},
	{
		name: 'bower',
		admin: true
	},
	{
		name: 'generator-angular',
		admin: true
	},
	{
		name: 'grunt-cli',
		admin: true
	},
	{
		name: 'gulp',
		admin: true
	}
];

ps.install(modules, opts);
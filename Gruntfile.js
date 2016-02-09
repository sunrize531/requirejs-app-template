module.exports = function (grunt) {
	"use strict";

	grunt.initConfig({
		'requirejs-config': {
			dist: {
				config: {
					app: {version: grunt.file.readJSON('./package.json').version}
				},
				target: 'dist/module-cfg.src.js'
			}
		},

		requirejs: {
			dist: {
				// Compile the client
				options: {
					mainConfigFile: 'cfg.js',
					optimize: "none",
					include: ['../dist/module-cfg.src', 'main', 'requireLib'],
					out: 'dist/main.js'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-requirejs');

	grunt.registerMultiTask('requirejs-config', function () {
		grunt.file.write(this.data.target, 'require(' + JSON.stringify({config: this.data.config}) + ');');
	});

	grunt.registerTask('dist', ['requirejs-config:dist', 'requirejs:dist']);
};

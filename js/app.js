define(
	['jquery', 'lodash', 'module'],
	function ($, _, module) {
		"use strict";
		return { version: module.config().version };
	}
);
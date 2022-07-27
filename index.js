/**
 * @module      bytenode-file-webpack-plugin
 * @author      nayoayo
 * @date        2021/6/30 8:00 上午
 * @version     1.0
 */
const path = require('path');
const fs = require('fs');
const bytenode = require('bytenode');

/**
 * @param options {import('index.d.ts').Option[]}
 * @constructor
 */
function ByteNodeFileWebpackPlugin(options) {
	this.options = options
}

ByteNodeFileWebpackPlugin.prototype.apply = function (compiler) {
	let self = this;
	compiler.plugin('done', function () {
		self.options.forEach(option => {
			bytenode.compileFile(option)
		})
	});

}

module.exports = ByteNodeFileWebpackPlugin;

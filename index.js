/**
 * @module      bytenode-file-webpack-plugin
 * @author      nayoayo
 * @date        2021/6/30 8:00 上午
 * @version     1.0
 */
const fs = require('fs');
const bytenode = require('bytenode');
const pluginName = 'bytenode-file-webpack-plugin';


class ByteNodeFileWebpackPlugin{
	/**
	 * @param options {import('index.d.ts').Option[]}
	 * @constructor
	 */
	constructor(options) {
		this.options = options;
	}

	apply(compiler) {
		compiler.hooks.done.tap(pluginName, () => {
			this.options.forEach(option => {
				setTimeout(() => {
					fs.readFile(option.filename, 'utf8', function (err, data) {
						bytenode.compileFile(option);
						if (option.callback) {
							data = option.callback(data);
						}
						fs.writeFileSync(option.filename, data);
					});
				}, 1000);
			});
		});
	}
}

module.exports = ByteNodeFileWebpackPlugin;

let converter = require('../../index.js')
let fs = require('fs')
let assert = require('assert')

describe('svelte2tsx', () => {

	let configFileOptions = {}
	before(() => {
		configFileOptions = parseConfigFile(path.resolve(__dirname, "./tsconfig.json"));

	
	})


	fs.readdirSync(`${__dirname}/samples`).forEach(dir => {
		if (dir[0] === '.') return;

		// add .solo to a sample directory name to only run that test
		const solo = /\.solo$/.test(dir);

		if (solo && process.env.CI) {
			throw new Error(
				`Forgot to remove '.solo' from test parser/samples/${dir}`
			);
		}

		(solo ? it.only : it)(dir, () => {
			let inputFiles = fs.readdirSync(`${__dirname}/samples/${dir}`)
								.filter(f => f.endsWith(".svelte") || f.endsWith(".ts") || f.endsWith(".js"))
								.map(f => `./samples/${dir}`)

            const expectedOutputJson = fs.readFileSync(`${__dirname}/samples/${dir}/expected.json`, 'utf-8').replace(/\/\/\.*?$/g, "");
			let expectedOutput = JSON.parse(expectedOutputJson);

			let diags = compile(configFileOptions.options, conf.fileNames.concat(inputFiles));

       		diags.
            assert.equal(code, expectedOutput);
		});
	});
});
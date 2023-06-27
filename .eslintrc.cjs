/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
	root: true,
	extends: [
		'plugin:vue/vue3-essential',
		'eslint:recommended',
		'@vue/eslint-config-typescript',
		'@vue/eslint-config-prettier/skip-formatting'
	],
	rules: {
		'vue/multi-word-component-names': 'off',
		'vue/comment-directive': 'off',
		'vue/script-indent': [
			'error',
			'tab',
			{
				// script标签缩进设置
				baseIndent: 1
			}
		]
	},
	parserOptions: {
		parser: '@typescript-eslint/parser',
		ecmaVersion: 'latest'
	}
}

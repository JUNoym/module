'use strict'

const todo = require('./index.js')
const assert = require('assert');


todo.add('やること０')
todo.add('やること１')
assert.deepStrictEqual(todo.list(), ['やること０', 'やること１']);

todo.done('やること０')
assert.deepStrictEqual(todo.list(), ['やること１']);
assert.deepStrictEqual(todo.donelist(), ['やること０']);


console.log('テストが正常に完了しました')
'use strict'

let tasks = [];
const fs = require('fs');
const fileName = './tasks.json'

//同期的にファイルからデータを復元　その際にtasksの中身を
// fileNameに書き込んだときにJSON.stringify()で配列を文字列にしているので
// それを戻すためにjson.parseしている

try {
    //エラーが起きるかもしれない処理
    const data = fs.readFileSync(fileName);
    tasks = JSON.parse(data)
} catch (ignore) {
    //エラーが起きたときの例外処理
    console.log(fileName + 'からデータを復元できない' + ignore.message)
}

function saveTasks() {
    fs.writeFileSync(fileName, JSON.stringify(tasks), 'utf8');
}

function add(task) {
    tasks.push({ name: task, state: false });
    saveTasks();
};

function isDone(taskAndIsDonePair) {
    return taskAndIsDonePair.state //returnした時点でstateはtrue
}

function isNotDone(taskAndIsDonePair) {
    return !isDone(taskAndIsDonePair) //タスクが終わってないかどうかを返す
}

function list() {
    return tasks
        .filter(isNotDone)
        .map(task => task.name);
}

function done(task) {
    const indexFound = tasks.findIndex(t => t.name === task);
    if (indexFound !== -1) {
        tasks[indexFound].state = true
    }
    saveTasks();
}

function donelist() {
    return tasks.filter(isDone).map(task => task.name)
}

function del(task) {
    const indexFound = tasks.findIndex(t => t.name === task);
    if (indexFound !== -1) {
        tasks.splice(indexFound, 1);
    }
    saveTasks();
}

module.exports = {
    add, list, done, donelist, del
}
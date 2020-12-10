'use strict'

const tasks = [];

function add(task) {
    tasks.push({ name: task, state: false });
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
}

function donelist() {
    return tasks.filter(isDone).map(task => task.name)
}

module.exports = {
    add, list, done, donelist
}
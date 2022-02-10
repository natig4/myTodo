import { storageService } from './async-storage.service.js'
import { pathToStorage } from './storage.service.js'
import { utilService } from './util.service.js'

export const todoService = {
    query,
    getTodoById,
    removeTodo,
    saveTodo
}

const STORAGE_KEY = 'todos_DB'
let gTodos;

_createTodos()


function _createTodos() {
    gTodos = pathToStorage.loadFromStorage(STORAGE_KEY) || []
    if (!gTodos || gTodos.length === 0) {
        gTodos = [{
            _id: utilService.makeId(),
            title: 'First Todo',
            createdAt: Date.now(),
        }, {
            _id: utilService.makeId(),
            title: 'Second Todo',
            createdAt: Date.now(),
        }]
        pathToStorage.saveToStorage(STORAGE_KEY, gTodos);
    }
}


function query() {
    return storageService.query(STORAGE_KEY)
}

function getTodoById(todoId) {
    return storageService.get(STORAGE_KEY, todoId)
}

function removeTodo(todoId) {
    return storageService.remove(STORAGE_KEY, todoId)
}

function saveTodo(todo) {
    if (todo._id) {
        return storageService.put(STORAGE_KEY, todo)
    } else {
        return storageService.post(STORAGE_KEY, todo)
    }
}
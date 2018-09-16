import storage from 'localforage';

export function addExpense(expense) {
    let id = expense.id
    storage.setItem(id, expense)
}

export function getExpenses() {
    let list = []

    storage.keys().then(keys => {
        keys.forEach(key => {
            storage.getItem(key).then(
                value => list.push(value)
            )
        })
    })

    return list
}

export function removeExpense(expense) {
    let id = expense.id
    storage.removeItem(id)
}

export function setDone(expense) {
    let id = expense.id
    const item = storage.getItem(id)
    item.done = expense.done
    storage.setItem(id, expense)
}
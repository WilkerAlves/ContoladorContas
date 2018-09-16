import storage from 'localforage';

export function addExpense(expense) {
    console.log("objeto enviado", expense)
    let id = expense.id;
    console.log("meu id", id)
    storage.setItem(id, expense)
}
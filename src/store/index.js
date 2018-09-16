import Vue from "vue"
import Vuex from "vuex"
import { addExpense, removeExpense } from "../persistence"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Expenses: {
      List: []
    }
  },
  mutations: {
    ADD_EXPENSE(state, obj) {
      addExpense(obj)
      state.Expenses.List.unshift(obj)
    },
    SET_EXPENSE(state, obj) {
      state.Expenses.List = obj
    },
    REMOVE_EXPENSE(state, obj) {
      const index = state.Expenses.List.indexOf(obj)
      removeExpense(obj)
      state.Expenses.List.splice(index, 1)
    }
  }
});

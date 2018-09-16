import Vue from "vue";
import Vuex from "vuex";
import { addExpense } from "../persistence";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Expenses: {
      List: []
    }
  },
  mutations: {
    ADD_EXPENSE(state, obj) {
      console.log(obj)
      addExpense(obj)
      state.Expenses.List.unshift(obj);
    }
  }
});

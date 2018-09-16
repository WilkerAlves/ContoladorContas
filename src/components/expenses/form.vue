<script>
import { date } from "quasar";
import { uid } from "quasar";
export default {
  name: "WwForm",
  data() {
    return {
      expense: {
        id: "",
        amount: "",
        description: "",
        data: date.formatDate(Date.now(), "DD/MM/YYYY")
      }
    };
  },
  methods: {
    submit() {
      const cloned = JSON.parse(JSON.stringify(this.expense));
      cloned.id = uid();
      this.$store.commit("ADD_EXPENSE", cloned);
      this.reset();
    },
    reset() {
      this.expense.amount = "";
      this.expense.description = "";
      this.expense.data = date.formatDate(Date.now(), "DD/MM/YYYY");
      this.$refs.amount.focus();
    }
  }
};
</script>

<template>
    <form @submit.prevent="submit">
        <q-input ref="amount" class="my-input" v-model="expense.amount" type="number" placeholder="R$"/>
        <q-input class="my-input" v-model="expense.description" type="text" placeholder="Descrição"/>
        <q-input class="my-input" v-model="expense.data" type="text" placeholder="Data"/>
        <q-btn class="my-btn full-width" color="primary" type="submit" label="Salvar"/>
    </form>
</template>

<style scoped>
.my-input {
  margin-bottom: 20px;
}
</style>



<script>
import { getExpenses, setDone } from "../../persistence";
export default {
  name: "WwList",
  computed: {
    list() {
      return this.$store.state.Expenses.List;
    }
  },
  mounted() {
    this.$store.commit("SET_EXPENSE", getExpenses());
  },
  filters: {
    formaterAmount: function(amount) {
      return amount.toFixed(2).replace(".", ",");
    }
  },
  methods: {
    askRemove(expense) {
      const self = this;
      this.$q
        .dialog({
          title: "Remover Despesa",
          message: "Tem certeza que deseja remover esta dispesa?",
          ok: "Sim",
          cancel: "Não"
        })
        .then(() => {
          console.log(expense);
          self.remove(expense);
        });
    },
    remove(expense) {
      this.$store.commit("REMOVE_EXPENSE", expense);
    },
    toggle(expense) {
      console.log("clique", expense);
      expense.done = !expense.done;
      setDone(expense);
    }
  }
};
</script>

<template>
    <div>
        <q-list class="expense" v-for="expense in list" :key="expense.id" >
            <q-item @click.native="toggle(expense)">
                <q-item-main>
                    <q-item-tile :class="{done : expense.done}" label>R$ {{expense.amount | formaterAmount}} - {{expense.data}}</q-item-tile>
                    <q-item-tile :class="{done : expense.done}" sublabel>{{expense.description}}</q-item-tile>
                    <q-btn class="btn-list-item" round color="red" icon="delete_forever" size="md" @click.prevent="askRemove(expense)"/>
                </q-item-main>
                <q-item-separator />
            </q-item>
            
        </q-list>
    </div>
</template>

<style scoped>
.done {
  text-decoration: line-through;
  color: #ccc;
}
.expense {
  margin-top: 10px;
}
.btn-list-item {
  margin-top: 5px;
}
</style>



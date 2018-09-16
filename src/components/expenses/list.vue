<script>
export default {
  name: "WwList",
  computed: {
    list() {
      return this.$store.state.Expenses.List;
    }
  }
};
</script>

<template>
    <div>
        <q-list class="expense" v-for="expense in list" :key="expense.amount">
            <q-item>
                <q-item-main>
                    <q-item-tile label>R$ {{expense.amount.toFixed(2)}} - {{expense.data}}</q-item-tile>
                    <q-item-tile sublabel>{{expense.description}}</q-item-tile>
                </q-item-main>
                <q-item-separator />
            </q-item>
            
        </q-list>
    </div>
</template>

<style scoped>
.expense {
    margin-top: 10px;
}
</style>



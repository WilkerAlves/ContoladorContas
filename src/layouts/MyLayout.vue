<script>
  import  WwForm  from '../components/expenses/form.vue'
  import  WwList  from '../components/expenses/list.vue'

  export default {
    components: {WwForm,WwList}
  }

</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="primary"
        :glossy="$q.theme === 'mat'"
        :inverted="$q.theme === 'ios'"
      >
        <q-toolbar-title>
          Controle de Compras
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>
    <q-page-container>
      <div class="container">
        <ww-form></ww-form>
        <ww-list></ww-list>
      </div>
    </q-page-container>
  </q-layout>
</template>

<style scoped>
  .container {
    padding: 20px;
  }
</style>


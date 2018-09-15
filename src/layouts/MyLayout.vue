<script>
  import WWForm from '../components/expenses/form.vue' 

export default {
  componentes : {"ww-form" : WWForm}
  }
</script>


<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar color="primary" :glossy="$q.theme === 'mat'" :inverted="$q.theme === 'ios'">
        <q-toolbar-title>
          Controlador de Contas
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>
     <q-page-container>
      <div class="container">
        <ww-form></ww-form>
      </div>
    </q-page-container>
  </q-layout>
</template>

<style scoped>
  .container {
    padding: 20px;
  }
</style>

<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col sm="12">
        <c-table striped bordered small fixed></c-table>
      </b-col>
    </b-row>
  </div>
</template>

<script>

import cTable from './base/table'

export default {
  name: 'mcc',
  //middleware: 'authenticated',
  components: {cTable}
}
</script>
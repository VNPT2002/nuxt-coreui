<template>
  <div class="animated fadeIn">
    <b-row>
      Hello {{loggedUser}}
    </b-row>
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'dashboard',
  middleware: 'authenticated',
  computed: mapGetters([
    'loggedUser'
  ]),
}
</script>
<template>
  <b-card>
    <b-table :hover="hover" :striped="striped" :bordered="bordered" :small="small" :fixed="fixed" responsive="sm" :items="items" :fields="fields" :current-page="currentPage" :per-page="perPage">
      <template slot="actions" slot-scope="row">
        <!-- We use @click.stop here to prevent a 'row-clicked' event from also happening -->
        <b-button size="sm" @click.stop="info(row.item, row.index, $event.target)" class="mr-1">
         <i class="fa fa-edit"></i>
        </b-button>
       <b-button size="sm" @click.stop="info(row.item, row.index, $event.target)" class="mr-1">
         <i class="fa fa-trash-o"></i>
        </b-button>

      </template>
      <template slot="status" slot-scope="data">
        <b-badge :variant="getBadge(data.item.status)">{{data.item.status}}</b-badge>
      </template>
    </b-table>
    <nav>
      <b-pagination align="right" size="md" :total-rows="getRowCount(items)" :per-page="perPage" v-model="currentPage"/>
    </nav>

    <!-- Info modal -->
    <b-modal id="modalInfo" @hide="resetModal" :title="modalInfo.title" ok-only>
      <pre>{{ modalInfo.content }}</pre>
    </b-modal>

  </b-card> 
</template>

<script>
export default {
  name: "c-table",
  props: {
    caption: {
      type: String,
      default: "Table"
    },
    hover: {
      type: Boolean,
      default: false
    },
    striped: {
      type: Boolean,
      default: false
    },
    bordered: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    },
    fixed: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.$store.dispatch("sysuser/loadData");
  },
  data: () => {
    return {
      items: [
        {
          username: "Samppa Nori",
          registered: "2012/01/01",
          role: "Member",
          status: "Active"
        },
        {
          username: "Estavan Lykos",
          registered: "2012/02/01",
          role: "Staff",
          status: "Banned"
        },
        {
          username: "Chetan Mohamed",
          registered: "2012/02/01",
          role: "Admin",
          status: "Inactive"
        },
        {
          username: "Derick Maximinus",
          registered: "2012/03/01",
          role: "Member",
          status: "Pending"
        },
        {
          username: "Friderik Dávid",
          registered: "2012/01/21",
          role: "Staff",
          status: "Active"
        },
        {
          username: "Yiorgos Avraamu",
          registered: "2012/01/01",
          role: "Member",
          status: "Active"
        },
        {
          username: "Avram Tarasios",
          registered: "2012/02/01",
          role: "Staff",
          status: "Banned"
        },
        {
          username: "Quintin Ed",
          registered: "2012/02/01",
          role: "Admin",
          status: "Inactive"
        },
        {
          username: "Félix Troels",
          registered: "2012/03/21",
          role: "Staff",
          status: "Active"
        },
        {
          username: "Aulus Agmundr",
          registered: "2012/01/01",
          role: "Member",
          status: "Pending"
        }
      ],
      fields: [
        { key: "username" },
        { key: "registered" },
        { key: "role" },
        { key: "status" },
        { key: "actions", label: "Actions" }
      ],
      currentPage: 1,
      perPage: 5,
      totalRows: 0,
      modalInfo: { title: "", content: "" }
    };
  },
  methods: {
    info(item, index, button) {
      this.modalInfo.title = `Row index: ${index}`;
      this.modalInfo.content = JSON.stringify(item, null, 2);
      this.$root.$emit("bv::show::modal", "modalInfo", button);
    },
    resetModal() {
      this.modalInfo.title = "";
      this.modalInfo.content = "";
    },
    getBadge(status) {
      return status === "Active"
        ? "success"
        : status === "Inactive"
          ? "secondary"
          : status === "Pending"
            ? "warning"
            : status === "Banned" ? "danger" : "primary";
    },
    getRowCount(items) {
      return items.length;
    }
  }
};
</script>

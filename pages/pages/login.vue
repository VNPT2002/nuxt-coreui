<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="8">
          <b-card-group>
            <b-card no-body class="p-4">
              <b-card-body>
                <h1>Login</h1>
                <p class="text-muted"></p>                
                <b-input-group class="mb-3">
                  <b-input-group-prepend><b-input-group-text><i class="icon-user"></i></b-input-group-text></b-input-group-prepend>
                  <input type="text" class="form-control" placeholder="Username" v-model="formUsername" name="Username">
                </b-input-group>
                <b-input-group class="mb-4">
                  <b-input-group-prepend><b-input-group-text><i class="icon-lock"></i></b-input-group-text></b-input-group-prepend>
                  <input type="password" class="form-control" placeholder="Password" v-model="formPassword" name="Password">
                </b-input-group>
                <b-row>
                  <b-col cols="6">
                    <b-button variant="primary" class="px-4" @click="login">Login</b-button>
                  </b-col>                                            
                </b-row>                       
              </b-card-body>
            </b-card>            
          </b-card-group>
        </b-col>
      </b-row>      
    </div>
  </div>
</template>

<script>

export default {
  name: "Login",
  layout: "clean",
  //middleware: 'anonymous',
  data() {
    return {
      formError: null,
      formUsername: "",
      formPassword: ""
    };
  },
  methods: {
    login() {      
      try {
        this.$store.dispatch('login', {
          user: this.formUsername,
          pwd: this.formPassword
        }); 
        this.formUsername = "";
        this.formPassword = "";
        this.formError = null;
      } catch (e) {
        this.formError = e.message
      }
    }
  }
};
</script>

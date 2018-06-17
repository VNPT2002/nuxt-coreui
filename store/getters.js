
const getters = {
  isAuth: state => state.login.isAuthenticated,
  tonken: state => state.login.loggedUser
}
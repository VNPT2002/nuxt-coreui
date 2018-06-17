export default function ({ store, redirect }) {
  if (store.getters['login/isAuthenticated']) {
    return redirect('/')
  }
}

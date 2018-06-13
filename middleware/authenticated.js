export default function ({ store, redirect }) { 
  if (!store.getters.isAuthenticated) {
    console.log("here")
    return redirect('/pages/login')
  }
}
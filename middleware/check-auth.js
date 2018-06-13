import { getUserFromCookie, getUserFromSessionStorage } from '~/utils/auth'

export default function ({ store, req, redirect }) {
  const tonken = process.server ? getUserFromCookie(req) : getUserFromSessionStorage()
  console.log("===========================")
  //const tonken = getUserFromSessionStorage()
  //if (tonken === undefined) return redirect('/pages/login')
  store.commit('SET_USER', tonken)
}
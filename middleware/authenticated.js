import { getUserFromCookie, getUserFromLocalStorage } from '~/utils/auth'

export default function ({store, req, redirect}) {
  const tonken = process.server ? getUserFromCookie(req) : getUserFromLocalStorage
  if(tonken === undefined) return redirect('/pages/login')
  store.commit('SET_USER', tonken)
}
import { getUserFromCookie, getUserFromSessionStorage } from '~/utils/auth'

export default function (context) {
 
  let tonken = null
  if (context.store.getters.isAuthenticated)
    tonken = context.store.getters.loggedUser
  else
    tonken = process.server ? getUserFromCookie(context.req) : getUserFromSessionStorage()
  context.store.commit('SET_USER', tonken)
}
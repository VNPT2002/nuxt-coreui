import { getUserFromCookie, getUserFromSessionStorage } from '~/utils/auth'

export default function (context) {
  let tonken = process.server ? getUserFromCookie(context.req) : getUserFromSessionStorage()
  if (context.store.getters.isAuthenticated)
    tonken = context.store.getters.loggedUser
  context.store.commit('SET_USER', tonken)
}
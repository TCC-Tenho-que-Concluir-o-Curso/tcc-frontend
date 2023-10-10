export default function ({ store, redirect }) {
  console.log('middleware/auth.js')
  console.log(store.getters.isLoggedIn)
  if (!store.getters.isLoggedIn) {
    return redirect('/login')
  }
}

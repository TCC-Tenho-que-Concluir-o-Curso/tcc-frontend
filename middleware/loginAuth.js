export default function ({ store, redirect }) {
  console.log('middleware/loginAuth.js', store.getters.isLoggedIn)
  if (store.getters.isLoggedIn) {
    return redirect('/home')
  }
}

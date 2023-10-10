export default function ({ store, redirect }) {
  console.log('middleware/loginAuth.js')
  console.log(store.getters.isLoggedIn)
  if (store.getters.isLoggedIn) {
    return redirect('/')
  }
}

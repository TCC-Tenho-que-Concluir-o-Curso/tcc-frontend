export default function ({ $axios, store }) {
  // Add a request interceptor to set the common header
  $axios.onRequest((config) => {
    config.headers['Authorization'] = `${store.state.authUser.uid}`

    return config
  })
}

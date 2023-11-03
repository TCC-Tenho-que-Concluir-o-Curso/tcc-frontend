import initialState from './state'

const TEACHER = 'teacher'
const STUDENT = 'student'

function getUserType(user) {
  if (user?.email?.endsWith('@ccc.ufcg.edu.br')) {
    return STUDENT
  } else if (user?.email?.endsWith('@computacao.ufcg.edu.br')) {
    return TEACHER
  }
}

export default {
  RESET_STORE: (state) => {
    Object.assign(state, initialState())
  },

  SET_AUTH_USER: (state, authUser) => {
    authUser.type = getUserType(authUser)
    console.log('SETANDO USER', authUser)
    state.authUser = {
      user: authUser,
      uid: authUser?.uid,
      email: authUser?.email,
    }
  },
}

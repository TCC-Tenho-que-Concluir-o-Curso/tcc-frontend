export default {
  isLoggedIn: (state) => {
    try {
      return state.authUser.user !== null
    } catch {
      return false
    }
  },

  user: (state) => {
    try {
      return state.authUser.user
    } catch {
      return null
    }
  },

  userTypeFormatted: (state) => {
    try {
      return state.authUser.user.type === 'teacher' ? 'aluno' : 'professor'
    } catch {
      return null
    }
  },

  userTypeFormattedPlural: (state) => {
    try {
      return state.authUser.user.type === 'teacher' ? 'alunos' : 'professores'
    } catch {
      return null
    }
  },
}

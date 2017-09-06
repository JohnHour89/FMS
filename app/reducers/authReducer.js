var defaultState = {
  token: undefined
}

module.exports = (state=defaultState, action) => {
  switch(action.type) {
    case 'AUTH_USER':
      return {
        token: action.token
      }

    case 'UNAUTH_USER':
      return {
        token: undefined
      };

    default:
      return state;
  }
}

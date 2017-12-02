const initialState = {
  languages: []
}

export const receiveLanguages = (languages) => ({
  type: 'languages', languages
})

const root = (state = initialState, action) => {
  switch(action.type) {
    case 'languages':
      return Object.assign({}, state, {
        languages: action.languages
      })
  }
  return state
}

export default root
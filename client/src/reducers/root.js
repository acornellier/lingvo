const initialState = {
  languages: [],
  translation: ''
}

export const receiveLanguages = (languages) => ({
  type: 'languages', languages
})

export const receiveTranslation = (translation) => ({
  type: 'translation', translation
})

const root = (state = initialState, action) => {
  console.log(action)
  switch(action.type) {
    case 'languages':
      return Object.assign({}, state, {
        languages: action.languages
      })
    case 'translation':
      return Object.assign({}, state, {
        translation: action.translation
      })
  }
  return state
}

export default root
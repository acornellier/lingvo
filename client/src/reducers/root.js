const initialState = {
  languages: [],
  translations: ''
}

export const receiveLanguages = (languages) => ({
  type: 'languages', languages
})

export const receiveTranslations = (translations) => ({
  type: 'translations', translations
})

const root = (state = initialState, action) => {
  console.log(action)
  switch(action.type) {
    case 'languages':
      return Object.assign({}, state, {
        languages: action.languages
      })
    case 'translations':
      return Object.assign({}, state, {
        translations: action.translations
      })
  }
  return state
}

export default root
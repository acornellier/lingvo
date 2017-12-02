import {createStore} from 'redux'

import rootReducer from './reducers/root'

const configureStore = () => {
  const store = createStore(rootReducer)

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(rootReducer)
    })
  }

  return store
}

export default configureStore
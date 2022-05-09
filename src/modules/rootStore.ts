import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import createSagaMiddleware from 'redux-saga'
import { createBrowserHistory } from 'history'
import { rootReducer } from './rootReducer'
import { routerMiddleware } from 'connected-react-router'
import rootSaga from './rootSaga'

export const history = createBrowserHistory()
const reduxSaga = createSagaMiddleware({
  context: {
    history,
  },
})
const middlewares = [routerMiddleware(history), reduxSaga]
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)))

reduxSaga.run(rootSaga)

export default store

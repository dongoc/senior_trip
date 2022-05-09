import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import createSagaMiddleware from 'redux-saga'
import { rootReducer } from './rootReducer'
import rootSaga from './rootSaga'

const reduxSaga = createSagaMiddleware()
const middleware = [reduxSaga]
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)))

reduxSaga.run(rootSaga)

export default store

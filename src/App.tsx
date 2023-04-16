import { Provider } from 'react-redux'

import store from './store'

import { Container } from './components/Container/Container'

function App () {
  return (
    <div>
      <Provider store={store}>
        <Container />
      </Provider>
    </div>
  )
}

export default App

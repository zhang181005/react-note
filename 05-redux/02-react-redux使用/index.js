import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import App from './component/App'
import store from './store/store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <App></App>
  </Provider>
)

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './assets/scss/main.scss'
import RootStore from './stores/RootStore'
import { Provider } from 'mobx-react'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
    <Provider store={RootStore}>
        <App />
    </Provider>,
    document.getElementById('root'))
registerServiceWorker()

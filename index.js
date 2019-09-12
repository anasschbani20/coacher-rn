import App from './src/App'
// import { registerScreens } from './src/components/routes'
import { registerScreens } from './src/screens'

if (window.__FETCH_SUPPORT__) {
  window.__FETCH_SUPPORT__.blob = false
}

registerScreens()

export default new App()
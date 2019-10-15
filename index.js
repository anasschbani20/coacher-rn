import App from './src/App'
// import { registerScreens } from './src/components/routes'
import { registerScreens } from './src/screens'


// global.XMLHttpRequest = global.originalXMLHttpRequest ?
//     global.originalXMLHttpRequest :
//     global.XMLHttpRequest;
// global.FormData = global.originalFormData ?
//     global.originalFormData :
//     global.FormData;
//
// fetch; // Ensure to get the lazy property
//
// // RNDebugger only
// if (window.__FETCH_SUPPORT__) {
//   window.__FETCH_SUPPORT__.blob = false
// }


registerScreens()

export default new App()
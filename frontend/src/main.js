import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store'
import './styles/styles.scss'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


const app = createApp(App)
app.use(ElementPlus)
app.use(router)
<<<<<<< HEAD
app.use(store);
app.use(ElementPlus)
=======
app.use(store)

>>>>>>> 9bc0f1385bf015eff70b8f2c2233332b62a7cc80

app.mount('#app')

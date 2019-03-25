import Vue from 'vue'
import VueChatScroll from 'vue-chat-scroll'
import './plugins/vuetify'
import * as firebase from 'firebase'
import App from './App.vue'
import store from './store'
import router from './router'
import keys from './keys'

Vue.use(VueChatScroll)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  components: { App },

  render: h => h(App),
  created() {
    firebase.initializeApp({
      apiKey: keys.apiKey,
      authDomain: keys.authDomain,
      databaseURL: keys.databaseURL,
      projectId: keys.projectId,
      storageBucket: keys.storageBucket,
      messagingSenderId: keys.messagingSenderId
    })
  }
}).$mount('#app')

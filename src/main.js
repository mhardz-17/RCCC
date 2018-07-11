// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './../node_modules/jquery/dist/jquery.min.js'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './../node_modules/bootstrap/dist/js/bootstrap.min.js'
import './assets/css/main.css'

import BaseBand from './components/BaseBand.vue'
import MultiplierBand from './components/MultiplierBand.vue'
import ToleranceBand from './components/ToleranceBand.vue'

var _ = require('lodash')

Vue.config.productionTip = false

Vue.component('base-band', BaseBand)
Vue.component('multiplier-band', MultiplierBand)
Vue.component('tolerance-band', ToleranceBand)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

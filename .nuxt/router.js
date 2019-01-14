import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _9830a9c8 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _19e0c258 = () => interopDefault(import('../pages/horsemask.vue' /* webpackChunkName: "pages/horsemask" */))
const _1c44dae8 = () => interopDefault(import('../pages/poseidon.vue' /* webpackChunkName: "pages/poseidon" */))
const _0e705f29 = () => interopDefault(import('../pages/tiptap.vue' /* webpackChunkName: "pages/tiptap" */))
const _9bc60d8e = () => interopDefault(import('../pages/trumpcard.vue' /* webpackChunkName: "pages/trumpcard" */))
const _7a591bac = () => interopDefault(import('../pages/twosevenzero.vue' /* webpackChunkName: "pages/twosevenzero" */))
const _b7f73412 = () => interopDefault(import('../pages/venu.vue' /* webpackChunkName: "pages/venu" */))
const _58c0f43e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/about",
      component: _9830a9c8,
      name: "about"
    }, {
      path: "/horsemask",
      component: _19e0c258,
      name: "horsemask"
    }, {
      path: "/poseidon",
      component: _1c44dae8,
      name: "poseidon"
    }, {
      path: "/tiptap",
      component: _0e705f29,
      name: "tiptap"
    }, {
      path: "/trumpcard",
      component: _9bc60d8e,
      name: "trumpcard"
    }, {
      path: "/twosevenzero",
      component: _7a591bac,
      name: "twosevenzero"
    }, {
      path: "/venu",
      component: _b7f73412,
      name: "venu"
    }, {
      path: "/",
      component: _58c0f43e,
      name: "index"
    }],

    fallback: false
  })
}

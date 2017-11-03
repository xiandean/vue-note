import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

class LocalEvent {
  constructor (item) {
    this.item = item
  }

  get () {
    return JSON.parse(localStorage.getItem(this.item))
  }

  set (obj) {
    localStorage.setItem(this.item, JSON.stringify(obj))
  }

  clear () {
    localStorage.removeItem(this.item)
  }
}

const local = new LocalEvent('lx_note')

const state = local.get() || {
  notes: [],
  activeNote: {}
}

const getters = {
  notes: state => state.notes,
  activeNote: state => state.activeNote
}

const mutations = {
  ADD_NOTE (state) {
    console.log(state.activeNote)
    const noteid = Math.round(Math.random() * 10000)
    const note = {
      id: noteid,
      text: 'New Note, say somthing...',
      favor: false
    }
    state.notes.push(note)
    if (state.notes.length === 1) {
      state.activeNote = state.notes[0]
    }
    local.set(state)
  },
  DELETE_NOTE (state) {
    let notes = state.notes
    for (let key in notes) {
      if (notes[key].id === state.activeNote.id) {
        state.notes.splice(key, 1)
        state.activeNote = state.notes[0] || {}
        local.set(state)
      }
    }
  },
  ADD_FAVOR (state) {
    state.activeNote.favor = true
    local.set(state)
  },
  REMOVE_FAVOR (state) {
    state.activeNote.favor = false
    local.set(state)
  },
  EDIT_NOTE (state, text) {
    state.activeNote.text = text
    local.set(state)
  },
  SET_ACTIVENOTE (state, item) {
    state.activeNote = item
    local.set(state)
  }
}

const actions = {
  add_note ({commit}) {
    return commit('ADD_NOTE')
  },
  delete_note ({commit}) {
    return commit('DELETE_NOTE')
  },
  add_favor ({commit}) {
    return commit('ADD_FAVOR')
  },
  remove_favor ({commit}) {
    return commit('REMOVE_FAVOR')
  },
  edit_note ({commit}, text) {
    return commit('EDIT_NOTE', text)
  },
  set_activeNote ({commit}, item) {
    return commit('SET_ACTIVENOTE', item)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

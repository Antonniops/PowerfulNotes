import Vue from "vue";
import Vuex from "vuex";

import {dummyNotes} from "../data/notes";

Vue.use(Vuex);

const moduleNotes = {
  state: () => ({
    notes: dummyNotes
  }),
  mutations: {
    // Delete a single note
    deleteNote (state, id){
      console.log(state);
      state.notes.splice(id, 1);
    }
  },
  actions: {},
  getters: {
    // Get a single note
    getNotes: state => {
      return state.notes;
    }
  }
}

export default new Vuex.Store({
  modules: {
    notes: moduleNotes
  }
});

import Vue from "vue"
import Vuex from "vuex"
import {contacts, addContactPromise, deleteContactPromise} from "./DataService"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        contacts : []
    },
    getters : {
        getContacts : (state) => {
            return state.contacts
        }
    },
    mutations: {
        addContact(state,contact) {
            state.contacts.push(contact)
        },
        updateContact(state) {
            state.contacts = [...contacts]

        }   
    },
    actions: {
        actionAddContact({commit},contact) {
            addContactPromise(contact).then(() => {
                commit('updateContact')
            })
        },
        actionDeleteContact(store,id) {
            deleteContactPromise(id).then(() => {
                store.commit('updateContact')
            })
        }
    }
})
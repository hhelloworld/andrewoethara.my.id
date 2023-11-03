import Vue from 'vue'
import Vuex from 'vuex'
import judahutasoit from '../assets/Juda-Hutasoit.jpg'
import sintamauli from '../assets/Sinta-Mauli.jpg'
import nichole from '../assets/nichole.jpeg'
import asri from '../assets/asri.jpeg'
import rachel from '../assets/rachel.jpeg'
import maria from '../assets/maria.jpeg'
import charles from '../assets/charles.jpeg'
import obor from '../assets/obor.jpeg'
import arnold from '../assets/arnold.jpeg'
import nora from '../assets/nora.jpeg'

import toti from '../assets/totti.jpeg'
import elsa from '../assets/elsa.jpeg'
import richard from '../assets/richard.jpeg'
import pretty from '../assets/pretty.jpeg'
import sidabutar from '../assets/sidabutar.jpeg'
import maell from '../assets/maell.jpeg'
import sibuea from '../assets/sibuea.jpeg'
import nelson from '../assets/nelson.jpeg'
import rugun from '../assets/rugun.jpeg'
import andrew from '../assets/andrew.jpeg'
import posmelita from '../assets/posmelita.jpeg'
import tumpal from '../assets/tumpal.jpeg'
import miranda from '../assets/miranda.png'
import hanny from '../assets/hanny.png'
import ruth from '../assets/ruth.png'
import julian from '../assets/julian.png'
import ranisa from '../assets/ranisa.png'
import jonathan from '../assets/jonathan.png'
import polin from '../assets/polin.jpeg'
import mopul from '../assets/mopul.jpeg'

import createPersistedState from "vuex-persistedstate";


Vue.use(Vuex)


export default new Vuex.Store({
  plugins: [createPersistedState()],

  state: {
    tree: [{
        "id": '1',
        "firstPerson": {
          "name": "Jaksa Juda Hutasoit",
          "image": [judahutasoit],
          "status": "deceased",
          "age": "86",
          detail: false
        },
        "secondPerson": {
          "name": "Sinta Mauli br. Siregar",
          "image": [sintamauli],
          "status": "deceased",
          "age": "84",
          detail: false
        },
        "children": [{
          "id": "2",
          "firstPerson": {
            "name": "Mangatas Hutasoit",
            "image": "",
            "status": "deceased",
            "age": "79",
            action: "action8",
            detail: false

          },
          "secondPerson": {
            "name": "Rugun br. Naibaho ",
            "image": [rugun],
            "status": "deceased",
            "age": "81",
            detail: false

          },
          "children": [{
            "id": "3",
            "firstPerson": {
              "name": "Nelly Perak H. br. Hutasoit",
              "image": "",
              "status": "alive",
              "age": "81",
              detail: false
            },
            "secondPerson": {
              "name": "P. Sagala",
              "image": [polin],
              "status": "deceased",
              "age": "81",
              action: "action1",
              detail: false

            },
            "children": [{
              "id": "13",
              "firstPerson": {
                "name": "Mopul Sagala",
                "image": [mopul],
                "status": "alive",
                "age": "37",
                detail: false
              },

              "secondPerson": {
                "name": "Eka",
                "image": "",
                "status": "alive",
                "age": "34",
                detail: false

              }
            },
            {
              "id": "13",
              "firstPerson": {
                "name": "Rachel Carolina br. Sagala",
                "image": [rachel],
                "status": "alive",
                "age": "37",
                detail: false

              }
            }
            ]
          },
          {
            "id": "3",
            "firstPerson": {
              "name": "Nelson Hutasoit",
              "image": [nelson],
              "status": "deceased",
              "age": "81",
              "anak": "true",
              action: "action2",
              detail: false

            },
            "secondPerson": {
              "name": "Frida br. Sipahutar",
              "image": "",
              "status": "deceased",
              "age": "79",
              detail: false
            },
            "children": [{
              "id": "22",
              "firstPerson": {
                "name": "Asrida br. Hutasoit",
                "image": [asri],
                "status": "alive",
                "age": "30",
                detail: false
              }
            },
            {
              "id": "22",
              "secondPerson": {
                "name": "Maria br. Hutasoit",
                "image": [maria],
                "status": "alive",
                "age": "28",
                detail: false
              }
            }
            ]
          },
          {
            "id": "3",
            "firstPerson": {
              "name": "Ellen br. Hutasoit",
              "image": [obor],
              "status": "alive",
              "age": "70",
              detail: false
            },
            "secondPerson": {
              "name": "M. Sibuea",
              "image": [sibuea],
              "status": "deceased",
              "age": "76",
              action: "action3",
              detail: false

            },
            "children": [{
              "id": "33",

              "firstPerson": {
                "name": "Ellsa br. Sibuea",
                "image": [elsa],
                "status": "alive",
                "age": "30",
                detail: false
              },
              "secondPerson": {
                "name": "Richard Sinabariba",
                "image": [richard],
                "status": "alive",
                "age": "30",
                detail: false
              }
            },
            {
              "id": "33",
              "firstPerson": {
                "name": "Maell Rizky Sibuea",
                "image": [maell],
                "status": "alive",
                "age": "28",
                detail: false
              }
            }
            ]
          },
          {
            "id": "3",

            "firstPerson": {
              "name": "Tumpal hutasoit",
              "image": [tumpal],
              "status": "alive",
              "age": "74",
              action: "action4",
              detail: false

            },
            "secondPerson": {
              "name": "Posmelita br. Sinaga",
              "image": [posmelita],
              "status": "alive",
              "age": "72",
              detail: false
            },
            "children": [{
              "id": "45",
              "firstPerson": {
                "name": "Angel br. Hutasoit",
                "image": "",
                "status": "alive",
                "age": "20",
                detail: false
              }
            },
            {
              "id": "45",

              "firstPerson": {
                "name": "Anggraeni br. Hutasoit",
                "image": "",
                "status": "alive",
                "age": "18",
                detail: false
              }
            },
            {
              "id": "45",
              "firstPerson": {
                "name": "Jou Marito br. Hutasoit",
                "image": "",
                "status": "alive",
                "age": "16 ",
                detail: false
              }
            },
            {
              "id": "45",
              "firstPerson": {
                "name": "Putri br. Hutasoit",
                "image": "",
                "status": "alive",
                "age": "16",
                detail: false
              }
            },
            {
              "id": "45",
              "firstPerson": {
                "name": "Mauro br. Hutasoit",
                "image": "",
                "status": "alive",
                "age": "16",
                detail: false
              }
            },
            ]
          },
          {
            "id": "3",

            "firstPerson": {
              "name": "Ferry Hutasoit",
              "image": "",
              "status": "deceased",
              "age": "56",
              detail: false
            }
          },
          {
            "id": "3",
            "firstPerson": {
              "name": "Nora br. Hutasoit",
              "image": [nora],
              "status": "alive",
              "age": "54",
              detail: false
            },
            "secondPerson": {
              "name": "Carles Samosir",
              "image": [charles],
              "status": "alive",
              "age": "55",
              action: "action6",
              detail: false
            },
            "children": [{
              "id": "64",

              "firstPerson": {
                "name": "Vania Miranda Br. Samosir",
                "image": [miranda],
                "status": "alive",
                "age": "25",
                detail: false
              }
            },
            {
              "id": "64",
              "firstPerson": {
                "name": "Andrew Oethara Rungguan Samosir",
                "image": [andrew],
                "status": "alive",
                "age": "23",
                detail: false

              }
            },
            {
              "id": "64",
              "firstPerson": {
                "name": "Geofry Noach Samosir",
                "image": [toti],
                "status": "alive",
                "age": "20",
                detail: false

              }
            },
            {
              "id": "64",
              "firstPerson": {
                "name": "Deang Tio Nicole br. Samosir",
                "image": [nichole],
                "status": "alive",
                "age": "19",
                detail: false

              }

            }

            ]
          },
          {
            "id": "3",
            "firstPerson": {
              "name": "Arnold Israel Hutasoit",
              "image": [arnold],
              "status": "alive",
              "age": "54",
              action: "action7",
              detail: false
            },
            "secondPerson": {
              "name": "E br. Sidabutar",
              "image": [sidabutar],
              "status": "alive",
              "age": "55",
              detail: false
            },
            "children": [{
              "id": "78",

              "firstPerson": {
                "name": "Hanny br. Hutasoit",
                "image": [hanny],
                "status": "alive",
                "age": "25",
                detail: false
              }
            },
            {
              "id": "78",
              "firstPerson": {
                "name": "Ranisa br. Hutasoit",
                "image": [ranisa],
                "status": "alive",
                "age": "23",
                detail: false

              }
            },
            {
              "id": "78",
              "firstPerson": {
                "name": "Julian Hutasoit",
                "image": [julian],
                "status": "alive",
                "age": "20",
                detail: false

              }
            },
            {
              "id": "78",
              "firstPerson": {
                "name": "Ruth br. Hutasoit",
                "image": [ruth],
                "status": "alive",
                "age": "19",
                detail: false

              }
            },
            {
              "id": "78",
              "firstPerson": {
                "name": "Juwita Evelin br. Hutasoit",
                "image": "",
                "status": "alive",
                "age": "19",
                detail: false

              }
            },
            {
              "id": "78",
              "firstPerson": {
                "name": "Yohana Lasmaria br. Hutasoit",
                "image": "",
                "status": "alive",
                "age": "19",
                detail: false

              }
            },
            {
              "id": "78",
              "firstPerson": {
                "name": "Yehuda Marlumba Hutasoit",
                "image": "",
                "status": "alive",
                "age": "19",
                detail: false
              }
            },
            {
              "id": "78",
              "firstPerson": {
                "name": "Jonathan Frizzie Hutasoit",
                "image": [jonathan],
                "status": "alive",
                "age": "19",
                detail: false

              }
            }

            ]
          },
          {
            "id": "3",

            "firstPerson": {
              "name": "Pretty br. Hutasoit",
              "image": [pretty],
              "status": "alive",
              "age": "51",
              detail: false

            }
          }
          ]
        }]
    }],

    user: null,
    articles: null,
    isAuthenticated: localStorage.getItem('token') ? true : false,





  },
  getters: {
    userArticle: (state) => state.articles,
    currentUser: (state) => state.user,
    isAuthenticated: (state) => state.isAuthenticated,


  },
  mutations: {
    setUserData(state, userData) {
      state.articles = userData;
      state.user = userData;
      state.isAuthenticated = localStorage.setItem('token', true);
 // Add this line to clear the authentication status

    },
    clearUserData(state) {
      state.user = null;
      state.isAuthenticated = localStorage.setItem('token', false);

    },

    

  },
  actions: {

    
    
  },
  modules: {
  }
})

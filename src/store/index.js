import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)
const store =new Vuex.Store({
	state:{
		username:[],
		role:[],
		optionsdata:[],
	},
	mutations:{
		add(state,idname){
			state.username.push(idname)
		},
		ad(state,rolename){
			state.role.push(rolename)
		},
		di(state,op){
			state.optionsdata.push(op)
		},
		clear(state){
			state.optionsdata = []
		},
		exit(state){
			state.username=[]
			state.role=[]
		}
	},
	actions:{},
	getters:{},
	
	plugins:[createPersistedState({storage:window.sessionStorage})],
	
	
	
})
export default store
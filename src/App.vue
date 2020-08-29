<template>
  <div id="app">
		<router-view ></router-view>
  </div>
</template>
<script>

export default {
  name: 'App',
	data(){
		return{
		test:[]	
		}
	},
  methods:{
	 async	adad(){
		 this.$store.commit('clear')
		 const res = await this.$http.get(`/user/findAllClass`)
		 for(let i=0;i<res.data.length;i++)
		 {
		 	this.test[i]={value:res.data[i].className,label:res.data[i].className}
			this.$store.commit('di',this.test[i] )
		 }
		}
	},
 created(){
	this.adad()
 }
 }
</script>

<style>
#app {
margin: 0;
padding: 0;
height: 100%;
}
</style>

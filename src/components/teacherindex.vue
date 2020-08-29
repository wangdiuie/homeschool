<template>
	<div>
		
		
		<el-button @click="drawerclick" type="primary" style="position: absolute;top: 60%;left: 45%;">
		  查看我所在的班级
		</el-button>
		<el-carousel :interval="3000" type="card" height="300px" >
		    <el-carousel-item v-for="item in iimg" :key="item.id">
		      <h3 class="medium"><img :src="item.path" style="height: 100%;width: 100%;"></h3>
		    </el-carousel-item>
		  </el-carousel>
		
		

		<el-drawer
		  title="我所在的班级"
			size="30%"
		  :visible.sync="drawer"
		  direction="btt"
		  >
		  <el-tag v-for="(item,index) in classes" :key="index" style="margin-right: 10px;">	{{item.className}}</el-tag>
		</el-drawer>
	</div>
</template>

<script>
	import axios from 'axios'
	export default{
		name:'',
		data(){
			return{
				classes:[],
				iimg:[],
				username:this.$store.state.username[0],
				drawer: false
				
			}
		},
		methods:{
		async	drawerclick(){
				this.drawer=true
				const res = await this.$http.get(`/user/findClassByUser?username=${this.username}`)				
				for(let i = 0;i<res.data.length; i++){
					if(res.data[i] == null){
						res.data.splice(i,1)
					}
				}
				this.classes=res.data
			},	   
				img(){
					axios({
						url:'https://322b074517.eicp.vip/api/allimg'						
					}).then(res=>{
						console.log(res)
						this.iimg=res.data
					})
				}	 
		},
		created(){
			this.img()
		}
	}
	
</script>

<style scoped>
	.el-carousel__item h3 {
	    color: #475669;
	    font-size: 14px;
	    opacity: 0.75;
	    line-height: 200px;
	    margin: 0;
	  }
	  
	  .el-carousel__item:nth-child(2n) {
	    background-color: #99a9bf;
	  }
	  
	  .el-carousel__item:nth-child(2n+1) {
	    background-color: #d3dce6;
	  }
</style>
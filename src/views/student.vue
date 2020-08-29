<template>
	<div id="student">
		<el-menu  class="el-menu-demo" mode="horizontal"  :router="true"
		 background-color="#409EFF" text-color="white" active-text-color="white">
		 <el-menu-item index="/student/studentindex" >首页</el-menu-item>
		 <el-menu-item index="/student/saddclass" >加入班级</el-menu-item>
		 <el-menu-item index="/student/lookteacher" >老师信息</el-menu-item>
		 <el-menu-item index="/student/lookclass" >查看课表</el-menu-item>
		  <el-menu-item index="/student/smessage" >消息中心</el-menu-item>
			<img class="mine" src="../assets/img/我 的.png" @click="ifmine">
	    <img class="exit" src="../assets/img/退出.png" @click="ifexit">	
		</el-menu>
	<el-card class="box-card">
		
		<el-dialog title="编辑我的信息" :visible.sync="mine">
			
				<el-form :model="my">
				  <el-form-item label="家长姓名" label-width="80px">
				    <el-input v-model="my.parentName" autocomplete="off"  ></el-input>
				  </el-form-item>
				  		 <el-form-item label="孩子姓名" label-width="80px">
				  		   <el-input v-model="my.childName"  autocomplete="off" ></el-input>
				  		 </el-form-item>
				  		 <el-form-item label="我的电话" label-width="80px">
				  		   <el-input  v-model="my.iphone" autocomplete="off" ></el-input>								 
				  		 </el-form-item>
				</el-form>
				<div slot="footer" class="dialog-footer">
				<el-button  @click="mine = false">取消</el-button>
			  <el-button type="primary" @click="mya">确 定</el-button>
			</div>
			</el-dialog>
		
		<el-dialog title="是否退出登录？" :visible.sync="exit">
			<div slot="footer" class="dialog-footer">
				<el-button  @click="exit = false">取消</el-button>
			  <el-button type="primary" @click="exita">确 定</el-button>
			</div>
			</el-dialog>
			
	  <keep-alive><router-view></router-view></keep-alive>
	</el-card>
	</div>
</template>

<script>
	export default{
		name:'',
		data(){
			return{
				exit:false,
				mine:false,
				my:{
					parentName:'',
					childName:'',
					iphone:''
				}
			}
		},
		methods:{
			//编辑我的信息
		 async	mya(){
				const res = await this.$http.get(`/parent/fillMsg?username=${this.$store.state.username[0]}
				&parentName=${this.my.parentName}&childName=${this.my.childName}&iphone=${this.my.iphone}`)
				this.mine=false
				console.log(res)
				if(res.data=='success')
				this.$message.success('修改成功')
			},
			//查看我的信息
			async	ifmine(){
					this.mine=true
					const res = await this.$http.get
					(`/user/findParentMsg?username=${this.$store.state.username[0]}`)
					console.log(res)
					this.my.parentName=res.data.parentName
					this.my.childName=res.data.childName
					this.my.iphone=res.data.iphone
				},
	   ifexit(){
	   	this.exit=true
	   },
		 //退出登录
	   exita(){
	   	this.exit=false
	   	this.$router.replace('/index').catch(err=>{})
	   	this.$store.commit('exit')
	   }
		}
	}
	
</script>

<style scoped>
	#student{
		height: 100%;
		background:url(../assets/img/333.png) ;
	}
	.box-card {
	    width: 95%;
	    height:85%;
	    	margin-top:28px;
	    	margin-left:30px ;
				background-color: rgba(255,255,255,0.7);
	  }
		.exit{
			position: absolute;
			right: 1%;
			top: 27%;
			width: 25px;
		}
		.mine{
			position: absolute;
			right: 5%;
			top: 27%;
			width: 25px;
		}
</style>

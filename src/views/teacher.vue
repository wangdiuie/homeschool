<template>
	<div id="teacher">
	<el-menu  class="el-menu-demo" mode="horizontal"  :router="true"
	 background-color="#409EFF" text-color="white" active-text-color="white">
	 <el-menu-item index="/teacher/teacherindex" >首页</el-menu-item>
	 <el-menu-item index="/teacher/taddclass" >加入班级</el-menu-item>
	  <el-menu-item  index="/teacher/lookparent" >家长信息</el-menu-item>
	  <el-submenu index="#">
	    <template slot="title">我的工作台</template>
	    <el-menu-item index="/teacher/sendphoto">上传照片</el-menu-item>
	    <el-menu-item index="/teacher/sendnotify">发布通知</el-menu-item>
	  </el-submenu>
		<el-menu-item index="/teacher/editclass" >编辑课表</el-menu-item>
	  <el-menu-item index="/teacher/message" >消息中心</el-menu-item>
		<img class="mine" src="../assets/img/我 的.png" @click="ifmine">
		<img class="exit" src="../assets/img/退出.png" @click="ifexit">	
	</el-menu>
<el-card class="box-card">
	<el-dialog title="编辑我的信息" :visible.sync="mine">		
			<el-form :model="my">
			  <el-form-item label="老师姓名" label-width="80px">
			    <el-input v-model="my.teacherName" autocomplete="off"  ></el-input>
			  </el-form-item>
			  		 <el-form-item label="我的简介" label-width="80px">
			  		   <el-input v-model="my.intro"  autocomplete="off" ></el-input>
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
				teacherName:'',
				intro:'',
				iphone:''
			}
			}
		},
		created() {

		},
		methods:{
			async	mya(){
							const res = await this.$http.get(`/teacher/fillMsg?username=${this.$store.state.username[0]}
							&teacherName=${this.my.teacherName}&intro=${this.my.intro}&iphone=${this.my.iphone}`)
							this.mine=false
							console.log(res)
							if(res.data=='success')
							this.$message.success('修改成功')
						},
		async	ifmine(){
				this.mine=true
				const res = await this.$http.get
				(`/user/findTeacherMsg?username=${this.$store.state.username[0]}`)
				console.log(res)
				this.my.teacherName=res.data.teacherName
				this.my.intro=res.data.intro
				this.my.iphone=res.data.iphone
			},
      ifexit(){
				this.exit=true
			},
			exita(){
				this.exit=false
				this.$router.replace('/index').catch(err=>{})
				this.$store.commit('exit')
			}
		}
	}
	
</script>

<style scoped>
	#teacher{
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

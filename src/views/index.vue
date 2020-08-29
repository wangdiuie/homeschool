<template>
	<div class="box">
	<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
		<div class="container">
		<div class="top" @click="changelogin" :style="activestyle">登录</div>
		<div class="top" @click="changeregister" :style="activestyle2">注册</div>
		</div>
		<div v-if="isshow">
	  <el-form-item  prop="username" class = "input">
	    <el-input  prefix-icon="el-icon-user" placeholder="请输入账号" type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
	  </el-form-item>
	  <el-form-item  prop="pass" class = "input" >
	    <el-input prefix-icon="el-icon-lock" placeholder="请输入密码" type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
	  </el-form-item>
		<div class="btn">
	  <el-form-item >
	    <el-button type="primary" @click="login" style="width: 85%;margin-left: -7%;">登录</el-button>
	  </el-form-item>
		</div>
		</div>
		<div v-else >
			<el-form-item label="" prop="username" class = "input">
			<el-input prefix-icon="el-icon-user" placeholder="请输入账号" type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
			</el-form-item>
			<el-form-item label="" prop="pass" class = "input">
			  <el-input prefix-icon="el-icon-lock" placeholder="请输入密码" type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
			</el-form-item>
			<div class="change">
				<el-radio v-model="radio" label="0" style="margin-right: 100px;" >老师</el-radio>
				  <el-radio v-model="radio" label="1">家长</el-radio>
			</div>
			<el-form-item  class="btn">
			  <el-button type="primary" @click="register" style="width: 85%;margin-left: -7%;">注册</el-button>
			</el-form-item>
			
		</div>
	</el-form>
	</div>
</template>
<script>
	export default{
		name:'',
		data() {
		     
		      var validatePass = (rule, value, callback) => {
		        if (value === '') {
		          callback(new Error('请输入密码'));
		        } 
		          callback();
		        
		      };
		      var validateAccount = (rule, value, callback) => {
		        if (value === '') {
		          callback(new Error('请输入账号'));
		        } 
		          callback();		        
		      };
		      return {
		        ruleForm: {
							username:'',
		          pass:'',
		          role:'',
							
		        },
		        rules: {
		          pass: [
		            { validator: validatePass, trigger: 'blur' }
		          ],
		          account: [
		            { validator: validateAccount, trigger: 'blur' }
		          ]
		        },
						isshow:true,
						active:true,
						radio: '1',
						
		      };
		    },
		methods:{
			//登录
		async	login(){
				 const res = await this.$http.get(`/user/login?username=${this.ruleForm.username}&password=${this.ruleForm.pass}`)
					/* this.$router.push({name:'teacher',params:{id:123}}) */
				 if(res.data=="success")	{					
				 	const ress = await this.$http.get(`/user/findUser?username=${this.ruleForm.username}`)
				 	console.log(ress)
				 	if(ress.data.role=="0")
				 	{  
						this.$store.commit('add',ress.data.username)
						this.$store.commit('ad',ress.data.role)
						console.log(this.$store.state.username[0])
						{this.$router.replace('/teacher').catch(err=>{}) }
				 		/* this.$router.push({name:'teacher/teacherindex',params:{id:this.ress.data.id}}) */
				 	 }
				 	 else 
				{
					this.$store.commit('add',ress.data.username)
					this.$store.commit('ad',ress.data.role)		
					this.$router.replace('/student').catch(err=>{}) }
				 }
					else{
						this.$message.warning('登录失败')
					}
						},
						//注册
		async	register(){
					 const res = await this.$http.get(`/user/register?username=${this.ruleForm.username}&password=${this.ruleForm.pass}&role=${this.radio}`) 
					console.log(this.ruleForm.username)
					console.log(this.ruleForm.pass)
					console.log(this.radio)
					console.log(res)
				 	if(res.data=="success")	{
					this.$message.success('注册成功')
								} 	
				 	else if(res.data=="error")	{
					this.$message.warning('注册失败')
								}						
										},
	   changelogin(){
			 this.isshow=true
			 this.active=true
		 },
		 changeregister(){
			 this.isshow=false	
			 this.active=false
		 }
		},
		computed:{
			activestyle(){
				return this.active?{color:'#B26B33'}:{color:'black'}
			},
			activestyle2(){
				return this.active?{color:'black'}:{color:'#B26B33'}
			}
		}
	}
	
</script>

<style scoped>
	.box{
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		background: url(../assets/img/222.png);
		background-size: 100% 100%;
	}
	.demo-ruleForm{
		height: 400px;
		width: 450px;
		background-color: rgba(255,255,255,0.6);
		border-radius: 10px;
	}	
	.container{
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 25px;
	}
	.change{

		text-align: center;
	}
	.top{		
		font-size: 30px;
		flex: 1;
		text-align: center;
	}
	.input{
		margin-top: 60px;
		margin-left: -25px;
		width: 400px;
	}
	.btn{
		margin-top: 5%;
    width: 100%;
	}
</style>

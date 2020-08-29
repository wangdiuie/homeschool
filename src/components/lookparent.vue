<template>
	<div  >			
		<el-cascader class="input-with-select" :options="this.$store.state.optionsdata" clearable placeholder="请选择班级" v-model="value" >		
		</el-cascader>
		<el-button slot="append" icon="el-icon-search" @click="searchadmin"></el-button>
		 <el-table
		    :data="tableData"
		    border
				height="550"
		    style="width: 90%;margin: auto;opacity: 0.9;">
		    <el-table-column
		      prop="className"
		      label="班级"
		      width="180">
		    </el-table-column>
				<el-table-column
				  prop="id"
				  label="编号"
				  width="180">
				</el-table-column>
		    <el-table-column
		      prop="username"
		      label="用户账号"
		      width="180">
		    </el-table-column>
		    <el-table-column
		      prop="role"
		      label="角色">
		    </el-table-column>
				<el-table-column
				      fixed="right"
				      label="操作"
				      width="100">
				      <template slot-scope="scope">
								<i class="el-icon-view"></i>
				        <el-button type="text" size="small" @click="showEditAdmin(scope.row)">查看</el-button>
				      </template>
				    </el-table-column>
		  </el-table>	
			<!-- 查看用户的对话框 -->
			<el-dialog title="家长信息" :visible.sync="dialogFormVisible">
			  <el-form :model="qq">
			    <el-form-item label="家长姓名" label-width="80px">
			      <el-input v-model="qq.parentName" autocomplete="off" disabled ></el-input>
			    </el-form-item>
			    		 <el-form-item label="学生姓名" label-width="80px">
			    		   <el-input v-model="qq.childName"  autocomplete="off" disabled></el-input>
			    		 </el-form-item>
			    		 <el-form-item label="家长电话" label-width="80px">
			    		   <el-input  v-model="qq.iphone" autocomplete="off" disabled></el-input>
								 
			    		 </el-form-item>
			  </el-form>
			  <div slot="footer" class="dialog-footer">
			    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
			  </div>
			</el-dialog>
	</div>
</template>

<script>
	export default{
		name:'',	
		data(){
			return{				
				tableData: [],
				search:'',
				value:'',
				dialogFormVisible: false,
				qq:{
				   parentName:'',
					 childName:'',
					 iphone:''
				},
			}
		},
	
		methods:{
	   async   searchadmin(){
	   		const res = await this.$http.get
	   		(`/teacher/findParentAll?className=${this.value}`)
	   		console.log(res)
	   		 if(res.status == 200&&res.data.length > 0){
	   			this.tableData = res.data
	   		this.$message.success('搜索成功')
	   		}
	   else {
	   	this.$message.warning('搜索失败')
	   }	 
	   		
	   	},
	async	showEditAdmin(a){			
			if(a.role==1){
			const res = await this.$http.get
			(`/user/findParentMsg?username=${a.username}`)
			console.log(res)
			if(res.status == 200&&res.data!="error")	{
			this.dialogFormVisible=true
					this.qq=res.data
					}	else{			
			    this.$message.warning('该用户未填写个人信息！')
					this.dialogFormVisible=false
				}
			}
			else if(a.role==0){
			const res = await this.$http.get
			(`/user/findTeacherMsg?username=${a.username}`)
			if(res.status == 200&&res.data!="error")	{
			this.dialogFormVisible=true
					this.qq=res.data
					}	else{			
			    this.$message.warning('该用户未填写个人信息！')
					this.dialogFormVisible=false
				}
			}
			
			
		},	 
		},
	created() {
	 
	}
	}
	
</script>

<style scoped>
	.input-with-select{
		margin-left: 5%;
		width: 200px;
	}
</style>

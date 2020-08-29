<template>
	<div>
		<el-table
		   :data="tableData"
		   border
						height="550"
		   style="width: 90%;margin: auto;opacity: 0.9;">
		   <el-table-column
		     prop="className"
		     label="班级名称"
		     width="180">
		   </el-table-column>
		   <el-table-column
		     prop="classId"
		     label="班级编号"
		     width="180">
		   </el-table-column>
		   <el-table-column
		     prop="telephone"
		     label="老师人数">
		   </el-table-column>
			 
			 <el-table-column
			   fixed="right"
			   label="操作"
			   width="300">
			   <template slot-scope="scope">
			     <el-button type="primary" round @click="joinclass(scope.row)">加入班级</el-button>
								 <el-button type="danger" round @click="exitclass(scope.row)">退出班级</el-button>
				 </template>
			 </el-table-column>
		 </el-table>
	</div>
	
</template>

<script>
	export default{
		name:'',
		data(){
			return{
				tableData:[],
				username:this.$store.state.username[0],
				role:this.$store.state.role[0],
				className:''
			}
		},
		methods:{
	    async findAllGrade(){
	    	const res = await this.$http.get(`/user/findAllClass`)
	    	console.log(res)
				this.tableData=res.data
		},
		  async	joinclass(a){
				 this.className = a.className
				console.log(this.tableData)
				console.log(this.username)
			  	console.log(this.role)
				const res = await this.$http.get(`/user/joinClass?username=${this.username}&role=${this.role}&className=${this.className}`)
			 console.log(res)
			 if(res.data=="success")
				{this.$message.success('加入班级成功')}
				else if (res.data=="error")
				 {this.$message.warning('已加入过班级!')}
			},
			async exitclass(b){
				this.tableData.className = b.className
				const res = await this.$http.get(`/user/quitClass?username=${this.username}&className=${this.tableData.className}`)
				if(res.data=="success")
				{this.$message.success('退出班级成功')}
			}
		},
		created(){
			this.findAllGrade()
			}
	}
	
</script>

<style scoped>
</style>
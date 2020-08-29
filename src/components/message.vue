<template>
	<div>
		<el-cascader class="input-with-select" :options="this.$store.state.optionsdata" clearable placeholder="请选择班级" v-model="value" >
		</el-cascader>
		<el-button slot="append" icon="el-icon-search" @click="searchmessage"></el-button>
		<el-table
		   :data="input"
		   border
						height="550"
		   style="width: 90%;margin: auto;opacity: 0.9;">
						<el-table-column
						  prop="id"
						  label="编号"
						  width="120">
						</el-table-column>
		   <el-table-column
		     prop="className"
		     label="班级名称"
		     width="180">
		   </el-table-column>
			 <el-table-column
			   prop="noticeTime"
			   label="发布时间"
			 				 width="180">
			 </el-table-column>
			 <el-table-column
			   prop="content"
			   label="通知"
			   >
			 </el-table-column>								 
		 <el-table-column
		   fixed="right"
		   label="操作"
		   width="150">
			 <template slot-scope="scope">             
				 <el-button type="danger" round @click="deleteNotice(scope.row)">删除公告</el-button>
			 </template>
			 </el-table-column>
			 </el-table>
			 
			 <el-dialog
			   title="提示"
			   :visible.sync="dialogVisible"
			   width="30%">
			   <span>您确定要删除这段公告吗？</span>
			   <span slot="footer" class="dialog-footer">
			     <el-button @click="dialogVisible = false">取 消</el-button>
			     <el-button type="primary" @click="confirm">确 定</el-button>
			   </span>
			 </el-dialog>		 
			 
	</div>	
</template>

<script>
	export default{
		name:'',
		data(){
			return{
				input:[],
				value:'',
				id:'',
				className:'',
				dialogVisible:false
			}
		},
		methods:{
	async searchmessage(){
					 const res = await this.$http.get
					 (`/user/findAllNotice?className=${this.value}`)
					 this.input=res.data
					 console.log(this.input)
					 if(res.data.length>0)
					 this.$message.success('搜索成功')
					 else
					 this.$message.warning('搜索失败')
	        },
	        deleteNotice(a){
		        this.dialogVisible=true
		        this.id=a.id
						this.className=a.className
	        },
					//删除公告
		async confirm(){
			this.dialogVisible=false
			const res = await this.$http.get
			(`/teacher/deleteNotice?id=${this.id}&className=${this.className}`)
			if(res.data=='success'){
			this.$message.success('删除成功')
			const res = await this.$http.get
			(`/user/findAllNotice?className=${this.value}`)
			this.input=res.data}
		}			
						
		},
		created(){
			
		}
	}
	
</script>

<style scoped>
	.input-with-select{
		margin-left: 5%;
		width: 200px;
	}
</style>
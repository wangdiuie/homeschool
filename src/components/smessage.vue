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
		 </el-table>	
	</div>
</template>

<script>
	export default{
		name:'',
		data(){
			return{
				input:[],
				value:''
			}
		},
		methods:{
			//搜索通知
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
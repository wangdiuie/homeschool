<template>
	<div>
		<el-cascader class="input-with-select" :options="this.$store.state.optionsdata" clearable placeholder="请选择班级" v-model="value" >
		</el-cascader>
		<div>
		<el-input
		  type="textarea"
		  :rows="12"
		  placeholder="请输入内容"
		  v-model="textarea"
			resize="none"
			class="textarea">
		</el-input>
		</div>
		<el-button type="primary" class="btn" @click="fillNotice">发布</el-button>
	</div>
</template>

<script>
	export default{
		name:'',
		data(){
			return{
				textarea:'',
				value:''
			}
		},
		methods:{
			//发布通知
	   async fillNotice(){
			 const res = await this.$http.get
			 (`/teacher/fillNotice?className=${this.value}&content=${this.textarea}`)
			 if(res.data=='success'){
			 this.$message.success('发布成功')}
		 }
		}
	}
	
</script>

<style scoped>
	.textarea{
		width:800px;
		margin-left: 20%;
		
	}
	.btn{
		margin-left: 45%;
		margin-top: 5%;
	}
	.input-with-select{
		width: 200px;
	}
</style>

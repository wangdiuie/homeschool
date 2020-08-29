<template>
	<div>
		<el-upload
		  action="http://30r97104b2.qicp.vip/user/upload"
		  list-type="picture-card"
			ref = "upload"
			:auto-upload = "false"
		  :on-preview="handlePictureCardPreview"
		  :on-remove="handleRemove">
		  <i class="el-icon-plus"></i>
		</el-upload>
		<el-dialog :visible.sync="dialogVisible">
		  <img width="100%" :src="dialogImageUrl" alt="">
		</el-dialog>
		<div>
		<el-button @click="upload" type="primary" class="upload">上传<i class="el-icon-upload el-icon--right"></i></el-button>
		</div>	
	</div>
</template>

<script>
	export default{
		name:'',
		data(){
			return{
				 dialogImageUrl: '',
				        dialogVisible: false
				      }
			
		},
		methods:{
			//上传图片
	  handleRemove(file, fileList) {
	          console.log(file, fileList);
	        },
	        handlePictureCardPreview(file) {
	          this.dialogImageUrl = file.url;
	          this.dialogVisible = true;
	        },
		upload(){
			this.$refs.upload.submit()
		}			
		}
	}
	
</script>

<style scoped>
	.upload{
		margin-top: 10px;	
	}
</style>

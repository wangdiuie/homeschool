<template>
	<div>
		<el-cascader class="input-with-select" :options="this.$store.state.optionsdata" clearable placeholder="请选择班级" v-model="value" >
		</el-cascader>
		<el-button slot="append" icon="el-icon-search" @click="searchclass"></el-button>
	
	 <div style="position: absolute;top:22%;left: 20%;width:80%;" v-if="isShow">
		  <table-item>
			     <span slot = "week" style="color: #989CA3;"><b style="text-align: center;">周一</b></span> 
					  <span :slot = "item.course" v-for="(item,index) in classtable[0]" >				    
						{{item.grade}}
						<el-button type="primary" icon="el-icon-view" circle size="mini"  plain v-if="item.grade"
						@click="editclass(item.week,item.course,item.grade,item.teacher,item.className)"></el-button>
						</span>
		  </table-item>
			<table-item>
						<span slot = "week"  style="color: #989CA3;"><b style="text-align: center;">周二</b></span>
						  <span :slot = "item.course" v-for="(item,index) in classtable[1]">
							{{item.grade}}
							<el-button type="primary" icon="el-icon-view" circle size="mini"  plain v-if="item.grade"
							@click="editclass(item.week,item.course,item.grade,item.teacher,item.className)"></el-button>
							</span>
			</table-item>
			 <table-item>
			 			<span slot = "week">周三</span> 
						 <span :slot = "item.course" v-for="(item,index) in classtable[2]">
						 {{item.grade}}
						 <el-button type="primary" icon="el-icon-view" circle size="mini"  plain v-if="item.grade"
						 @click="editclass(item.week,item.course,item.grade,item.teacher,item.className)"></el-button>
						 </span>
			 </table-item>
			 <table-item>
			 			<span slot = "week">周四</span> 
						 <span :slot = "item.course" v-for="(item,index) in classtable[3]">
						 {{item.grade}}
						 <el-button type="primary" icon="el-icon-view" circle size="mini"  plain v-if="item.grade"
						 @click="editclass(item.week,item.course,item.grade,item.teacher,item.className)"></el-button>
             </span>
			 </table-item>
		   <table-item>
		 			<span slot = "week">周五</span>
  				<span :slot = "item.course" v-for="(item,index) in classtable[4]">
					 {{item.grade}}
					 <el-button type="primary" icon="el-icon-view" circle size="mini"  plain v-if="item.grade"
					 @click="editclass(item.week,item.course,item.grade,item.teacher,item.className)"></el-button>
						</span>
		  </table-item>
		
	</div>
	
		<el-dialog title="查看课程" :visible.sync="dialogFormVisible">
					  <el-form :model="edit">
							<el-form-item label="班级名" label-width="80px">
							  <el-input v-model="edit.className" autocomplete="off" disabled ></el-input>
							</el-form-item>
					    <el-form-item label="课程名" label-width="80px">
					      <el-input v-model="edit.grade" autocomplete="off"  disabled></el-input>
					    </el-form-item>
					    		 <el-form-item label="任课老师" label-width="80px">
					    		   <el-input v-model="edit.teacher"  autocomplete="off" disabled ></el-input>
					    		 </el-form-item>
					    		 
					  </el-form>
					  <div slot="footer" class="dialog-footer">
					    <el-button type="primary" @click="dialogFormVisible=false">确 定</el-button>
					  </div>
					</el-dialog>
	
				
	</div>	
</template>

<script>
	
	import TableItem from './table.vue'
	export default{
		name:'',
		components:{
		 TableItem
		},
		data(){
			return{
				value:'',
				dialogFormVisible:false,
				classtable:[],
				isShow:false,
				mon:[],
				tue:[],
				wed:[],
				thu:[],
				fri:[],
				edit:{
					className:'',
					teacher:"",
					week:'',
					course:'',
					grade:''
				},
			}
		},
		methods:{
	     async	searchclass(){
				  this.classtable = []
					this.mon = []
					this.tue = []
					this.wed = []
					this.thu = []
					this.fri = []
	     		const res = await this.$http.get(`/user/getAllClassTimetable?className=${this.value}`)
	     		console.log(res)
					
						
					for(let i=0;i<res.data.length;i++){				
						if(res.data[i].week==1){
							
							this.mon.push({grade:res.data[i].grade,course:res.data[i].course,className:res.data[i].className,
							teacher:res.data[i].teacher,week:res.data[i].week})
							
						}
			      else if(res.data[i].week==2){
							
							this.tue.push({grade:res.data[i].grade,course:res.data[i].course,className:res.data[i].className,
							teacher:res.data[i].teacher,week:res.data[i].week})
							}
						else	if(res.data[i].week==3){
							
							this.wed.push({grade:res.data[i].grade,course:res.data[i].course,className:res.data[i].className,
							teacher:res.data[i].teacher,week:res.data[i].week})
							}
						else	if(res.data[i].week==4){
					
							this.thu.push({grade:res.data[i].grade,course:res.data[i].course,className:res.data[i].className,
							teacher:res.data[i].teacher,week:res.data[i].week})
							}
						else	if(res.data[i].week==5){
							
						this.fri.push({grade:res.data[i].grade,course:res.data[i].course,className:res.data[i].className,
							teacher:res.data[i].teacher,week:res.data[i].week})		
							
					}	
									
					}
					this.classtable.splice(0,1,this.mon)
					this.classtable.splice(1,1,this.tue)
					this.classtable.splice(2,1,this.wed)
					this.classtable.splice(3,1,this.thu)
					this.classtable.splice(4,1,this.fri)
									
					console.log(this.classtable)
					
					this.isShow = true
		},
      editclass(week,course,grade,teacher,classname){
			this.dialogFormVisible = true
			this.edit.grade = grade
			this.edit.teacher = teacher
			this.edit.week = week
			this.edit.course = course
			this.edit.className = classname
		},

	}
}
</script>

<style scoped>
	.input-with-select{
		margin-left: 70px;
		width: 200px;
	}
</style>
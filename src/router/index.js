import Vue from 'vue'
import Router from 'vue-router'
const index = ()=>import('../views/index.vue')
const teacher = ()=>import('../views/teacher.vue')
const student = ()=>import('../views/student.vue')
const teacherindex = ()=>import('../components/teacherindex.vue')
const taddclass = ()=>import('../components/taddclass.vue')
const lookparent = ()=>import('../components/lookparent.vue')
const sendphoto = ()=>import('../components/sendphoto.vue')
const sendnotify = ()=>import('../components/sendnotify.vue')
const message = ()=>import('../components/message.vue')
const editclass = ()=>import('../components/editclass.vue')

const studentindex = ()=>import('../components/studentindex.vue')
const saddclass = ()=>import('../components/saddclass.vue')
const lookteacher=()=>import('../components/lookteacher.vue')
const lookclass = ()=>import('../components/lookclass.vue')
const smessage = ()=>import('../components/smessage.vue')
Vue.use(Router)
const routes=[
   {
      path: '',
      redirect:'/index'
    },
	{
		path:'/index',
		component:index
	},
	{ name:'teacher',
		path:'/teacher',
		component:teacher,
		children:[
			{
			   path: '',
			   redirect:'teacherindex'
			 },
			 {
			 	name:'teacherindex',
			 	path:'teacherindex',
			 	component:teacherindex
			 },
			 {
			 	name:'taddclass',
			 	path:'taddclass',
			 	component:taddclass
			 },
			{
				name:'lookparent',
				path:'lookparent',
				component:lookparent
			},
			{
				path:'sendphoto',
				component:sendphoto
			},
			{
				path:'sendnotify',
				component:sendnotify
			},
			{
				path:'message',
				component:message
			},
			{
				path:'editclass',
				component:editclass
			}
		]
	},
	{
		path:'/student',
		component:student,
		children:[
			{		 
			   path: '',
			   redirect:'studentindex'
			 },
			 {
			 	name:'studentindex',
			 	path:'studentindex',
			 	component:studentindex
			 },
			 {
			 	name:'lookclass',
			 	path:'lookclass',
			 	component:lookclass
			 },
			 {
			 	name:'lookteacher',
			 	path:'lookteacher',
			 	component:lookteacher
			 },
			 {
			 	name:'saddclass',
			 	path:'saddclass',
			 	component:saddclass
			 },
			 {
			 	name:'smessage',
			 	path:'smessage',
			 	component:smessage
			 },
		]
	},


	]
const router=new Router({
	routes,
  mode:'history',
})

export default  router

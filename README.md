#菜单调整使用router-link
<router-link :to="menu.url">{{menu.title}}</router-link>

#大图抓取小图使用background-position
background: url("../assets/img/glyphicons-halflings.png");
background-repeat:no-repeat;
background-position:-230px -140px;

#引入element组件
1.安装依赖 npm i element-ui -S
2.main.js引入
	import ElementUI from 'element-ui'
	import 'element-ui/lib/theme-chalk/index.css'
	Vue.use(ElementUI)

#修改element组件样式
1.第一种：看看组件是否有自定义，使用自定义组件
2.第二种:通过查看元素样式，在单个组件种多加一对style，然后复制元素样式加上!important
<style>
.el-collapse-item__content {
    padding-bottom: 0px !important;
}
</style>

#js中引用img路径会被webpack重新解析，需要使用require
<script>
export default{
	name:'about',
	data(){
		return {
            listData:[" Lorem ipsum enimdolor sit amet",
                        " Explicabo deleniti neque aliquid",
                        " Consectetur adipisicing elit",
                        " Lorem ipsum dolor sit amet",
                        " Quo issimos molest quibusdam temporibus"
            ],
            activeName: "",
            members:[
            require("../assets/img/team1.jpg"),
            require("../assets/img/team2.jpg"),
            require("../assets/img/team3.jpg"),
            require("../assets/img/team4.jpg")
            ]
		}
	}
}	
</script>


<template>
	<div class="app-head">
		<div class="app-head-inner">
			<img src="../assets/logo.png">
			<div class="head-nav">
				<ul class="nav-list">
					<li v-for="menu in menus">
						<a target="_blank" :href="menu.url">{{menu.title}}</a>
					</li>
				</ul>	
			</div>
		</div>
	</div>
</template>
<script>
export default{
	name:'header',
	data(){
		return{
			menus:[
			{title:"HOME",url:'www.baidu.com'},
			{title:"ABOUT US",url:"www.baidu.com"},
			{title:"COURSES",url:"www.baidu.com"},
			{title:"PORTFOLIO",url:"www.baidu.com"},
			{title:"PRICING",url:"www.baidu.com"},
			{title:"CONTACT",url:"www.baidu.com"}
			]
		}
	}
}	
</script>
<style scoped>
.app-head{
	background-color: #fff;
	color:#656565;
	height:103px;
	line-height:103px;
	width:100%;
}
.app-head-inner{
	width:1130px;
	height:67px;
	margin:0 auto;
	padding-top:15px;
}
.app-head-inner img {
  float:left;
  margin-top: 15px;
}
.head-nav {
  float: right;
}
.head-nav ul {
  overflow: hidden;
}
.head-nav li {
  cursor: pointer;
  float: left;
  border: none;
  margin: 0;
  padding-bottom: 12px;
  padding-top: 12px;
  position: relative;
  display: block;

}
.head-nav li a{
	text-shadow: none;
    font-size: 12px;
    text-transform: uppercase;
    margin-left: 2px;
    line-height: 30px;
    position: relative;
    display: block;
    padding: 10px 15px;
    font-weight:700;
}
</style>
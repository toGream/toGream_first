<template>
	<div class="app-foot">
		<div class="container">
			<div class="list-row">
				<div v-for="item in widget" class="col-lg-3">
					<h5 class="widgetheading">{{item.title}}</h5>
					<span>{{item.address}}</span>
					<p>{{item.phone}}</p>
				</div>
			</div>
		</div>
		<div class="sub-footer">
			<p class="copyright">Copyright © 2018.Company name All rights reserved.More Templates
				<a target="_blank" href="www.baidu.com" title="Program is art">Program is art</a>
			</p>
		</div>
	</div>
</template>
<script>
export default{
	name:'footer',
	data(){
		return{
			widget:[
				{title:'Our Contact',address:'Abovecompany Inc',phone:'(123) 456-789-1255'},
				{title:'Quick Links',address:'Lasest Event',phone:'(123) 456-789-1255'},
				{title:'Latest posts',address:'Lorem ipsum dolor sit amet,consectetur adipiscing elit',phone:'(123) 456-789-1255'},
				{title:'Recent News',address:'Lorem ipsum dolor sit amet,consectetur adipiscing elit',phone:'(123) 456-789-1255'}
			]
		}
	}
}	
</script>
<style scoped>
.app-foot{
	padding: 50px 0 0 0;
    color: #f8f8f8;
    background: #14A085;
    display: block;
    height:303px;
    width:0 auto;
}
.container{
	padding: 0 20px 0 20px;
    position: relative;
    width: 1170px;
    margin: 0 auto;
}
.sub-footer{
	text-shadow: none;
    color: #f5f5f5;
    padding: 0;
    padding-top: 30px;
    background: #14A085;
    clear: both;
    margin:0 auto;
}
.list-row{
	margin-bottom: 30px;
}
.col-lg-3{
	width: 25%;
	float: left;
	position: relative;
    min-height: 1px;
}
.widgetheading{
	position: relative;
	width: 100%;
    padding: 0;
    color: #fff;
    -webkit-margin-before: 1.67em;
    -webkit-margin-after: 1.67em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;

}
.col-lg-3 span{
	line-height: 1.6em;
    color: #FFFFFF;
    margin-bottom: 20px;
    font-style: normal;
    display: block;
}
.col-lg-3 p{
	margin: 0 0 10px;
	display: block;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;

}
.copyright{
 	text-align: center;
    font-size: 12px;
}
</style>
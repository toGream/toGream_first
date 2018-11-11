<template>
	<div class="index-wrap">
		<div class="select-one">
			<swiper :options="swiperOption">
			    	<swiper-slide>
			    		<a targer="_blank" href="http://www.wwtliu.com/blog">
			    			<img class="swiperimg" src="@/assets/img/slides/1.jpg" style='width:100%'>
			    		</a>
			    		<div class="flex-caption">
			    			<div class="item_introtext">
			    				<span>Online Education</span>
			    				<p>The best educational template</p>
			    			</div>
			    		</div>
			    	</swiper-slide>
			    	<swiper-slide>
			    		<a targer="_blank" href="http://www.wwtliu.com/blog">
			    			<img class="swiperimg" src="@/assets/img/slides/2.jpg" style='width:100%'>
			    		</a>
			    		<div class="flex-caption">
			    			<div class="item_introtext">
			    				<span>Online Education</span>
			    				<p>The best educational template</p>
			    			</div>
			    		</div>
			    	</swiper-slide>
			    	<swiper-slide>
			    		<a targer="_blank" href="http://www.wwtliu.com/blog">
			    			<img class="swiperimg" src="@/assets/img/slides/3.jpg" style='width:100%'>
			    		</a>
			    		<div class="flex-caption">
			    			<div class="item_introtext">
			    				<span>Online Education</span>
			    				<p>The best educational template</p>
			    			</div>
			    		</div>
			    	</swiper-slide>
			    <div class="swiper-pagination"  slot="pagination"></div>
			    <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
			    <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
			  </swiper>
		</div>
		<div class="select-two">
			<div class="container">
				<div class="list-row">
					<div class="col-lg-12">
						<div class="alighcenter">
							<h1 class="alighcenter">Our Featured Courses</h1>
							<span class="clear spacer_responsive_hide_mobile">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt eius magni provident, doloribus omnis minus temporibus perferendis nesciunt quam repellendus nulla nemo ipsum odit corrupti consequuntur possimus, vero mollitia velit ad consectetur. Alias, laborum excepturi nihil autem nemo numquam, ipsa architecto non, magni consequuntur quam.
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="select-three">
			<div class="container">
				<div class="list-row">
					<div class="col-lg-12">
						<div class="alighcenter">
							<h2 class="alighcenter">Courses We Offer</h2>
							<span class="clear spacer_responsive_hide_mobile">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt eius magni provident, doloribus omnis minus temporibus perferendis nesciunt quam repellendus nulla nemo ipsum odit corrupti consequuntur possimus, vero mollitia velit ad consectetur. Alias, laborum excepturi nihil autem nemo numquam, ipsa architecto non, magni consequuntur quam.
							</span>
						</div>
					</div>
				</div>
				<div class="list-row" v-for="row in courses">
					<div class="col-md-4" v-for="col in row">
						<div class="textbox">
							<h3>{{col.title}}</h3>
							<p>{{col.content}}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default{
	name:'selectone',
	data(){
		return{
			swiperOption: {
				pagination: {
    				el: '.swiper-pagination',
    				type:'bullets'
  				},
  				loop:true,
  				autoplay:true,
  				navigation: {
			      nextEl: '.swiper-button-next',
			      prevEl: '.swiper-button-prev'
			    }
        	},
        	courses:[
        		[{title:"Heading Course",content:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vest sit amet, consec ibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta."},
        		{title:"Heading Course",content:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vest sit amet, consec ibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta."},
        		{title:"Heading Course",content:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vest sit amet, consec ibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta."}],
        		[{title:"Heading Course",content:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vest sit amet, consec ibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta."},
        		{title:"Heading Course",content:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vest sit amet, consec ibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta."},
        		{title:"Heading Course",content:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vest sit amet, consec ibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta."}]
        	]
		}
	}
}	
</script>
<style scoped>
.index-wrap {
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
}	
.select-one{
	margin-top: 0;
}
.flex-caption{
	zoom: 0;
    color: #1C1D21;
    margin: 0 auto;
    padding: 1px;
    position: absolute;
    vertical-align: bottom;
    text-align: center;
    background: rgba(255, 255, 255, 0.26);
    bottom: 5%;
    display: block;
    left: 0;
    right: 0;
    z-index: 99;
}
.item_introtext{
	background-color: rgba(255, 255, 255, 0.66);
    margin: 0 auto;
    display: inline-block;
    padding: 25px;
}
.item_introtext span{
	font-size: 50px;
    display: block;
    padding: 14px 0 30px;
    font-weight:700;
}
.item_introtext p{
	font-size: 20px !important;
    color: #1C1D21;
    font-weight: bold;
    margin: 0 0 15px;
}
.select-two{
	width:100%;
	height:240px;
	background: #fff;
    padding: 50px 0 0 0;
}
.container{
	padding: 0 20px 0 20px;
    position: relative;
    width: 1170px;
    margin: 0 auto;
}
.list-row{
	margin: 0 -15px 30px -15px;
	height:161px;
}
.col-lg-12{
	width: 100%;
	float: left;
	position: relative;
    min-height: 1px;
    padding-left: 15px;
    padding-right: 15px;
}
.alighcenter{
    text-align: center;
}
.alighcenter h1,h2{
	font-family: 'Open Sans', Arial, sans-serif;
    font-weight: 700;
    line-height: 1.1em;
    color: #333;
    margin-bottom: 20px;
    font-size: 36px;
    margin-top: 10px;
}
.aligncenter span {
    margin-left: 0;
}
.clear{
    clear: both;
}
.spacer_responsive_hide_mobile{
	display:block;
}
.select-three{
	width:100%;
	height:665px;
	position: relative;
    background: #EFEFEF;
    padding: 50px 0 0px 0;
}
.col-md-4 {
    width: 30%;
    float: left;
    position: relative;
    min-height: 1px;
    padding-left: 15px;
    padding-right: 15px;
}
.textbox {
    background-color: #ccc;
    padding: 4px 25px;
}
.textbox h3 {
    margin: 0;
    font-size: 18px;
    font-family: 'Open Sans', Arial, sans-serif;
    font-weight: 700;
    line-height: 1.1em;
    color: #333;
    display: block;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
}
.textbox p{
	margin: 0 0 10px;
	display: block;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
}
</style>
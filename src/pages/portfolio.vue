<template>
	<div>
		<div id="inner-headline">
			<div class="container">
				<div class="list-row">
					<div class="col-lg-12">
						<h2 class="pageTitle">图片分享</h2>
					</div>
				</div>
			</div>
		</div>
        <div id="inner-content">
            <div class="container">
                <div class="list-row">
                    <div class="col-lg-12">

                        <ul class="portfolio-categ filter">
                            <li v-for="topic in topics">
                                <a href="#" @click="switchPicture(topic.type)">{{topic.title}}</a>
                            </li>
                        </ul>

                        <div class="list-row">
                            <div id="projects">
                                <ul id="thumbs">
                                    <li>
                                        <viewer :images="thumbs">
                                            <transition v-bind:css="false" v-on:before-enter="beforeEnter" 
                                                        v-on:enter="enter" v-on:leave="leave" v-for="thumb in thumbs">
                                                <img :src="thumb.url" :key="thumb.url" class="item-thumbs col-lg-3" v-if="selectType==thumb.dataType || selectType=='all'">
                                            </transition>
                                        </viewer>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	</div>
</template>
<script>

export default{
	name:'portfolio',
	data(){
		return {
            topics:[
                {title:"All",type:"all"},
                {title:"Web design",type:"web"},
                {title:"Mobile App",type:"icon"},
                {title:"UI design",type:"graphic"}
            ],
            thumbs:[
                {url:require("../assets/img/works/1.jpg"),dataType:"web"},
                {url:require("../assets/img/works/2.jpg"),dataType:"icon"},
                {url:require("../assets/img/works/3.jpg"),dataType:"graphic"},
                {url:require("../assets/img/works/4.jpg"),dataType:"web"},
                {url:require("../assets/img/works/5.jpg"),dataType:"web"},
                {url:require("../assets/img/works/6.jpg"),dataType:"icon"},
                {url:require("../assets/img/works/7.jpg"),dataType:"web"},
                {url:require("../assets/img/works/8.jpg"),dataType:"graphic"}
            ],
            selectType: 'all',
            fadeInDuration: 1000,
            fadeOutDuration: 1000,
            maxFadeDuration: 1500,
            stop: true
		}
	},
    methods:{
        switchPicture: function(type){
            this.selectType = type
        },
        beforeEnter: function (el) {
          el.style.opacity = 0
        },
        enter: function (el, done) {
          // var vm = this
          Velocity(el,
            { opacity: 1 },
            {
              duration: this.fadeInDuration,
              complete: function () {
                done()
                // if (!vm.stop) vm.show = false
              }
            }
          )
        },
        leave: function (el, done) {
          // var vm = this
          Velocity(el,
            { opacity: 0 },
            {
              duration: this.fadeOutDuration,
              complete: function () {
                done()
                // vm.show = true
              }
            }
          )
        }
    }
}	
</script>
<style scoped>
#inner-headline{
	background: #14A085;
    position: relative;
    margin: 0;
    padding: 0;
    color: #fefefe;
    border-top: 10px solid #11967C;
}
.container{
	padding: 0 20px 0 20px;
    position: relative;
    width: 1170px;
    margin-right: auto;
    margin-left: auto;

}
.list-row{
	margin-bottom: 30px;
	margin-left: -15px;
    margin-right: -15px;
    display: inline-block;
}
.col-lg-12 {
    width: 100%;
    position: relative;
    padding-left: 15px;
    padding-right: 15px;
}
.pageTitle {
    color: #fff;
    margin: 30px 0 3px;
}
.div{
	display: block;
}
h1, h2, h3, h4, h5, h6 {
    font-family: 'Open Sans', Arial, sans-serif;
    font-weight: 700;
    line-height: 1.1em;
    color: #333;
    margin-top: 20px;
}
h2{
    font-size: 30px;
}
h2 {
    -webkit-margin-before: 0.83em;
    -webkit-margin-after: 0.83em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
}
#inner-content {
    position: relative;
    background: #fff;
    padding: 50px 0 0px 0;
    width: 100%;
}
ul.portfolio-categ {
    margin: 10px 0 30px 0;
    padding: 0;
    float: left;
    list-style: none;
}
ul{
    display: block;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    -webkit-padding-start: 40px;
}
ul.portfolio-categ li {
    margin: 0;
    float: left;
    list-style: none;
    font-size: 13px;
    font-weight: 600;
    border: 1px solid #D5D5D5;
    margin-right: 15px;
}
li {
    display: list-item;
    text-align: -webkit-match-parent;
}
ul.portfolio-categ li a {
    display: block;
    padding: 8px 20px;
    color: #14A085;
    text-decoration: none;
    background: 0 0;
}
a:-webkit-any-link {
    cursor: auto;
}
#thumbs {
    margin: 0;
    padding: 0;
    height: auto;
    width:1160px;
}
#thumbs li {
    list-style-type: none;
}
#thumbs li {
    list-style-type: none;
}
.item-thumbs {
    position: relative;
    overflow: hidden;
    margin-bottom: 30px;
    cursor: pointer;
}
.col-lg-3 {
    width: 22%;
    min-height: 1px;
    padding-left: 15px;
    padding-right: 15px;
    float:left;
}
img{
    max-width: 100%;
    height: auto;
}
.item-thumbs a + img {
    width: 100%;
}
.item-thumbs img {
    margin-bottom: 15px;
}
img {
    vertical-align: middle;
}
img {
    border: 0;
}
</style>
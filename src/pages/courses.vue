<template>
	<div>
		<div id="inner-headline">
			<div class="container">
				<div class="list-row">
					<div class="col-lg-12">
						<h2 class="pageTitle">Courses</h2>
					</div>
				</div>
			</div>
		</div>

        <div id="inner-content">
            <div class="container">
                <div class="course">
                    <div class="list-row">
                        <div class="col-lg-12">
                            <div>
                                <h3>Courses We Offer</h3>
                                <span class="clear spacer_responsive_hide_mobile ">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt eius magni provident, doloribus omnis minus temporibus perferendis nesciunt quam repellendus nulla nemo ipsum odit corrupti consequuntur possimus, vero mollitia velit ad consectetur. Alias, laborum excepturi nihil autem nemo numquam, ipsa architecto non, magni consequuntur quam.
                                </span>
                            </div>
                        </div>
                    </div>

                    <div class="list-row1" v-for="courses in courseList">
                        <div class="col-md-4" v-for="course in courses">
                            <div class="textbox">
                                <h3>{{course.name}}</h3>
                                <p>
                                    {{course.content}}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt eius magni provident, doloribus omnis minus temporibus perferendis nesciunt quam repellendus nulla nemo ipsum odit corrupti consequuntur possimus
                </p>
                <br>

                <div class="list-row service-v1 margin-bottom-40">
                    <div class="col-md-4 md-margin-bottom-40" v-for="service in serviceList">
                        <img class="img-responsive" :src="service.url">
                        <h3>{{service.title}}</h3>
                        <p>
                            {{service.content}}
                        </p>
                    </div>
                </div>
            </div>
        </div>
	</div>
</template>
<script>
export default{
	name:'courses',
	data(){
		return {
            courseList:[
                [{name:'Heading Course',content:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vest sit amet, consec ibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta.'},
                {name:'Heading Course',content:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vest sit amet, consec ibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta.'},
                {name:'Heading Course',content:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vest sit amet, consec ibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta.'}],
                [{name:'Heading Course',content:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vest sit amet, consec ibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta.'},
                {name:'Heading Course',content:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vest sit amet, consec ibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta.'},
                {name:'Heading Course',content:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vest sit amet, consec ibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta.'}]
            ],
            serviceList:[
                {title:'Web Development',
                 content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt eius magni provident, doloribus omnis minus temporibus perferendis nesciunt quam repellendus nulla nemo ipsum odit corrupti consequuntur possimus',
                 url:require('../assets/img/service1.jpg')},
                 {title:'Mobile Development',
                 content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt eius magni provident, doloribus omnis minus temporibus perferendis nesciunt quam repellendus nulla nemo ipsum odit corrupti consequuntur possimus',
                 url:require('../assets/img/service2.jpg')},
                 {title:'Responsive Design',
                 content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt eius magni provident, doloribus omnis minus temporibus perferendis nesciunt quam repellendus nulla nemo ipsum odit corrupti consequuntur possimus',
                 url:require('../assets/img/service3.jpg')}
            ]
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
h1, h2, h3{
    margin-top: 20px;
    margin-bottom: 10px;
}
h3{
    font-size: 24px;
    display: block;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
}
.clear{
    clear: both;
}
.spacer_responsive_hide_mobile{
    height: 13px;
    display: block;
}
.list-row1{
    margin-left: -15px;
    margin-right: -15px;
    display: inline-block;
}
.col-md-4 {
    width: 30%;
    float: left;
    padding:15px;
}
.textbox {
    background-color: #EFEFEF;
    padding: 4px 25px;
}
p {
    margin: 0 0 10px;
    display: block;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
}
#content img {
    max-width: 100%;
    height: auto;
}
.img-responsive {
    display: block;
    max-width: 100%;
    height: auto;
}
img {
    vertical-align: middle;
    border: 0;
}
</style>
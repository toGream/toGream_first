<template>
	<div>
		<div id="inner-headline">
			<div class="container">
				<div class="list-row">
					<div class="col-lg-12">
						<h2 class="pageTitle">基础知识</h2>
					</div>
				</div>
			</div>
		</div>
		<div id="inner-content">
			<div class="container">
				<div class="about-logo">
					<div class="list-row">
						<div class="col-md-12">
							<div>
								<h3>We are awesome 
									<span class="color">TEAM</span>
								</h3>
								<p>
									Sed ut perspiciaatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
								</p>
								<p>
									Sed ut perspiciaatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
								</p>
							</div>
							<a href="#" class="btn btn-color">Read more</a>
						</div>
					</div>

                    <div class="list-row">
                        <div class="col-md-6">
                            <img src="../assets/img/section-image-1.png">
                        </div>
                        <div class="col-md-6">
                            <p>
                                Lorem ipsum dolor sit amet, cadipisicing  sit amet, consectetur adipisicing elit. Atque sed, quidem quis praesentium, ut unde fuga error commodi architecto, laudantium culpa tenetur at id, beatae pet.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. adipisicing  sit amet, consectetur adipisicing elit. Atque sed, quidem quis praesentium,m deserunt.
                            </p>
                            <ul class="list-unstyled">
                                <li v-for="item in listData">
                                    {{item}}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="space"></div>
                    <div class="list-row">
                        <div class="col-md-4">
                            <div class="block-heading-two">
                                <h3>
                                    Why Choose Us?
                                </h3>
                            </div>
                            <p>
                                Sed ut perspiciaatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur. 
                                <br>
                                <br>
                                Sed ut perspiciaatis iste natus error sit voluptatem probably haven't heard of them accusamus.
                            </p>
                        </div>

                        <div class="col-md-4">
                            <div class="block-heading-two">
                                <h3>Our Solution</h3>
                            </div>
                            <div class="panel-group">
                                <el-collapse v-model="activeName" accordion>
                                    <el-collapse-item v-for="pannel in pannels">
                                        <template slot="title">
                                            <div class="panel-heading">{{pannel.title}}</div>
                                        </template>
                                        <div class="panel-body">
                                            {{pannel.content}}
                                        </div>
                                    </el-collapse-item>
                                </el-collapse>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="block-heading-two">
                                <h3>Our Expertise</h3>
                            </div>
                            <template v-for="progress in progressList">
                                <h6>{{progress.title}}</h6>
                                <el-progress :text-inside="true" :stroke-width="6" :percentage="progress.percentage" 
                                :show-text="false" :color="progress.color"></el-progress>
                            </template>
                        </div>
                    </div>
                    <div class="space"></div>
                    <div class="block-heading-six">
                        <h3 class="bg-color">Our Team</h3>
                    </div>
                    <br>
                    <div class="team-six">
                        <div class="list-row">
                            <div class="col-md-3 col-sm-6" v-for="member in members">
                                <div class="team-member">
                                    <img class="img-responsive" :src="member.url" :alt="member">
                                    <h4>{{member.name}}</h4>
                                    <span>{{member.deg}}</span>
                                </div>
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
            pannels:[
                {title:"Accordion Heading Text Item # 1",content:"Sed ut perspiciaatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas"},
                {title:"Accordion Heading Text Item # 2",content:"Sed ut perspiciaatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas"},
                {title:"Accordion Heading Text Item # 3",content:"Sed ut perspiciaatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas"},
                {title:"Accordion Heading Text Item # 4",content:"Sed ut perspiciaatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas"}
            ],
            progressList:[
                {title:"Web Development", percentage:"50", color:"#F56C6C"},
                {title:"Designing", percentage:"60", color:"#67C23A"},
                {title:"User Experience", percentage:"80", color:"rgba(142, 113, 199, 0.7)"},
                {title:"Development", percentage:"40", color:"#409EFF"}
            ],
            members:[
                {name:"Johne Doe", deg:"Creative", url:require("../assets/img/team1.jpg")},
                {name:"Jennifer", deg:"Programmer", url:require("../assets/img/team2.jpg")},
                {name:"Christean", deg:"CEO", url:require("../assets/img/team3.jpg")},
                {name:"Kerinele rase", deg:"Manager", url:require("../assets/img/team4.jpg")}
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
.col-md-6 .col-md-12{
    position: relative;
    min-height: 1px;
    padding-left: 15px;
    padding-right: 15px;
}
.col-md-12 {
    width: 100%;
    clear:both;
}
.col-md-6 {
    width: 50%;
    float:left;
}
.btn {
    text-align: center;
    background: #318CCA;
    color: #fff;
    border-radius: 0;
    padding: 10px 30px;
    display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
    vertical-align: middle;
    cursor: pointer;
    border: 1px solid transparent;
    white-space: nowrap;
    font-size: 14px;
    line-height: 1.428571429;
    -webkit-user-select: none;
}
h3{
    font-size: 24px;
    color: #333;
}
p {
    margin: 0 0 10px;
    display: block;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
}
.space{
    height: 1px;
    border-top: 1px solid #ddd;
    margin:25px 0 25px 0;
}
.list-unstyled {
    padding-left: 0;
    list-style: none;
}
ul{
    margin-top: 0;
    margin-bottom: 10px;
    list-style-type: disc;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    -webkit-padding-start: 40px;
    display:block;
}
li {
    display: list-item;
    text-align: -webkit-match-parent;
    list-style-type:disc;
}
li i{
    background: url("../assets/img/glyphicons-halflings.png");
    background-repeat:no-repeat;
    background-position:-230px -140px;
    height:25px;
    width:25px;
    float:left;
    position: relative;
    margin: 0;
    padding: 0;
    text-align:center;
}
.col-md-4 {
    width: 30%;
    float: left;
    padding:15px;
}
h3{
    font-size: 24px;
}
.panel-group{
    margin-top: 10px;
    color: #FFF;
}
.panel-heading{
    background-color: #B9B9B9;
    text-align: center;
}
.panel-body{
    margin:0;
    padding:15px;
    background: #9C9C9C;
}
h4, h5, h6{
    margin-top: 15px;
    margin-bottom: 15px;
}
h6 {
    display: block;
}
.col-md-3 {
    width: 25%;
    float: left;
    display:block;
}
.col-md-3 .col-sm-6{
    position: relative;
    min-height: 1px;
    padding-left: 15px;
    padding-right: 15px;
}
.team-member {
    text-align: center;
    padding-bottom: 15px;
    background: #F9F9F9;
    margin:10px;
}
#content img {
    max-width: 100%;
    height: auto;
}
.img-responsive {
    display: block;
    background:#FFF;
    vertical-align: middle;
    border:0;
    width:270px;
    height:270px;
}
</style>
<style>
.el-collapse-item__content {
    padding-bottom: 0px !important;
}
</style>
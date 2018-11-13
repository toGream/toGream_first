<template>
	<div>
		<div id="inner-headline">
			<div class="container">
				<div class="list-row">
					<div class="col-lg-12">
						<h2 class="pageTitle">Pricing</h2>
					</div>
				</div>
			</div>            
		</div>

        <div id="content">
            <div class="container">
                <div class="list-row">
                    <div class="col-lg-3" v-for="price in prices">
                        <div class="pricing-box-item">
                            <div class="pricing-heading">
                                <h3>
                                    <strong>{{price.title}}</strong>
                                </h3>
                            </div>
                            <div class="pricing-terms">
                                <h6>${{price.amount}}.00 / Year</h6>
                            </div>
                            <div class="pricing-container">
                                <ul>
                                    <li> {{price.attribute1}}</li>
                                    <li> {{price.attribute2}}</li>
                                    <li> {{price.attribute3}}</li>
                                    <li> {{price.attribute4}}</li>
                                    <li> {{price.attribute5}}</li>
                                </ul>
                            </div>
                            <div class="pricing-action">
                                <a href="#" class="btn btn-medium btn-theme">
                                    <i class="icon-bolt">Get Now</i>
                                </a>
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
	name:'pricing',
	data(){
		return {
            prices:[
                {title:"Basic",amount:"15",
                attribute1:"Responsive Design",
                attribute2:"Bootstrap Design",
                attribute3:"Unlimited Support",
                attribute4:"Free Trial version",
                attribute5:"HTML5 CSS3 jQuery",
                url:""
                },
                {title:"Standard",amount:"15",
                attribute1:"Responsive Design",
                attribute2:"Bootstrap Design",
                attribute3:"Unlimited Support",
                attribute4:"Free Trial version",
                attribute5:"HTML5 CSS3 jQuery",
                url:""
                },
                {title:"Advanced",amount:"15",
                attribute1:"Responsive Design",
                attribute2:"Bootstrap Design",
                attribute3:"Unlimited Support",
                attribute4:"Free Trial version",
                attribute5:"HTML5 CSS3 jQuery",
                url:""
                },
                {title:"Mighty",amount:"15",
                attribute1:"Responsive Design",
                attribute2:"Bootstrap Design",
                attribute3:"Unlimited Support",
                attribute4:"Free Trial version",
                attribute5:"HTML5 CSS3 jQuery",
                url:""
                }
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
#content {
    position: relative;
    background: #fff;
    padding: 50px 0 0px 0;
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
    width:100%;
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
.col-lg-3 {
    width: 22%;
    position: relative;
    min-height: 1px;
    padding-left: 15px;
    padding-right: 15px;
    display:block;
    float:left;
}
.pricing-box-item {
    border: 1px solid #F5F5F5;
    background: #F9F9F9;
    position: relative;
    margin: 0 0 20px 0;
    padding: 0;
    box-shadow: 0 2px 0 rgba(0,0,0,0.03);
    box-sizing: border-box;
}
.pricing-box-item .pricing-heading {
    text-align: center;
    padding: 0px 0 0px 0;
    display: block;
}
h1, h2, h3, h4, h5, h6 {
    font-family: 'Open Sans', Arial, sans-serif;
    font-weight: 700;
    line-height: 1.1em;
    color: #333;
    margin-top: 20px;
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
.pricing-box-item .pricing-terms {
    text-align: center;
    display: block;
    overflow: hidden;
    padding: 11px 0 5px;
}
.pricing-box-item .pricing-terms h6 {
    font-style: italic;
    margin-top: 10px;
    color: #14A085;
    font-size: 22px;
    font-family: 'Noto Serif', serif;
}
h6 {
    display: block;
    -webkit-margin-before: 2.33em;
    -webkit-margin-after: 2.33em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
}
.pricing-container {
    background: #fff;
    text-align: center;
    font-size: 14px;
}
.pricing-container ul li {
    border-bottom: 1px solid #F5F5F5;
    list-style: none;
    padding: 15px 0 15px 0;
    margin: 0 0 0 0;
    color: #222;
}
.pricing-box-item .pricing-action {
    margin: 0;
    text-align: center;
    padding: 30px 0 30px 0;
}
.pricing-action {
    background: #fcfcfc;
}
.btn-theme {
    color: #fff;
}
.btn {
    text-align: center;
    background: #318CCA;
    border-radius: 0;
    padding: 10px 30px;
}
.btn {
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
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none;
}
a {
    text-decoration: none;
}
</style>
<template>
	<div>
		<div id="inner-headline">
			<div class="container">
				<div class="list-row">
					<div class="col-lg-12">
						<h2 class="pageTitle">About Us</h2>
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
}
.col-lg-12 {
    width: 100%;
    position: relative;
    min-height: 66px;
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
}
h2, .h2 {
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
}
.col-md-6 {
    width: 50%;
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
h3, .h3 {
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
</style>

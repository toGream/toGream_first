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

	</div>
</template>
<script>
export default{
	name:'pricing',
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
</style>
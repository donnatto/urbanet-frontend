<template>
  <div><!-- Header -->
    <header id="header" class="header">
        <div class="header-content">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-xl-5">
                        <div class="text-container">
                            <h1>Encuentra la casa de tus sueños</h1>
                            <p class="p-large">
                              Somos una nueva plataforma que te ayudará a encontrar la casa que mejor se ajusta a tus necesidades.
                              Encuentra el lugar que más te guste mediante fotos inmeresivas.
                            </p>
                        </div> <!-- end of text-container -->
                    </div> <!-- end of col -->
                    <div class="col-lg-6 col-xl-7">
                        <div class="image-container">
                            <div class="img-wrapper">
                                <img class="img-fluid" src="image/house.png" alt="alternative">
                            </div> <!-- end of img-wrapper -->
                        </div> <!-- end of image-container -->
                    </div> <!-- end of col -->
                </div> <!-- end of row -->
            </div> <!-- end of container -->
        </div> <!-- end of header-content -->
    </header> <!-- end of header -->
    <svg class="header-frame" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1920 310"><defs><style>.cls-1{fill:#17a2b8;}</style></defs><title>header-frame</title><path class="cls-1" d="M0,283.054c22.75,12.98,53.1,15.2,70.635,14.808,92.115-2.077,238.3-79.9,354.895-79.938,59.97-.019,106.17,18.059,141.58,34,47.778,21.511,47.778,21.511,90,38.938,28.418,11.731,85.344,26.169,152.992,17.971,68.127-8.255,115.933-34.963,166.492-67.393,37.467-24.032,148.6-112.008,171.753-127.963,27.951-19.26,87.771-81.155,180.71-89.341,72.016-6.343,105.479,12.388,157.434,35.467,69.73,30.976,168.93,92.28,256.514,89.405,100.992-3.315,140.276-41.7,177-64.9V0.24H0V283.054Z"/></svg>
    <!-- end of header -->
    </div>
</template>

<script>
export default {}
</script>

<style scoped>
.header {
  background-color: #17a2b8;
}
.header .header-content {
	padding-top: 1rem;
	padding-bottom: 4rem;
	text-align: center;
}

.header .text-container {
	margin-bottom: 3rem;
}

.header h1 {
	margin-bottom: 1rem;
	color: #fff;
	font-size: 2.5rem;
	line-height: 3rem;
}

.header .p-large {
	margin-bottom: 2rem;
	color: #f3f7fd;
}

.header .btn-solid-lg {
	margin-right: 0.5rem;
	margin-bottom: 1.125rem;
	margin-left: 0.5rem;
	border-color: #f3f7fd;
	background-color: #f3f7fd;
	color: #5f4dee;
}

.header .btn-solid-lg:hover {
	background: transparent;
	color: #f3f7fd;
}

.header .btn-outline-lg {
	border-color: #f3f7fd;
	color: #f3f7fd;
}

.header .btn-outline-lg:hover {
	background-color: #f3f7fd;
	color: #5f4dee;
}

.header-frame {
	margin-top: -1px; /* To remove white margin in FF */
	width: 100%;
	height: 2.25rem;
}

/*****************************/
/*     19. Media Queries     */
/*****************************/	
/* Min-width width 768px */
@media (min-width: 768px) {
	
	/* General Styles */
	.p-heading {
		width: 85%;
		margin-right: auto;
		margin-left: auto;
	}

	.h2-heading {
		width: 80%;
		margin-right: auto;
		margin-left: auto;
	}
	/* end of general styles */


	/* Header */
	.header .text-container {
		margin-bottom: 4rem;
	}

	.header h1 {
		font-size: 3.5rem;
		line-height: 4.125rem;
	}

	.header .btn-solid-lg {
		margin-bottom: 0;
		margin-left: 0;
	}

	.header-frame {
		height: 5.5rem;
	}
	/* end of header */


	/* Testimonials */
	.slider-2 .swiper-button-prev {
		width: 1.375rem;
		background-size: 1.375rem 2.125rem;
	}
	
	.slider-2 .swiper-button-next {
		width: 1.375rem;
		background-size: 1.375rem 2.125rem;
	}
	/* end of testimonials */


	/* Newsletter */
	.form .text-container {
		padding: 4rem 2.5rem 3rem 2.5rem;
	}

	.form form {
		margin-right: 4rem;
		margin-left: 4rem;
	}
	/* end of newsletter */


	/* Footer */
	.footer-frame {
		height: 5rem;
	}
	/* end of footer */


	/* Extra Pages */
	.ex-header {
		padding-top: 11rem;
		padding-bottom: 9rem;
	}

	.ex-basic-2 .text-container.dark {
		padding: 2.5rem 3rem 2rem 3rem;
	}

	.ex-basic-2 .form-container {
		margin-top: 0;
	}
	/* end of extra pages */


	/* Sign Up And Log In Pages */
	.ex-2-header {
		padding-top: 11rem;
	}

	.ex-2-header .form-container {
		padding: 2.25rem 1.75rem 1.25rem 1.75rem;
	}
	/* end of sign up and log in pages */
}
/* end of min-width width 768px */


/* Min-width width 992px */
@media (min-width: 992px) {
	
	/* Navigation */
	.navbar-custom {
		padding: 2.125rem 1.5rem 2.125rem 2rem;
        background: transparent;
		box-shadow: none;
	}

	.navbar-custom .navbar-nav {
		margin-top: 0;
		margin-bottom: 0;
	}

	.navbar-custom .nav-item .nav-link {
		padding: 0.25rem 0.75rem 0.25rem 0.75rem;
	}
	
	.navbar-custom .nav-item .nav-link:hover,
	.navbar-custom .nav-item .nav-link.active {
		opacity: 1;
	}

	.navbar-custom.top-nav-collapse {
        padding: 0.5rem 1.5rem 0.5rem 2rem;
		background-color: #5f4dee;
		box-shadow: 0 0.0625rem 0.375rem 0 rgba(0, 0, 0, 0.1);
	}

	.navbar-custom.top-nav-collapse .nav-item .nav-link:hover,
	.navbar-custom.top-nav-collapse .nav-item .nav-link.active {
		color: #fff;
	}

	.navbar-custom .dropdown-menu {
		padding-top: 1rem;
		padding-bottom: 1rem;
		border-top: 0.25rem solid rgba(0, 0, 0, 0);
		border-radius: 0.25rem;
	}

	.navbar-custom.top-nav-collapse .dropdown-menu {
		border-top: 0.25rem solid rgba(0, 0, 0, 0);
		box-shadow: 0 0.375rem 0.375rem 0 rgba(0, 0, 0, 0.02);
	}

	.navbar-custom .dropdown-item {
		padding-top: 0.25rem;
		padding-bottom: 0.25rem;
	}

	.navbar-custom .dropdown-items-divide-hr {
		width: 84%;
	}

	.navbar-custom .nav-item .btn-outline-sm {
		margin-top: 0;
		margin-bottom: 0;
		margin-left: 1rem;
	}
	/* end of navigation */


	/* General Styles */
	.p-heading {
		width: 65%;
	}

	.h2-heading {
		width: 60%;
	}
	/* end of general styles */


	/* Header */
	.header .header-content {
		text-align: left;
	}

	.header .text-container {
		margin-top: 4rem;
		margin-bottom: 0;
	}

	.header .image-container {
		position: relative;
		margin-top: 3rem;
	}
	
	.header .image-container .img-wrapper {
		position: absolute;
		display: block;
		width: 470px;
	}

	.header-frame {
		height: 8rem;
	}
	/* end of header */


	/* Description */
	.cards-1 .card {
		display: inline-block;
		width: 17rem;
		max-width: 100%;
		margin-right: 1rem;
		margin-left: 1rem;
		vertical-align: top;
	}

	.cards-1 .card-image {
		width: 9rem;
	}
	/* end of description */


	/* Features */
	.tabs .nav-tabs {
		display: flex;
		justify-content: center;
		margin-bottom: 2.75rem;
	} 

	.tabs .nav-link {
		padding-right: 1.25rem;
		padding-left: 1.25rem;
		border-bottom: 2px solid rgb(202, 202, 202);
	}
	
	.tabs .nav-link:hover,
	.tabs .nav-link.active {
		border-bottom: 2px solid #5f4dee;
	}

	.tabs .image-container {
		margin-bottom: 0;
	}
	/* end of features */


	/* Features Lightboxes */
	.lightbox-basic {
		max-width: 62.5rem;
		padding: 2.5rem 2.5rem 2.5rem 2.5rem;
	}

	.lightbox-basic .image-container {
		max-width: 100%;
		margin-right: 2rem;
		margin-bottom: 0;
		margin-left: 0.5rem;
	}
	
	.lightbox-basic h3 {
		margin-top: 0.5rem;
	}
	/* end of features lightboxes */


	/* Details */
	.basic-1 {
		padding-top: 8rem;
	}

	.basic-1 .text-container {
		margin-bottom: 0;
	}
	/* end of details */


	/* Video */
	.basic-2 .image-container {
		max-width: 53.125rem;
		margin-right: auto;
		margin-left: auto;
	}

	.basic-2 p {
		width: 65%;
		margin-right: auto;
		margin-left: auto;
	}
	/* end of video */


	/* Pricing */
	.cards-2 .card {
		display: inline-block;
		margin-right: 0.5rem;
		margin-left: 0.5rem;
		vertical-align: top;
	}
	/* end of pricing */


	/* Testimonials */
	.slider-2 .swiper-container {
		width: 92%;
		text-align: left;
	}

	.slider-2 .image-wrapper {
		float: left;
		width: 10rem;
		margin-bottom: 0;
	}

	.slider-2 .text-wrapper {
		max-width: 100%;
		margin-top: 1.25rem;
		margin-left: 13rem;
	}

	.slider-2 .swiper-button-prev {
		left: -0.75rem;
	}
	
	.slider-2 .swiper-button-next {
		right: -0.75rem;
	}
	/* end of testimonials */


	/* Newsletter */
	.form .text-container {
		width: 55rem;
		margin-right: auto;
		margin-left: auto;
		padding-top: 5rem;
		padding-bottom: 4.5rem;
	}

	.form h2 {
		margin-right: 7rem;
		margin-left: 7rem;
	}

	.form form {
		margin-right: 9rem;
		margin-left: 9rem;
	}
	/* end of newsletter */


	/* Extra Pages */
	.ex-header h1 {
		width: 80%;
		margin-right: auto;
		margin-left: auto;
	}

	.ex-basic-2 {
		padding-bottom: 5rem;
	}
	/* end of extra pages */
}
/* end of min-width width 992px */


/* Min-width width 1200px */
@media (min-width: 1200px) {
	
	/* General Styles */
	.h2-heading {
		width: 50%;
	}
	/* end of general styles */


	/* Header */
	.header .header-content {
		padding-top: 11rem;
		padding-bottom: 5rem;
	}

	.header .text-container {
		margin-top: 5.5rem;
		margin-right: 0.5rem;
	}

	.header .image-container {
		margin-top: 1rem;
		margin-left: 1.5rem;
	}

	.header .image-container .img-wrapper {
		width: 630px;
	}

	.header-frame {
		height: 9.375rem;
	}
	/* end of header */
	

	/* Customer */
	.slider-1 .slider-container {
		margin-right: 3rem;
		margin-left: 3rem;
	}
	/* end of customer */


	/* Description */
	.cards-1 .card {
		width: 18.875rem;
		margin-right: 2rem;
		margin-left: 2rem;
	}

	.cards-1 .card-image {
		width: 12.5rem;
	}
	/* end of description */


	/* Features */
	.tabs .image-container {
		margin-right: 1.5rem;
		margin-left: 1rem;
	}
	
	.tabs .text-container {
		margin-top: 1.5rem;
		margin-right: 1rem;
		margin-left: 1.5rem;
	}
	/* end of features */


	/* Details */
	.basic-1 .image-container {
		margin-right: 1rem;
		margin-left: 1.5rem;
	}
	
	.basic-1 .text-container {
		margin-top: 1rem;
		margin-right: 1.5rem;
		margin-left: 1rem;
	}

	.basic-1 h2 {
		margin-bottom: 1rem;
	}
	/* end of details */


	/* Pricing */
	.cards-2 .card {
		width: 19.375rem;
		max-width: 100%;
		margin-right: 1.75rem;
		margin-left: 1.75rem;
	}

	.cards-2 .card .card-body {
		padding-right: 2.25rem;
		padding-left: 2.25rem;
	}
	/* end of pricing */


	/* Testimonials */
	.slider-2 .slider-container {
		width: 64.125rem;
		margin-right: auto;
		margin-left: auto;
	}
	/* end of testimonials */


	/* Newsletter */
	.form .text-container {
		width: 64.75rem;
		padding-top: 6rem;
		padding-bottom: 5.5rem;
	}

	.form h2 {
		margin-right: 12rem;
		margin-left: 12rem;
	}

	.form form {
		margin-right: 15rem;
		margin-left: 15rem;
	}
	/* end of newsletter */


	/* Footer */
	.footer .footer-col.first {
		margin-right: 1.5rem;
	}

	.footer .footer-col.middle {
		margin-right: 0.75rem;
		margin-left: 0.75rem;
	}

	.footer .footer-col.last {
		margin-left: 1.5rem;
	}
	/* end of footer */


	/* Extra Pages */
	.ex-header h1 {
		width: 60%;
		margin-right: auto;
		margin-left: auto;
	}

	.ex-basic-2 .form-container {
		margin-left: 1.75rem;
	}

	.ex-basic-2 .image-container-small {
		margin-left: 1.75rem;
	}
	/* end of extra pages */
}
/* end of min-width width 1200px */

</style>

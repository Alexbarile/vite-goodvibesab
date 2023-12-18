<script>
export default{
    name: "Aboutme",
}

</script>

<template>
    <div class="bg">
        <div class="container">
            <div class="row d-flex align-items-center">
                
                <div class="col-lg-6 col-md-6 col-sm-12" data-aos="fade-right">
                    <div class="hero-about">
                        <img src="../../public/img/me.JPG" alt="">
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 bg-copy" data-aos="fade-left">
                    <div class="copy">
                        <h1>EMOTIONS <br>
                            THROUGH <br>
                            THE MUSIC
                        </h1>
                        <p class="fw-bold mt-5">Hi there,</p>
                        <p>
                            <span class="fw-bold">Alessandro Barile</span>, born in Foggia, born in 1993, moved to Milan, immediately became passionate about the world of music, 360 degrees. 
                            Working as an organizer of events he is passionate about the world of Djing. <br> <br>
                            He began to play for different clubs and cocktail bar, having the opportunity to express and refine its <span class="fw-bold">"know-how"</span>. <br> <br>
                            He plays <span class="fw-bold">Deep House</span>, <span class="fw-bold">House</span> and <span class="fw-bold">Tech House</span>, genres from various shades that make you feel and dance. 
                            For him music is an expression of everything, which speaks a universal language. So...
                        </p>
                        <h2>VIBES ON, WORLD OFF</h2>
    
                        <form class="form d-none">
                            <router-link :to="{name: 'thank-you'}" class="text-center">
                                <button class="submit">
                                    Invia
                                </button>
                            </router-link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/app.scss' as *;

.bg{
    background-color: yellow;

    .row{
    
        .col-lg-6, .col-md-6{
            padding: 0px !important;
            
            .hero-about{
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
    
        .bg-copy{
            background-color: yellow;
    
            .copy{
                padding: 150px 120px;
    
                h1{
                    font-weight: 700;
                    font-size: 60px;
                    line-height: 55px;
                }
    
                
                h2{
                    padding-top: 20px;
                    font-weight: 700;
                    font-size: 38px;
                }
    
                @media (max-width: 992px) {
                    h1{
                        font-size: 50px;
                    }
                    h2{
                        font-size: 35px;
                    }
                }
            }
    
            @media (max-width: 992px) {
                .copy{
                    padding: 120px 50px;
                }
            }       
        }
    }
}


</style>

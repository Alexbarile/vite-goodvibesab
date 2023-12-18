<script>
    export default{
        name: 'Home',
    }
</script>

<template>
    <main>
        <div class="container-100">
            <div class="row">
                <div class="col">
                    <div class="hero-bg">
                        <div data-aos="fade-up" class="hero-img">
                            <router-link :to="{name: 'contacts'}">
                                <div class="main">
                                    <img src="../../public/img/goodvibes-w.png" alt="">
                                </div>
                                <div class="name">
                                    <img src="../../public/img/alebar-w.png" alt="">
                                </div>
                            </router-link>
                        </div>
                    </div>
                    
                    <!-- <video autoplay playsinline preload muted loop>
                        <source src="../../public/video/IMG_2280.MOV" type="video/mp4">
                    </video> -->
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
@use '../styles/app.scss' as *;

main{

    .container-100{
        width: 100%;
        margin: 0 auto;
        .row{
            width: 100%;
            margin: 0 auto;

            .col{
                padding: 0 !important;

                // .hero{
                //     img{
                //         width: 100%;
                //         height: 1600px;
                //         object-fit: cover;
                //         object-position: bottom;
                //     }
                // }
                
                // video{
                //     width: 100%;
                //     display: block;
                //     margin: 0 auto;
                // }

                .hero-bg{
                    background-image: url("../../public/img/DSCF3328.JPG");
                    height: 1600px;
                    background-position: bottom;
                    background-repeat: no-repeat;
                    background-size: cover;
                    position: relative;
                }

                @media (max-width: 992px) {
    
                    .hero-bg{
                        width: 100%;
                        height: 1000px;
                    }
  
                }
            
                .hero-img{
                    text-align: center;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);

                    .main{
                        margin-bottom: 10%;
                        img{
                            width: 50%;
                        }
                    }
                    
                    .name{
                        img{
                            width: 35%;
                        }
                    }

                    @media (max-width: 992px) {
    
                        .main img{
                            width: 100%;
                        }

                        .name img{
                            width: 80%;
                        }
                    }
                }
                
            }
        }
    }
}
</style>

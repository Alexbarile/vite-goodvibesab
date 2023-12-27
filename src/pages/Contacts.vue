<script>

export default {
    name: 'Contacts',
}
</script>

<template>
    <div class="container-100">
        <div class="row">
            <div class="col d-flex justify-content-center">
                <div class="hero-bg">
                    <div class="info">
                        <h4>CONTACTS</h4>
                        <div class="d-flex justify-content-center contact">
                            <div class="box d-flex flex-column">
                                <div class="text-center mb-2">
                                    <i class="fa-regular fa-envelope"></i>
                                </div>
                                <div class="text-center">
                                    <a target="_blank" href="mailto:alexbarile93fg@yahoo.it">alexbarile93fg@yahoo.it</a>
                                </div>
                            </div>
                            <div class="box d-flex flex-column">
                                <div class="text-center mb-2">
                                    <i class="fa-brands fa-whatsapp"></i>
                                </div>
                                <div class="text-center">
                                    <a target="_blank" href="tel:+393288150722">+39 3288150722</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="bg">
        <div class="container">
            <div class="row d-flex align-items-center py-5">
                <div class="col-lg-6 col-md-6 col-sm-12" data-aos="fade-right">
                    <div class="hero-about">
                        <img src="../../public/img/gv-lake.png" alt="">
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 bg-copy" data-aos="fade-left">
                    <div class="copy">
                        <h1>#goodvibesab
                        </h1>
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



.container-100{
    width: 100%;
    margin: 0 auto;


    .row{
        width: 100%;
        margin: 0 auto;
        .col{
            padding: 0px !important;
            
            .hero-bg{
                width: 100%;
                
                background-color: black;

                .info{
                    padding: 50px 0 0 0;

                    h4{
                        font-size: 40px;
                        font-weight: 700;
                        margin-bottom: 100px;
                        color: white;
                        text-align: center;
                    }
    
                    .box{
                        border: 2px solid white;
                        border-radius: 10px;
                        margin: 20px;
                        padding: 20px;
                        width: 30%;
    
                        i{
                            font-size: 70px;
                            color: white;
                        }
    
                        a{
                            color: yellow;
                            font-size: 20px;
                        }
    
                        &:hover{
    
                            border: 2px solid red;
    
                            i, a{
                                color: red;
                            }
                        }
                    }

                    @media (max-width: 768px) {
                        .contact{
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                           
                        }

                        .box{
                            width: 80%;
                        }

                        h4{
                            margin-bottom: 10px;
                        }
                    }
                }

                @media (max-width: 768px) {
                    .info{
                        padding: 40px 0 0 0;
                    }
                }

                .extra{
                    image{
                        img{
                            width: 50%;
                        }
                    }
                }

                h1{
                    color: red;
                    font-size: 60px;
                    font-weight: 700;
                }
            }
        }
    }

}

.bg{
    background-color: black;


    .row{
    
        background-color: black;
    
        .col-lg-6, .col-md-6{
            padding: 0px !important;
            
            .hero-about{
                img{
                    width: 100%;
                    height: 100%;
                    border-radius: 10px;
                }
            }
        }
    
        .bg-copy{
            
    
            .copy{
                padding: 150px 120px;
    
                h1{
                    font-weight: 700;
                    font-size: 60px;
                    line-height: 55px;
                    color: red;
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
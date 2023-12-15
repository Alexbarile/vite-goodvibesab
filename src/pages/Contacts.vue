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
                height: 73vh;
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
            }
        }
    }
}
    
</style>
<script>
    export default{
        name: 'Home',
    }
</script>

<template>
    <main>
        <div class="container-100">
            <div class="row">
                <div class="col-12 p-0" data-aos="fade-in">
                    <div class="hero-img">
                        <div class="hero-text">
                            <h4 data-aos="fade-up" class="pb-4">Photography</h4>
                            <router-link :to="{name: 'portfolio'}">
                                <button data-aos="fade-up">SEE</button>
                            </router-link>
                        </div>
                    </div>
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
    
            .hero-img{
                background-image: url("../../public/img/hero.JPG");
                background-color: #cccccc;
                height: 1000px;
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
                position: relative;
            }
        
            .hero-text{
                text-align: center;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                color: white;
        
                h4{
                    text-transform: uppercase;
                    font-size: 25px;
                    font-weight: 400;
                    letter-spacing: 10px;
                }
        
                button{
                    border: 1px solid white;
                    background-color: transparent;
                    padding: 8px 70px;
                    color: white;
                    transition: 0.3s;
    
                    &:hover{
                        box-shadow: 0 0 6px 3px rgb(239, 239, 211);
                    }
                }
            }    
        }

    }

}
</style>

<script>
export default{
    name: "Video",

    data() {
        return {
            
        }
    },
    methods: {
        getImagePath: function (img) {
            return `/img/portfolio/${img}`
        },
    },
    
}

</script>

<template>
    <section>
        <div class="container-100">
            <div class="row">
                <div class="col">
                    
                    <!-- <div v-for="(i, index) in candles" :key="index" class="col width-4">
                            <div class="candles">
                                <img :src="getImagePath(i.label)" alt="candles">
                            </div>
                        </div> -->

                    <div class="background-red">
                        <div class="container">
                            <div class="carousel">
                                <input type="radio" name="slides" checked="checked" id="slide-1">
                                <input type="radio" name="slides" id="slide-2">
                                <input type="radio" name="slides" id="slide-3">
                                <input type="radio" name="slides" id="slide-4">
                                <input type="radio" name="slides" id="slide-5">
                                <input type="radio" name="slides" id="slide-6">
                                <input type="radio" name="slides" checked="checked" id="slide-1">
                                <input type="radio" name="slides" id="slide-2">
                                <input type="radio" name="slides" id="slide-3">
                                <input type="radio" name="slides" id="slide-4">
                                <input type="radio" name="slides" id="slide-5">
                                <input type="radio" name="slides" id="slide-6">
                                <ul class="carousel__slides">
                                    <li class="carousel__slide">
                                        <figure>
                                            <div>
                                                <img src="https://picsum.photos/id/1041/800/450" alt="">
                                            </div>
                                            <figcaption>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                <span class="credit">Photo: Tim Marshall</span>
                                            </figcaption>
                                        </figure>
                                    </li>
                                    <li class="carousel__slide">
                                        <figure>
                                            <div>
                                                <img src="https://picsum.photos/id/1043/800/450" alt="">
                                            </div>
                                            <figcaption>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                <span class="credit">Photo: Christian Joudrey</span>                            
                                            </figcaption>
                                        </figure>
                                    </li>
                                    <li class="carousel__slide">
                                        <figure>
                                            <div>
                                                <img src="https://picsum.photos/id/1044/800/450" alt="">
                                            </div>
                                            <figcaption>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                <span class="credit">Photo: Steve Carter</span>                            
                                            </figcaption>
                                        </figure>
                                    </li>
                                    <li class="carousel__slide">
                                        <figure>
                                            <div>
                                                <img src="https://picsum.photos/id/1045/800/450" alt="">
                                            </div>
                                            <figcaption>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                <span class="credit">Photo: Aleksandra Boguslawska</span>                            
                                            </figcaption>
                                        </figure>
                                    </li>
                                    <li class="carousel__slide">
                                        <figure>
                                            <div>
                                                <img src="https://picsum.photos/id/1049/800/450" alt="">
                                            </div>
                                            <figcaption>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                <span class="credit">Photo: Rosan Harmens</span>                            
                                            </figcaption>
                                        </figure>
                                    </li>
                                    <li class="carousel__slide">
                                        <figure>
                                            <div>
                                                <img src="https://picsum.photos/id/1052/800/450" alt="">
                                            </div>
                                            <figcaption>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                <span class="credit">Photo: Annie Spratt</span>                            
                                            </figcaption>
                                        </figure>
                                    </li>
                                </ul>
                                <div class="carousel__thumbnails mt-3">
                                    <div class="card-single">
                                        <div>
                                            <label for="slide-1">
                                                <video autoplay playsinline preload muted loop>
                                                    <source src="../../public/video/VIDEO SONG (Bormio).mp4" type="video/mp4">
                                                </video>
                                            </label>
                                        </div>
                                        <div>
                                            <label for="slide-2"><img src="https://picsum.photos/id/1043/150/150" alt=""></label>
                                        </div>
                                        <div>
                                            <label for="slide-1"><img src="https://picsum.photos/id/1041/150/150" alt=""></label>
                                        </div>
                                        <div>
                                            <label for="slide-1"><img src="https://picsum.photos/id/1041/150/150" alt=""></label>
                                        </div>
                                        <div>
                                            <label for="slide-1"><img src="https://picsum.photos/id/1041/150/150" alt=""></label>
                                        </div>
                                        <div>
                                            <label for="slide-1"><img src="https://picsum.photos/id/1041/150/150" alt=""></label>
                                        </div>

                                        <div>
                                            <label for="slide-1"><img src="https://picsum.photos/id/1041/150/150" alt=""></label>
                                        </div>
                                        <div>
                                            <label for="slide-1"><img src="https://picsum.photos/id/1041/150/150" alt=""></label>
                                        </div>
                                    </div>
                                </div>  
                            </div>
                        </div>


                        <!-- SLIDER 1 -->

                        <!-- <div class="container">
                            <input type="radio" name="slider" id="item-1" checked>
                            <input type="radio" name="slider" id="item-2">
                            <input type="radio" name="slider" id="item-3">
                            <input type="radio" name="slider" id="item-4">

                            <div class="cards">
                                <label class="card-item" for="item-1" id="song-1">
                                    <video autoplay playsinline preload muted loop>
                                            <source src="../../public/video/VIDEO SONG (Bormio).mp4" type="video/mp4">
                                    </video>
                                </label>
                                <label class="card-item" for="item-2" id="song-2">
                                    <video autoplay playsinline preload muted loop>
                                            <source src="../../public/video/VIDEO SONG (Bormio).mp4" type="video/mp4">
                                    </video>
                                </label>
                                <label class="card-item" for="item-3" id="song-3">
                                    <video autoplay playsinline preload muted loop>
                                            <source src="../../public/video/VIDEO SONG (Bormio).mp4" type="video/mp4">
                                    </video>
                                </label>
                            </div>
                        
                            <div class="player">
                                <div class="upper-part">
                                    
                                    <div class="info-area" id="test">
                                        <label class="song-info" id="song-info-1">
                                            <div class="title">GOOD VIBES in Foggia</div>
                                            <div class="sub-line">
                                                <div class="subtitle">Alessandro Barile</div>
                                            </div>
                                        </label>
                                        <label class="song-info" id="song-info-2">
                                            <div class="title">Words Remain</div>
                                            <div class="sub-line">
                                                <div class="subtitle">Moderator</div>
                                            </div>
                                        </label>
                                        <label class="song-info" id="song-info-3">
                                            <div class="title">Falling Out</div>
                                            <div class="sub-line">
                                                <div class="subtitle">Otzeki</div>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div> -->


                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../styles/app.scss' as *;

section{
    .container-100{
        width: 100%;
        margin: 0 auto;

        .row{
            width: 100%;
            margin: 0 auto;

            .col{
                padding: 0 !important;
                height: 90vh;
            
                .background-red {
                    margin: 0;
                    padding: 0;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 30px 10px;
                    font-family: 'DM Sans', sans-serif;
                    transition: background .4s ease-in;
                    background-color: red;
            
                    &.red {
                        background-color: yellow;
                    }
                
                }

                // SLIDER 2

                @mixin aspect-ratio($width, $height) {
                    position: relative;
                    
                    &:before {
                        display: block;
                        content: "";
                        width: 100%;
                        padding-top: ($height / $width) * 100%;
                    }
                    
                    > img {
                            position: absolute;
                            top: 0;
                            left: 0;
                            right: 0;
                            bottom: 0;
                            width: 100%;
                            height: 100%;
                    }
                }

                // Styling

                .container {
                    max-width: 1044px;
                    margin: 0 auto;
                    padding: 0 20px;
                }

                .carousel {
                    display: block;
                    text-align: left;
                    position: relative;
                    
                    > input {
                        clip: rect(1px, 1px, 1px, 1px);
                        clip-path: inset(50%);
                        height: 1px;
                        width: 1px;
                        margin: -1px;
                        overflow: hidden;
                        padding: 0;
                        position: absolute;
                        
                        &:nth-of-type(6):checked ~ .carousel__slides .carousel__slide:first-of-type { margin-left: -500%; }
                        &:nth-of-type(5):checked ~ .carousel__slides .carousel__slide:first-of-type { margin-left: -400%; }
                        &:nth-of-type(4):checked ~ .carousel__slides .carousel__slide:first-of-type { margin-left: -300%; }
                        &:nth-of-type(3):checked ~ .carousel__slides .carousel__slide:first-of-type { margin-left: -200%; }
                        &:nth-of-type(2):checked ~ .carousel__slides .carousel__slide:first-of-type { margin-left: -100%; }
                        &:nth-of-type(1):checked ~ .carousel__slides .carousel__slide:first-of-type { margin-left: 0%; }
                        
                        &:nth-of-type(1):checked ~ .carousel__thumbnails li:nth-of-type(1) { box-shadow: 0px 0px 0px 5px rgba(0,0,255,0.5); }
                        &:nth-of-type(2):checked ~ .carousel__thumbnails li:nth-of-type(2) { box-shadow: 0px 0px 0px 5px rgba(0,0,255,0.5); }
                        &:nth-of-type(3):checked ~ .carousel__thumbnails li:nth-of-type(3) { box-shadow: 0px 0px 0px 5px rgba(0,0,255,0.5); }
                        &:nth-of-type(4):checked ~ .carousel__thumbnails li:nth-of-type(4) { box-shadow: 0px 0px 0px 5px rgba(0,0,255,0.5); }
                        &:nth-of-type(5):checked ~ .carousel__thumbnails li:nth-of-type(5) { box-shadow: 0px 0px 0px 5px rgba(0,0,255,0.5); }
                        &:nth-of-type(6):checked ~ .carousel__thumbnails li:nth-of-type(6) { box-shadow: 0px 0px 0px 5px rgba(0,0,255,0.5); }
                    }
                }

                .carousel__slides {
                    position: relative;
                    z-index: 1;
                    padding: 0;
                    margin: 0;
                    overflow: hidden;
                    white-space: nowrap;
                    box-sizing: border-box;
                    display: flex;
                }

                .carousel__slide {
                    position: relative;
                    display: block;
                    flex: 1 0 100%;
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                    transition: all 300ms ease-out;
                    vertical-align: top;
                    box-sizing: border-box;
                    white-space: normal;
                    
                    figure {
                        display: flex;
                        margin: 0;
                    }
                    
                    div {
                        @include aspect-ratio(3, 2);
                        width: 100%;
                    }
                    
                    img {
                        display: block;
                        flex: 1 1 auto;
                        object-fit: cover;
                    }
                    
                    figcaption {
                        align-self: flex-end;
                        padding: 20px 20px 0 20px;
                        flex: 0 0 auto;
                        width: 25%;
                        min-width: 150px;
                    }
                    
                    .credit {
                        margin-top: 1rem;
                        color: rgba(0, 0, 0, 0.5);
                        display: block;        
                    }
                    
                    &.scrollable {
                        overflow-y: scroll;
                    }
                }

                .carousel__thumbnails{
                    overflow-x: scroll;
                    width: 100%;

                    .card-single {
                        display: flex;

                        video{
                            width: 150px;
                            height: 150px;
                            object-fit: cover;
                        }
                        label{
                            margin-right: 10px;
                        }
                    }
                }
            

                // SLIDER 1

            //     input[type=radio] {
            //         display: none;
            //     }
            
            
            //     .card-item {
            //         position: absolute;
            //         width: 60%;
            //         height: 100%;
            //         left: 0;
            //         right: 0;
            //         margin: auto;
            //         transition: transform .4s ease;
            //         cursor: pointer;
            //     }
            
            //     .container {
            //         width: 100%;
            //         max-width: 800px;
            //         max-height: 600px;
            //         height: 100%;
            //         transform-style: preserve-3d;
            //         display: flex;
            //         justify-content: center;
            //         flex-direction: column;
            //         align-items: center;
            //     }

            //     // SEZIONE VIDEO
            
            //     .cards {
            //         position: relative;
            //         width: 100%;
            //         height: 100%;
            //         margin-bottom: 20px;
            //     }
            
            //     video {
            //         width: 100%;
            //         height: 100%;
            //         border-radius: 10px;
            //         object-fit: cover;
            //     }
            
            //     #item-1:checked ~ .cards #song-3, #item-2:checked ~ .cards #song-1, #item-3:checked ~ .cards #song-2 {
            //         transform: translatex(-40%) scale(.8);
            //         opacity: .4;
            //         z-index: 0;
            //     }
            
            //     #item-1:checked ~ .cards #song-2, #item-2:checked ~ .cards #song-3, #item-3:checked ~ .cards #song-1 {
            //         transform: translatex(40%) scale(.8);
            //         opacity: .4;
            //         z-index: 0;
            //     }
            
            //     #item-1:checked ~ .cards #song-1, #item-2:checked ~ .cards #song-2, #item-3:checked ~ .cards #song-3 {
            //         transform: translatex(0) scale(1);
            //         opacity: 1;
            //         z-index: 1;
                
            //         video {
            //             box-shadow: 0px 0px 5px 0px rgba(81, 81, 81, 0.47);
            //         }
            //     }

            //     #item-2:checked ~ .player #test {
            //         transform: translateY(0);
            //     }
            
            //     #item-2:checked ~ .player #test  {
            //         transform: translateY(-40px);
            //     }
            
            //     #item-3:checked ~ .player #test  {
            //         transform: translateY(-80px);
            //     }
               
            
            //     // INFO VIDEO
            //     .player {
            //         background-color: #fff;
            //         border-radius: 8px;
            //         min-width: 40%;
            //         padding: 16px 10px;
            //     }
            
            //     .upper-part {
            //         position: relative;
            //         display: flex;
            //         align-items: center;
            //         margin-bottom: 12px;
            //         height: 36px;
            //         overflow: hidden;
            //     }

            //     .info-area {
            //         width: 100%;
            //         position: absolute;
            //         top: 0;
            //         left: 30px;
            //         transition: transform .4s ease-in;
            //     }     
            
            //     .song-info {
            //         width: calc(100% - 32px);
            //         display: block;
            //     }
            
            //     .song-info .title {
            //         color: #403d40;
            //         font-size: 14px;
            //         line-height: 24px;
            //     }
            
            //     .sub-line {
            //         display: flex;
            //         justify-content: start;
            //         width: 100%;
            //     }
            
            //     .subtitle {
            //         font-size: 12px;
            //         line-height: 16px;
            //         color: #c6c5c6;
            //     }
            }
        }
    }
}



</style>

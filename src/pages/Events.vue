<script>
export default {
    name: 'Events',
    // data() {
    //     return {
    //         images: [
    //             { url: 'aboutme.JPG' },
    //             { url: 'hero.JPG' },
    //             { url: 'aboutme.JPG' },
    //         ],
    //     };
    // },
    // methods: {
    //     getImagePath: function (img) {
    //          return `/img/${img}`
    //     },
    //     openModal(index) {
    //     //  Apre la modale corrispondente all'immagine cliccata
    //     const modalId = 'exampleModal' + index;
    //     new bootstrap.Modal(document.getElementById(modalId)).show();
    //     },
    // },
}
</script>

<template>
    <div class="container" data-aos="zoom-in">
        <div class="row">
            <div class="col">
                <div class="grid-wrapper">
                    <div class="box">
                        <img src="../../public/img/events/FUJIFILM_X-T30_4121x6181_053984.jpg" alt="" />
                    </div>
                    <div class="box">
                        <img src="../../public/img/events/FUJIFILM_X-T30_4160x6240_053693.jpg" alt="" />
                    </div>
                    <div class="box">
                        <img src="../../public/img/events/FUJIFILM_X-T30_4160x6240_053776.jpg" alt="">
                    </div>
                    <div class="box">
                        <img src="../../public/img/events/FUJIFILM_X-T30_4160x6240_053791.jpg" alt="" />
                    </div>
                    <div class="box">
                        <img src="../../public/img/events/FUJIFILM_X-T30_4160x6240_053813.jpg" alt="" />
                    </div>
                    <div class="box">
                        <img src="../../public/img/events/FUJIFILM_X-T30_4160x6240_053824.jpg" alt="" />
                    </div>
                    <div class="box">
                        <img src="../../public/img/events/FUJIFILM_X-T30_4160x6240_053843.jpg" alt="" />
                    </div>
                    <div class="box">
                        <img src="../../public/img/events/FUJIFILM_X-T30_6240x4160_053097.jpg" alt="" />
                    </div>
                    <div class="box">
                        <img src="../../public/img/events/FUJIFILM_X-T30_6240x4160_053684.jpg" alt="" />
                    </div>
                    <div class="box">
                        <img src="../../public/img/events/FUJIFILM_X-T30_6240x4160_053862.jpg" alt="" />
                    </div>
                    <div class="box">
                        <img src="" alt="" />
                    </div>
                    <div class="box">
                        <img src="" alt="" />
                    </div>
                    <div class="box">
                        <img src="" alt="" />
                    </div>
                    <div class="box">
                        <img src="" alt="" />
                    </div>
                    <div class="box">
                        <img src="" alt="" />
                    </div>
                    <div class="box">
                        <img src="" alt="" />
                    </div>
                    <div class="box">
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
        </div>


        <!-- TYPE 1-------------------------------- -->


        <!-- <div class="row">
            <div class="col">
                <div class="grid-wrapper">

                    MODALE DINAMICA

                    <div>
                        <div v-for="(image, index) in images" :key="index">
                            <div class="square" @click="openModal(index)">
                                <img :src="getImagePath(image.url)" alt="Immagine" />
                            </div>
                            <div :id="'exampleModal' + index" class="modal fade" :aria-labelledby="'exampleModalLabel' + index" tabindex="-1" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <img :src="getImagePath(image.url)" alt="Immagine" />
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>

                    MODALE STATICA

                    <div class="square" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <img src="https://images.unsplash.com/photo-1541845157-a6d2d100c931?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80" alt="" />
                    </div>
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <img data-bs-toggle="modal" data-bs-target="#exampleModal" src="https://images.unsplash.com/photo-1541845157-a6d2d100c931?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->


        <!-- TYPE 2-------------------------------- -->


        <!-- <div class="row">
            <div class="col">
                <div id="masonry">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/1.jpg">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/2.jpg">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/3.jpg">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/4.jpg">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/6.jpg">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/8.jpg">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/9.jpg">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/7.jpg">
                </div>
            </div>
        </div> -->


        <!-- TYPE 3-------------------------------- -->


        <!-- <div class="row">
            <div class="col">

                MASONRY PERSONALIZZATO

                <div class="gallery">
                    <img src="../../public/img/paesaggio.webp" class="img-1x1" alt="">
                    <img src="../../public/img/paesaggio.webp" class="img-2x2" alt="">
                    <img src="../../public/img/paesaggio.webp" class="img-2x1" alt="">
                    <img src="../../public/img/paesaggio.webp" class="img-3x1" alt="">
                    <img src="../../public/img/paesaggio.webp" class="img-1x2" alt="">
                </div>
            </div>
        </div> -->


        <!-- TYPE 4-------------------------------- -->


        <!-- <div class="row">
            <div class="col">
                <div class="container-img">
                    <div class="card-img p-2">
                        <img src="../../public/img/paesaggio.webp" alt="">
                    </div>
                    <div class="card-img p-2">
                        <img src="../../public/img/paesaggio.webp" alt="">
                    </div>
                    <div class="card-img p-2">
                        <img src="../../public/img/paesaggio.webp" alt="">
                    </div>
                    <div class="card-img p-2">
                        <img src="../../public/img/paesaggio.webp" alt="">
                    </div>
                    <div class="card-img p-2">
                        <img src="../../public/img/paesaggio.webp" alt="">
                    </div>
                </div>
            </div>
        </div> -->


        <!-- TYPE 5 (COL 3)-------------------------------- -->


        <!-- <div class="row">
            <div class="col">

                <div class="column">
                    <div class="photo">
                        <img src="../../public/img/people/DSCF1667-4.JPG" alt="" />
                    </div>
                    <div class="photo">
                        <img src="../../public/img/people/DSCF6374.JPG" alt="">
                    </div>
                    <div class="photo">
                        <img src="../../public/img/bars/DSCF8151.jpg" alt="">
                    </div>
                    <div class="photo">
                        <img src="../../public/img/bars/DSCF8151.jpg" alt="">
                    </div>
                </div>

                <div class="column">
                    <div class="photo">
                        <img src="../../public/img/bars/DSCF6264-2.JPG" alt="" />
                    </div>
                    <div class="photo">
                        <img src="../../public/img/people/DSCF6454.JPG" alt="" />
                    </div>
                    <div class="photo">
                        <img src="../../public/img/bars/DSCF8151.jpg" alt="">
                    </div>
                </div>

                <div class="column">
                    <div class="photo">
                        <img src="../../public/img/bars/DSCF6264-2.JPG" alt="" />
                    </div>
                    <div class="photo">
                        <img src="../../public/img/people/DSCF9832-2.JPG" alt="" />
                    </div>
                    <div class="photo">
                        <img src="../../public/img/bars/DSCF8151.jpg" alt="">
                    </div>
                </div>
            </div>
        </div> -->


        <!-- TYPE 6 (COL 4)-------------------------------- -->


        <!-- <div class="row">
            <div class="col">

                <div class="column">
                    <div class="box">
                        <img src="../../public/img/people/DSCF1667-4.JPG" alt="" />
                    </div>
                    <div class="box">
                        <img src="../../public/img/people/DSCF6374.JPG" alt="">
                    </div>
                    <div class="box">
                        <img src="../../public/img/bars/DSCF8151.jpg" alt="">
                    </div>
                    <div class="box">
                        <img src="../../public/img/bars/DSCF8151.jpg" alt="">
                    </div>
                    <div class="box">
                        <img src="../../public/img/bars/DSCF6264-2.JPG" alt="" />
                    </div>
                    <div class="box">
                        <img src="../../public/img/people/DSCF6454.JPG" alt="" />
                    </div>
                    <div class="box">
                        <img src="../../public/img/bars/DSCF8151.jpg" alt="">
                    </div>
                    <div class="box">
                        <img src="../../public/img/bars/DSCF6264-2.JPG" alt="" />
                    </div>
                    <div class="box">
                        <img src="../../public/img/people/DSCF9832-2.JPG" alt="" />
                    </div>
                    <div class="box">
                        <img src="../../public/img/bars/DSCF8151.jpg" alt="">
                    </div>
                </div>
            </div>
        </div> -->


        <!-- TYPE 7 (foto tagliate con ZOOM)-------------------------------- --> 


        <!-- <div class="row">
            <div class="col">
                <div class="grid-wrapper">
                    <div class="square">
                        <img src="../../public/img/events/FUJIFILM_X-T30_4121x6181_053984.jpg" alt="" />
                    </div>
                    <div class="square">
                        <img src="../../public/img/events/FUJIFILM_X-T30_4160x6240_053693.jpg" alt="" />
                    </div>
                    <div class="tall">
                        <img src="../../public/img/events/FUJIFILM_X-T30_4160x6240_053776.jpg" alt="">
                    </div>
                    <div class="wide">
                        <img src="../../public/img/events/FUJIFILM_X-T30_4160x6240_053791.jpg" alt="" />
                    </div>
                    <div class="square">
                        <img src="../../public/img/events/FUJIFILM_X-T30_4160x6240_053813.jpg" alt="" />
                    </div>
                    <div class="tall">
                        <img src="../../public/img/events/FUJIFILM_X-T30_4160x6240_053824.jpg" alt="" />
                    </div>
                    <div class="big">
                        <img src="../../public/img/events/FUJIFILM_X-T30_4160x6240_053843.jpg" alt="" />
                    </div>
                    <div class="square">
                        <img src="../../public/img/events/FUJIFILM_X-T30_6240x4160_053097.jpg" alt="" />
                    </div>
                    <div class="wide">
                        <img src="../../public/img/events/FUJIFILM_X-T30_6240x4160_053684.jpg" alt="" />
                    </div>
                    <div class="big">
                        <img src="../../public/img/events/FUJIFILM_X-T30_6240x4160_053862.jpg" alt="" />
                    </div>
                    <div class="tall">
                        <img src="" alt="" />
                    </div>
                    <div class="square">
                        <img src="" alt="" />
                    </div>
                    <div class="square">
                        <img src="" alt="" />
                    </div>
                    <div class="square">
                        <img src="" alt="" />
                    </div>
                    <div class="square">
                        <img src="" alt="" />
                    </div>
                    <div class="big">
                        <img src="" alt="" />
                    </div>
                    <div class="square">
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
        </div> -->



    </div>
</template>

<style lang="scss" scoped>
@use '../styles/app.scss' as *;


.col{
    .grid-wrapper{
        width: 100%;
        margin: 20px auto;
        columns: 4;
        column-gap: 10px;

        .box{
            width: 100%;
            margin-bottom: 10px;
            break-inside: avoid;

            img{
                max-width: 100%;
                border-radius: 10px;
                transition: 1s;

                &:hover{
                    transform: scale(1.3);
                    box-shadow: 0 0 6px 3px rgb(239, 239, 211);
                }
            }
        }
    }

    @media (max-width: 1200px){
        .grid-wrapper{
            width: calc(100% - 40px);
        }
    }

    @media (max-width: 768px){
        .grid-wrapper{
            columns: 2;
        }
    }

    @media (max-width: 480px){
        .grid-wrapper{
            columns: 1;     
        }
    }
}




// TYPE 1 --------------------------------


// .square img{
//     width: 200px;
// }

// .big img{
//     width: 1000px;
// }
// .middle img{
//     width: 500px;
// }


// TYPE 2 --------------------------------


// div#masonry { 
//   display: flex; 
//   flex-direction: column; 
//   flex-wrap: wrap;
//   height: 100vw;
//   max-height: 800px;
//   font-size: 0;
//   overflow-y: hidden;
// }
// div#masonry img {  
//   width: 33.3%;
//   transition: .8s opacity;
// } 

// div#masonry:hover img { opacity: 0.3; }
// div#masonry:hover img:hover { opacity: 1; } 

/* fallback for earlier versions of Firefox */

// @supports not (flex-wrap: wrap) {
//   div#masonry { display: block; }
//   div#masonry img {  
//   display: inline-block;
//   vertical-align: top;
//   }
// }


// TYPE 3 --------------------------------


// .row{
//     .col{

//         // MASONRY PERSONALIZZATO
//         .gallery{
//             display: grid;
//             grid-template-columns: repeat(5, 1fr);
//             grid-auto-flow: dense;
//         }

//         .gallery img {
//             width: 100%;
//             object-fit: cover;
//             padding: 3px;
//         }

//         .gallery > .img-1x1{
//             grid-column-end: span 1;
//             grid-row-end: span 1;
//             aspect-ratio: 1 / 1;
//         }
//         .gallery > .img-2x2{
//             grid-column-end: span 2;
//             grid-row-end: span 2;
//             aspect-ratio: 2 / 2;
//         }
//         .gallery > .img-2x1{
//             grid-column-end: span 2;
//             grid-row-end: span 1;
//             aspect-ratio: 2 / 1;
//         }
//         .gallery > .img-3x1{
//             grid-column-end: span 3;
//             grid-row-end: span 1;
//             aspect-ratio: 3 / 1;
//         }
//         .gallery > .img-1x2{
//             grid-column-end: span 1;
//             grid-row-end: span 2;
//             aspect-ratio: 1 / 2;
//         }
//     }
// }


// TYPE 4 --------------------------------


// .row{
//     .col{

//         .container-img{
//             display: flex;
//         }

//         .card-img{
//             flex: 1;
//             overflow: hidden;
//             transition: 0.5s;
//         }

//         .card-img img{
//             object-fit: cover;
//             filter: grayscale(1); 
//             transform: scale(1);
//             transition: all 0.5s;
//         }

//         .card-img:hover{
//             flex: 2;
//         }

//         .card-img:hover img{
//             filter: none;
//             transform: scale(1.1);
//         }
//     }
// }


// TYPE 5 (COL 3) --------------------------------


// .col{
//     display: flex;
//     gap: 20px;
//     .column{
//         display: flex;
//         flex-direction: column;
//         gap: 20px;

//         .photo img{
//             width: 100%;
//             height: 100%;
//             border-radius: 5px;
//             object-fit: cover;
//             transition: 1s;

//             &:hover{
//                 transform: scale(1.3);
//                 box-shadow: 0 0 6px 3px rgb(239, 239, 211);
//             }
//         }
//     }
// }

// @media (max-width: 768px){

//     .col{
//         flex-direction: column;
//     }
// }


// TYPE 6 (COL 4) --------------------------------


// .col{
//     .column{
//         width: 100%;
//         margin: 20px auto;
//         columns: 4;
//         column-gap: 20px;

//         .box{
//             width: 100%;
//             margin-bottom: 10px;
//             break-inside: avoid;

//             img{
//                 max-width: 100%;
//                 border-radius: 10px;
//                 transition: 1s;

//                 &:hover{
//                     transform: scale(1.3);
//                     box-shadow: 0 0 6px 3px rgb(239, 239, 211);
//                 }
//             }
//         }
//     }

//     @media (max-width: 1200px){
//         .column{
//             width: calc(100% - 40px);
//         }
//     }

//     @media (max-width: 768px){
//         .column{
//             columns: 2;
//         }
//     }

//     @media (max-width: 480px){
//         .column{
//             columns: 1;     
//         }
//     }
// }


// TYPE 7 (foto tagliate con ZOOM) --------------------------------


/* Reset CSS */

// img {
// 	max-width: 100%;
// 	height: auto;
// 	vertical-align: middle;
// 	display: inline-block;
// }

/* Main CSS */

// .grid-wrapper > div > img {
// 	width: 100%;
// 	height: 100%;
// 	object-fit: cover;
// 	border-radius: 2px;
// }

// .grid-wrapper {
// 	display: grid;
// 	grid-gap: 10px;
// 	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
// 	grid-auto-rows: 200px;
// 	grid-auto-flow: dense;
// }

// .grid-wrapper .wide {
// 	grid-column: span 2;
// }
// .grid-wrapper .tall {
// 	grid-row: span 2;
//     transition: 1s;
// }
// .grid-wrapper .big {
//     grid-column: span 2;
//     grid-row: span 2;
// }

// HOVER FILTRO COLORE, INGRADIMENTO FOTO, BOX SHADOW

// .grid-wrapper .square img, .tall img, .wide img, .big img{
//     transition: 1s;
//     width: 100%;
//     height: 200px;
//     object-fit: cover;
//     object-position: top;
// }

// .grid-wrapper .square:hover img{
//     transform: scale(1.4);
//     height: 50vh;
//     box-shadow: 0 0 6px 3px rgb(239, 239, 211);
// }

// .grid-wrapper .tall:hover img{
//     transform: scale(1.5);
//     box-shadow: 0 0 6px 3px rgb(239, 239, 211);
// }

// .grid-wrapper .wide:hover img, .big:hover img{
//     transform: scale(1.3);
//     height: 70vh;
//     box-shadow: 0 0 6px 3px rgb(239, 239, 211);
// }


// @media (max-width: 768px) {
//     .grid-wrapper .tall:hover, .big:hover, .wide:hover, .square:hover{
//         height: 100vh;
//     }
// }
    
</style>
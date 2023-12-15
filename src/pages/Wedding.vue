<script>
export default {
    name: 'Wedding'
}
</script>

<template>
    <div class="container" data-aos="zoom-in">
        <div class="row">
            <div class="col">
                <div class="grid-wrapper">
                    <div class="box">
                        <img src="../../public/img/weeding/DSCF1133.jpg" alt="" />
                    </div>
                    <div class="box">
                        <img src="../../public/img/weeding/DSCF1155.jpg" alt="" />
                    </div>
                    <div class="box">
                        <img src="../../public/img/weeding/DSCF1274.jpg" alt="">
                    </div>
                    <div class="box">
                        <img src="../../public/img/weeding/DSCF1743.jpg" alt="" />
                    </div>
                    <div class="box">
                        <img src="../../public/img/weeding/DSCF2402.jpg" alt="" />
                    </div>
                    <div class="box">
                        <img src="../../public/img/weeding/DSCF2404-1.jpg" alt="" />
                    </div>
                    <div class="box">
                        <img src="../../public/img/weeding/DSCF2407.jpg" alt="" />
                    </div>
                    <div class="box">
                        <img src="../../public/img/weeding/DSCF2408.jpg" alt="" />
                    </div>
                    <div class="box">
                        <img src="../../public/img/weeding/DSCF2446.jpg" alt="" />
                    </div>
                    <div class="box">
                        <img src="../../public/img/weeding/DSCF2627.jpg" alt="" />
                    </div>
                    <div class="box">
                        <img src="../../public/img/weeding/DSCF2752.jpg" alt="" />
                    </div>
                    <div class="box">
                        <img src="../../public/img/weeding/DSCF2757.jpg" alt="" />
                    </div>
                    <div class="box">
                        <img src="../../public/img/weeding/DSCF2929.jpg" alt="" />
                    </div>
                    <div class="box">
                        <img src="../../public/img/weeding/DSCF3124.jpg" alt="" />
                    </div>
                    <div class="box">
                        <img src="../../public/img/weeding/DSCF3194.jpg" alt="" />
                    </div>
                    <div class="box">
                        <img src="../../public/img/weeding/DSCF3421.jpg" alt="" />
                    </div>
                    <div class="box">
                        <img src="../../public/img/weeding/DSCF4655.jpg" alt="" />
                    </div>
                    <div class="box">
                        <img src="../../public/img/weeding/DSCF4906-2.jpg" alt="" />
                    </div>
                    <div class="box">
                        <img src="../../public/img/weeding/DSCF4961.jpg" alt="" />
                    </div>
                    <div class="box">
                        <img src="../../public/img/weeding/DSCF5127.jpg" alt="" />
                    </div>
                    <div class="box">
                        <img src="../../public/img/weeding/IMG_6764-2.jpg" alt="" />
                    </div>
                    <div class="box">
                        <img src="../../public/img/weeding/IMG_6800.jpg" alt="" />
                    </div>
                    <div class="box">
                        <img src="../../public/img/weeding/IMG_6836.jpg" alt="" />
                    </div>
                    <div class="box">
                        <img src="../../public/img/weeding/IMG_6853-1.jpg" alt="" />
                    </div>
                    <div class="box">
                        <img src="../../public/img/weeding/IMG_6866.jpg" alt="" />
                    </div>
                    <div class="box">
                        <img src="../../public/img/weeding/IMG_6870.jpg" alt="" />
                    </div>
                    <div class="box">
                        <img src="../../public/img/weeding/IMG_6912.jpg" alt="" />
                    </div>
                    <div class="box">
                        <img src="../../public/img/weeding/IMG_6914.jpg" alt="" />
                    </div>
                    <div class="box">
                        <img src="../../public/img/weeding/IMG_6917.jpg" alt="" />
                    </div>
                    <div class="box">
                        <img src="../../public/img/weeding/IMG_7169.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
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
    
</style>
<script>
export default {
    name: 'Street'
}
</script>

<template>
    <div class="container" data-aos="zoom-in">
        <div class="row">
            <div class="col">
                <div class="grid-wrapper">
                    <div class="box">
                        <img src="../../public/img//street-pho/FUJIFILM_X-T30_4160x6240_052921.jpg" alt="" />
                    </div>
                    <div class="box">
                        <img src="../../public/img//street-pho/FUJIFILM_X-T30_4160x6240_052954.jpg" alt="" />
                    </div>
                    <div class="box">
                        <img src="../../public/img//street-pho/FUJIFILM_X-T30_4160x6240_052958.jpg" alt="">
                    </div>
                    <div class="box">
                        <img src="../../public/img//street-pho/FUJIFILM_X-T30_4160x6240_054250.jpg" alt="" />
                    </div>
                    <div class="box">
                        <img src="../../public/img//street-pho/FUJIFILM_X-T30_4160x6240_054251.jpg" alt="" />
                    </div>
                    <div class="box">
                        <img src="../../public/img//street-pho/FUJIFILM_X-T30_6240x4160_052944.jpg" alt="" />
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
<script>
export default {
    name: 'Hospitality'
}
</script>

<template>
    <div class="container" data-aos="zoom-in">
        <div class="row">
            <div class="col">
                <div class="grid-wrapper">
                    <div class="box">
                        <img src="../../public/img/bars/DSCF6264-2.JPG" alt="" />
                    </div>
                    <div class="box">
                        <img src="../../public/img/bars/DSCF8104.jpg" alt="" />
                    </div>
                    <div class="box">
                        <img src="../../public/img/bars/DSCF8151.jpg" alt="">
                    </div>
                    <div class="box">
                        <img src="../../public/img/bars/DSCF8159.jpg" alt="" />
                    </div>
                    <div class="box">
                        <img src="../../public/img/bars/DSCF8163.jpg" alt="" />
                    </div>
                    <div class="box">
                        <img src="../../public/img/bars/DSCF8178.jpg" alt="" />
                    </div>
                    <div class="box">
                        <img src="../../public/img/bars/DSCF8427.JPG" alt="" />
                    </div>
                    <div class="box">
                        <img src="../../public/img/bars/DSCF8452.JPG" alt="" />
                    </div>
                    <div class="box">
                        <img src="../../public/img/bars/DSCF8457.JPG" alt="" />
                    </div>
                    <div class="box">
                        <img src="../../public/img/bars/DSCF9211-3.jpg" alt="" />
                    </div>
                    <div class="box">
                        <img src="../../public/img/bars/DSCF9215.JPG" alt="" />
                    </div>
                    <div class="box">
                        <img src="../../public/img/bars/DSCF9222.JPG" alt="" />
                    </div>
                    <div class="box">
                        <img src="../../public/img/bars/DSCF9240.JPG" alt="" />
                    </div>
                    <div class="box">
                        <img src="../../public/img/bars/FUJIFILM_X-T30_4039x6059_052936.jpg" alt="" />
                    </div>
                    <div class="box">
                        <img src="../../public/img/bars/FUJIFILM_X-T30_4066x6099_052930.jpg" alt="" />
                    </div>
                    <div class="box">
                        <img src="../../public/img/bars/FUJIFILM_X-T30_4105x6220_052927.jpg" alt="" />
                    </div>
                    <div class="box">
                        <img src="../../public/img/bars/FUJIFILM_X-T30_4105x6220_054288.JPG" alt="" />
                    </div>
                    <div class="box">
                        <img src="../../public/img/bars/FUJIFILM_X-T30_4116x6174_052923.jpg" alt="" />
                    </div>
                    <div class="box">
                        <img src="../../public/img/bars/FUJIFILM_X-T30_4160x6240_054260.jpg" alt="" />
                    </div>
                    <div class="box">
                        <img src="../../public/img/bars/FUJIFILM_X-T30_4160x6240_058109.jpg" alt="" />
                    </div>
                    <div class="box">
                        <img src="../../public/img/bars/FUJIFILM_X-T30_6240x4160_058087.jpg" alt="" />
                    </div>
                    <div class="box">
                        <img src="../../public/img/bars/FUJIFILM_X-T30_6240x4160_058099.jpg" alt="" />
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
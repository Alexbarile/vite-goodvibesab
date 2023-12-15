<script>
export default {
    name: 'People'
}
</script>

<template>
    <div class="container" data-aos="zoom-in">
        <div class="row">
            <div class="col">
                <div class="grid-wrapper">
                    <div class="box">
                        <img src="../../public/img/people/DSCF1667-4.JPG" alt="" />
                    </div>
                    <div class="box">
                        <img src="../../public/img/people/DSCF1712-2.JPG" alt="" />
                    </div>
                    <div class="box">
                        <img src="../../public/img/people/DSCF6374.JPG" alt="">
                    </div>
                    <div class="box">
                        <img src="../../public/img/people/DSCF6404.JPG" alt="" />
                    </div>
                    <div class="box">
                        <img src="../../public/img/people/DSCF6411.JPG" alt="" />
                    </div>
                    <div class="box">
                        <img src="../../public/img/people/DSCF6454.JPG" alt="" />
                    </div>
                    <div class="box">
                        <img src="../../public/img/people/DSCF6455.JPG" alt="" />
                    </div>
                    <div class="box">
                        <img src="../../public/img/people/DSCF6492-2.JPG" alt="" />
                    </div>
                    <div class="box-2">
                        <img src="../../public/img/people/PHCF7465.JPG" alt="" />
                    </div>
                    <div class="box">
                        <img src="../../public/img/people/DSCF7420.JPG" alt="" />
                    </div>
                    <div class="box">
                        <img src="../../public/img/people/DSCF7573-3.JPG" alt="" />
                    </div>
                    <div class="box">
                        <img src="../../public/img/people/DSCF9154.JPG" alt="" />
                    </div>
                    <div class="box">
                        <img src="../../public/img/people/DSCF9269.JPG" alt="" />
                    </div>
                    <div class="box">
                        <img src="../../public/img/people/DSCF9832-2.JPG" alt="" />
                    </div>
                    <div class="box">
                        <img src="../../public/img/people/DSCfggF1643-12.JPG" alt="" />
                    </div>
                    <div class="box">
                        <img src="../../public/img/people/FUJIFILM_X-T30_4160x6240_057864.JPG" alt="" />
                    </div>
                    <div class="box">
                        <img src="../../public/img/people/FUJIFILM_X-T30_4160x6240_057895.JPG" alt="" />
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

        .box-2{
            width: 100%;
            margin-bottom: 10px;
            break-inside: avoid;

            img{
                max-width: 130%;
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

        .box-2 img{
            width: 100%;
        }
    }

    @media (max-width: 480px){
        .grid-wrapper{
            columns: 1;
        }

        .box-2 img{
            width: 100%;
        }
    }
}

</style>
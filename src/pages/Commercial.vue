<script>
export default {
    name: 'Commercial'
}
</script>

<template>
    <div class="container" data-aos="zoom-in">
        <div class="row">
            <div class="col">
                <div class="grid-wrapper">
                    <div class="box">
                        <img src="../../public/img/commercial/D1970DA2-418C-4E1A-8CAD-E2466CEBEF61.PNG" alt="" />
                    </div>
                    <div class="box">
                        <img src="../../public/img/commercial/DSCF9055.JPG" alt="" />
                    </div>
                    <div class="box">
                        <img src="../../public/img/commercial/DSCF9076.JPG" alt="">
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
                        <img src="PG" alt="" />
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
<script>
export default{
    name: "Portfolio",

    data() {
        return {
            menuItems: [
                {
                    image: 'DSCF9269.JPG',
                    category: 'People',
                    routeName: 'people',
                },
                {
                    image: 'DSCF8452.JPG',
                    category: 'Hospitality Industry',
                    routeName: 'hospitality',
                },
                {
                    image: 'DSCF1155.jpg',
                    category: 'Wedding',
                    routeName: 'wedding',
                },
                {
                    image: 'DSCF9076.JPG',
                    category: 'Commercial',
                    routeName: 'commercial',
                },
                {
                    image: 'FUJIFILM_X-T30_4160x6240_053824.jpg',
                    category: 'Events',
                    routeName: 'events',
                },
                {
                    image: 'FUJIFILM_X-T30_4160x6240_052958.jpg',
                    category: 'Street Photography',
                    routeName: 'street',
                },
            ]
        }
    },
    methods: {
        getImagePath: function (img) {
            return `/img/portfolio/${img}`
        }
    },
    
}

</script>

<template>
    <section>
        <div class="container">
            <div class="row">

                <!-- CARD V-FOR -->

                <div v-for="(item, index) in menuItems" :key="index" class="col-lg-4 col-sm-12 p-1" data-aos="fade-up">

                    <!-- click su tutta l'immagine -->

                    <!-- <router-link :to="{name: item.routeName}">
                        
                    </router-link> -->
                    
                    <div class="hero-image" :style="{ backgroundImage: 'url(' + getImagePath(item.image) + ')' }">
                        <div class="hero-text">
                            <h3 class="pb-3">{{item.category}}</h3>
                            <router-link :to="{name: item.routeName}">
                                <button>Look</button>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../styles/app.scss' as *;

.row{

    .hero-image{
        background-color: #cccccc;
        height: 700px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        transform: scale(1);
        transition: all 0.5s;

        &:hover{
            transform: scale(1.02);
        }
    }

    .hero-text{
        text-align: center;
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translate(-50%, -10%);
        color: white;

        h3{
            font-size: 30px;
            font-weight: 400;
            white-space: nowrap;
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

</style>

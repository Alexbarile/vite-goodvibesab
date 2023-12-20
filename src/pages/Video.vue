<script>
export default{
    name: "Video",

    data() {
        return {
            // menuItems: [
            //     {
            //         label: 'candles3.webp',
                    
            //     },
    
            // ]
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
                <h1>prova</h1>

                <!-- <div v-for="(i, index) in candles" :key="index" class="col width-4">
                    <div class="candles">
                        <img :src="getImagePath(i.label)" alt="candles">
                        
                    </div>
                </div> -->

            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../styles/app.scss' as *;



</style>

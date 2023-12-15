<script>
export default {
    name: 'ThankYou'
}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col text-center">
                <h2>Grazie per averci contattato</h2>
                <router-link :to="{name: 'portfolio'}" class="btn btn-primary">
                    Torna ai Post
                </router-link>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    
</style>
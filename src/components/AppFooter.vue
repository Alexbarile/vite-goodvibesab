<script>
export default{
    name: 'AppFooter',
    
}
</script>

<template>
    <footer>
        <div class="container">
            <div class="row">
                <div class="col d-flex justify-content-center flex-column align-items-center">
                    <div class="py-4">
                        <a href="https://www.instagram.com/wanderwithkri/" target="_blank">
                            <i class="fa-brands fa-instagram"></i>
                        </a>
                    </div>
                    <div>
                        <p>&#169; 2023 Wander with Kri.</p>
                    </div>
                </div>
            </div>

        </div>
    </footer>
</template>

<style lang="scss" scoped>
@use '../styles/app.scss' as *;

footer{
   
    .row{
        .col{
            a{
                color: black;
                font-size: 40px;
                transition: 0.3s;

                &:hover{
                    color: gray;
                }

                i{
                    transform: scale(1);

                    &:hover{
                        transform: scale(1.05);
                    }
                }
            }

        }
    }
}

    

</style>

<script>
export default{
    name: 'AppFooter',
    
}
</script>

<template>
    <footer>
        <div class="container">
            <div class="row pt-4">
                <div class="col d-flex justify-content-center">
                    <div>
                        <h4>GET CONNECTED</h4>
                    </div>
                </div>
            </div>
            <div class="row pb-4">
                <div class="col d-flex justify-content-center">
                    <div class="px-2">
                        <a href="https://instagram.com/goodvibesab" target="_blank">
                            <div class="circle">
                                <i class="fa-brands fa-instagram"></i>
                            </div>
                        </a>
                    </div>
                    <div class="px-2">
                        <a href="https://www.threads.net/@goodvibesab" target="_blank">
                            <div class="circle">
                                <i class="fa-brands fa-threads"></i>
                            </div>
                        </a>
                    </div>
                    <div class="px-2">
                        <a href="https://www.tiktok.com/@alex__barile" target="_blank">
                            <div class="circle">
                                <i class="fa-brands fa-tiktok"></i>
                            </div>
                        </a>
                    </div>
                    <div class="px-2">
                        <a href="https://open.spotify.com/playlist/7FQL4Bt3xJWSKvgaaAqTPE?si=d2759297f7c14fb9" target="_blank">
                            <div class="circle">
                                <i class="fa-brands fa-spotify"></i>
                            </div>
                        </a>
                    </div>
                    <div class="px-2">
                        <a href="https://soundcloud.com/alessandro_barile" target="_blank">
                            <div class="circle">
                                <i class="fa-brands fa-soundcloud"></i>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col d-flex justify-content-center">
                    <div>
                        <p>&#169; 2023 Good Vibes | DJ Alessandro Barile.</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
@use '../styles/app.scss' as *;

footer{
    background-color: yellow;
   
    .row{
        .col{
            a{
                color: black;
                font-size: 16px;
                transition: 0.3s;
                
                &:hover{
                    color: white;
                }
                .circle{
                    position: relative;
                    border: 2px solid black;
                    width: 29px;
                    height: 29px;
                    border-radius: 100%;

                    &:hover{
                        background-color: black;
                        border: 2px solid black;
                    }
                    
                    i{
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                    }
                }
            }

            h4{
                font-size: 20px;
                font-weight: 700;
            }
        }
    }
}

    

</style>

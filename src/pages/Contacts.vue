<script>

export default {
    name: 'Contacts',
}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12" data-aos="fade-right">
                <div class="hero-contact">
                    <img src="../../public/img/aboutme.JPG" alt="">
                </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 bg-copy" data-aos="fade-left" >
                <div class="copy">

                    <!-- CONTACT -->

                    <div class="contact">
                        <h4 class="text-center">Informazioni contatto</h4>
                        <div class="pb-1">
                            <i class="fa-regular fa-envelope pe-3"></i>
                            <a target="_blank" href="mailto:kristinaprilipko7@gmail.it">kristinaprilipko7@gmail.it</a>
                        </div>
                        <div>
                            <i class="fa-brands fa-whatsapp pe-3"></i>
                            <a target="_blank" href="tel:+393884385291">+39 3884385291</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../styles/app.scss' as *;

.row{
    .col-lg-6, .col-md-6{
        padding: 0px !important;
        
        .hero-contact{
            img{
                width: 100%;
                height: 100%;
            }
        }

        .copy{
            padding: 150px 120px;
            .form {
                display: flex;
                flex-direction: column;
                gap: 10px;
                padding: 20px;
                border-radius: 20px;
                position: relative;
            }
            .form label {
                position: relative;
            }
    
            .form label .input {
                border: 1px solid white;
                background-color: transparent;
                padding: 11px 10px;
                color: white;
                width: 100%;
                // width: 100%;
                // padding: 10px 10px 20px 10px;
                // outline: 0;
                // border: 1px solid rgba(105, 105, 105, 0.397);
                // border-radius: 10px;
            }
            
            .form label .input + span {
                position: absolute;
                left: 10px;
                top: 15px;
                color: grey;
                font-size: 0.9em;
                cursor: text;
                transition: 0.3s ease;
            }
    
            .form label .input:placeholder-shown + span {
                top: 15px;
                font-size: 0.9em;
            }
    
            .form label .input:focus + span,.form label .input:valid + span {
                top: 30px;
                font-size: 0.7em;
                font-weight: 600;
            }
    
            .form label .input:valid + span {
                color: green;
            }
    
            .submit {
                border: 1px solid white;
                background-color: transparent;
                padding: 11px 70px;
                color: white;
                transition: 0.3s;
                // border: none;
                // outline: none;
                // background-color: royalblue;
                // padding: 10px 50px 10px 50px;
                // border-radius: 10px;
                // color: #fff;
                // font-size: 16px;
                // transform: .3s ease;
            }
    
            .submit:hover {
                background-color: rgb(245, 244, 244);
                color: gray;
                border: 1px solid gray;
            }
    
            @keyframes pulse {
                from {
                    transform: scale(0.9);
                    opacity: 1;
                }
    
                to {
                    transform: scale(1.8);
                    opacity: 0;
                }
            }

            .contact{
                padding: 60px 30px;

                i{
                    font-size: 25px;
                }

                a{
                    text-decoration: none;
                    color: black;
                    transition: 0.3s;

                    &:hover{
                        color: gray;
                    }
                }
            }
        }
        @media (max-width: 992px) {
            .copy{
                padding: 120px 50px;
            }
        }
    }

    .bg-copy{
        background-color: rgb(226, 226, 226);
    }
}
    
</style>
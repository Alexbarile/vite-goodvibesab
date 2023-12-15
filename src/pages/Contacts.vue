<script>
import axios from 'axios';
import {store} from '../store';

export default {
    name: 'Contacts',
    // data() {
    //     return {
    //         name: '',
    //         surname: '',
    //         email: '',
    //         phone: '',
    //         message: '',
    //         store,
    //         errors: {},
    //         success: false,
    //         loading: false,
    //     }
    // },
    // methods: {
    //     sendForm(){
    //         const data = {
    //             name: this.name,
    //             surname: this.surname,
    //             email: this.email,
    //             phone: this.phone,
    //             message: this.message,
    //         }

    //         // per non far rinviare l'email all'utente
    //         this.loading = true;

    //         // per far togliere gli errori della compilazine del form
    //         this.errors = {};

    //         axios.post(`${this.store.baseUrl}/api/contacts`, data).then((response) => {
    //             if(!response.data.success){
    //                 this.errors = response.data.errors
    //                 this.loading = false;
    //             }
    //             else{
    //                 this.name = ''
    //                 this.surname = ''
    //                 this.email = ''
    //                 this.phone = ''
    //                 this.message = ''
    //                 this.success = true
    //                 this.loading = false

    //                 setTimeout(() => {
    //                     this.$router.push({'name' : 'thank-you'})
    //                 }, 5000);
    //             }
    //         })
    //     }
    // },
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

                    <!-- FORM -->

                    <form class="form">
                        <label>
                            <input required placeholder="" type="text" class="input">
                            <span>Nome</span>
                        </label>

                        <label>
                            <input required placeholder="" type="text" class="input">
                            <span>Cognome</span>
                        </label>
                                
                        <label>
                            <input required placeholder="" type="number" class="input">
                            <span>Telefono</span>
                        </label> 
                            
                        <label>
                            <textarea required placeholder="" type="textarea" class="input"></textarea>
                            <span>Messaggio</span>
                        </label>
                        <router-link :to="{name: 'thank-you'}" class="text-center">
                            <button class="submit">
                                Invia
                            </button>
                        </router-link>
                    </form>

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


            <!-- FORM -->

            <!-- <div class="col-12">
                <h4 class="text-center">Scrivici</h4>
                <form @submit.prevent="sendForm">
                    <div class="row">
                        <div class="col-12 m-3">
                            <label for="nome" class="control-label">Nome</label>
                            <input type="text" class="form-control" :class="{'is-invalid' : errors.name}" name="nome" id="nome" placeholder="Nome" v-model="name">
                            <div v-for="{error, index} in errors.name" :key="`message-error-${index}`" class="text-danger">
                                {{ error }}
                            </div>
                        </div>
                        <div class="col-12 m-3">
                            <label for="cognome" class="control-label">Cognome</label>
                            <input type="text" class="form-control" name="cognome" id="cognome" placeholder="Cognome" v-model="surname">
                            <div v-for="{error, index} in errors.surname" :key="`message-error-${index}`" class="text-danger">
                                {{ error }}
                            </div>
                        </div>
                        <div class="col-12 m-3">
                            <label for="email" class="control-label">Email</label>
                            <input type="text" class="form-control" name="email" id="email" placeholder="Email" v-model="email">
                            <div v-for="{error, index} in errors.email" :key="`message-error-${index}`" class="text-danger">
                                {{ error }}
                            </div>
                        </div>
                        <div class="col-12 m-3">
                            <label for="telefono" class="control-label">Telefono</label>
                            <input type="text" class="form-control" name="telefono" id="telefono" placeholder="Telefono" v-model="phone">
                            <div v-for="{error, index} in errors.phone" :key="`message-error-${index}`" class="text-danger">
                                {{ error }}
                            </div>
                        </div>
                        <div class="col-12 m-3">
                            <label for="messaggio" class="control-label">Messaggio</label>
                            <textarea class="form-control" name="messaggio" id="messaggio" placeholder="Messaggio" v-model="message"></textarea>
                            <div v-for="{error, index} in errors.message" :key="`message-error-${index}`" class="text-danger">
                                {{ error }}
                            </div>
                        </div>
                        <div class="col-12 m-3 d-flex justify-content-center">
                            <button type="submit" class="btn btn-success" :disabled="loading">
                                {{ loading ? 'Invio..' : 'Invia'}}
                            </button>
                        </div>
                    </div>
                </form>
            </div> -->
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
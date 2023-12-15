<script>
export default{
    name: 'AppHeader',
    data() {
        return {
            isMenuOpen: false,
            menuItems: [
                {
                    label: 'Home',
                    routeName: 'home',
                },
                {
                    label: 'Portfolio',
                    routeName: 'portfolio',
                },
                {
                    label: 'About me',
                    routeName: 'about_me',
                },
                {
                    label: 'Contact',
                    routeName: 'contacts',
                },
            ],
            menuCategory: [
                {
                    label: 'People',
                    routeName: 'people',
                },
                {
                    label: 'Hospitality',
                    routeName: 'hospitality',
                },
                {
                    label: 'Wedding',
                    routeName: 'wedding',
                },
                {
                    label: 'Commercial',
                    routeName: 'commercial',
                },
                {
                    label: 'Events',
                    routeName: 'events',
                },
                {
                    label: 'Street',
                    routeName: 'street',
                },
            ]
        }
    },

    // Funzione per far chiudere il menu UL senza premere sulla X, schiacciando sullo schermo

    mounted() {
        document.addEventListener('click', this.handleClickOutside);
    },
    beforeDestroy() {
        document.removeEventListener('click', this.handleClickOutside);
    },
    methods: {
        handleClickOutside(event) {
            const menuToggle = this.$el.querySelector('#menu-toggle');

        // Check if the click is outside of the menu and toggle button
            if (menuToggle && !menuToggle.contains(event.target)) {
                this.isMenuOpen = false;
            }
        },
    },
}
</script>

<template>
    <header>
            <div class="container">
                <div class="row d-flex justify-content-between align-items-center">
                    <div class="col">
                        <router-link :to="{name: 'home'}" class="logo">
                            <h1>Wander with Kri</h1>
                        </router-link>
                    </div>
                    
                    <!-- NAVBAR COMPLETA -->

                    <div class="col d-flex justify-content-end d-md-block d-none">
                        <nav class="d-flex justify-content-end">
                            <ul>
                                <li v-for="(item, index) in menuItems" :key="index">
                                    <router-link :to="{name: item.routeName}" class="list-item">
                                        {{ item.label }}
                                    </router-link>
                                </li>
                                <li class="d-none" v-for="(item, index) in menuCategory" :key="index">
                                    <router-link :to="{name: item.routeName}" class="list-item">
                                        {{ item.label }}
                                    </router-link>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <!-- NAVBAR HAMBURGER -->

                    <div class="col d-flex justify-content-end d-md-none d-block">
                        <nav class="d-flex justify-content-end">
                            <input id="menu-toggle" type="checkbox" v-model="isMenuOpen" />
                            <label class='menu-button-container' for="menu-toggle">
                                <div class='menu-button'></div>
                            </label>
                            <ul class="menu" v-show="isMenuOpen">
                                <li v-for="(item, index) in menuItems" :key="index">
                                    <router-link :to="{name: item.routeName}" class="list-item">
                                        {{ item.label }}
                                    </router-link>
                                </li>
                                <li class="d-none" v-for="(item, index) in menuCategory" :key="index">
                                    <router-link :to="{name: item.routeName}" class="list-item">
                                        {{ item.label }}
                                    </router-link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>  
            </div>
    </header>
</template>

<style lang="scss" scoped>
@use '../styles/app.scss' as *;
    header{
        .row{
            padding: 10px;
            .col{

                .logo{
                    text-decoration: none;
                    color: black;
                    h1{
                        font-size: 25px;
                        margin: 0 !important;
                    }
                }

                ul{
                    display: flex;
                    list-style-type: none;
                    margin: 0 !important;
                    padding: 0 !important;

                    li{
                        padding: 15px;
                        .list-item{
                            text-decoration: none;
                            color: black;
                            white-space: nowrap;
                            transition: 0.3s;
                            
                            &:hover{
                                color: gray;
                            }
                        }
                    }
                }

                @media (max-width: 768px) {
                    .logo{
                        display: flex;
                        justify-content: center;
                    }
                }

                // HAMBURGER

                .menu {
                    display: flex;
                    flex-direction: row;
                    list-style-type: none;
                    margin: 0;
                    padding: 0;
                    z-index: 9999;
                }

                .menu > li {
                    overflow: hidden;
                }

                .menu-button-container {
                    display: none;
                    height: 100%;
                    width: 30px;
                    cursor: pointer;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                #menu-toggle {
                    display: none;
                }

                // TOGGLE HAMBURGER

                .menu-button,
                .menu-button::before,
                .menu-button::after {
                    display: block;
                    background-color: black;
                    position: absolute;
                    height: 4px;
                    width: 30px;
                    transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
                    border-radius: 2px;
                }

                .menu-button::before {
                content: '';
                    margin-top: -8px;
                }

                .menu-button::after {
                content: '';
                    margin-top: 8px;
                }

                #menu-toggle:checked + .menu-button-container .menu-button::before {
                    margin-top: 0px;
                    transform: rotate(405deg);
                }

                #menu-toggle:checked + .menu-button-container .menu-button {
                    background: rgba(255, 255, 255, 0);
                }

                #menu-toggle:checked + .menu-button-container .menu-button::after {
                    margin-top: 0px;
                    transform: rotate(-405deg);
                }

                @media (max-width: 768px) {
                    .menu-button-container {
                        display: flex;
                    }
                    .menu {
                        position: absolute;
                        top: 12%;
                        margin-top: 50px;
                        left: 0;
                        flex-direction: column;
                        width: 100%;
                        justify-content: center;
                        align-items: center;
                    }
                    #menu-toggle ~ .menu li {
                        height: 0;
                        margin: 0;
                        padding: 0;
                        border: 0;
                        transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
                    }
                    #menu-toggle:checked ~ .menu li {
                        border-top: 1px solid #333;
                        height: 2.5em;
                        padding: 0.5em;
                        transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
                    }
                    .menu > li {
                        display: flex;
                        justify-content: center;
                        margin: 0;
                        padding: 0.5em 0;
                        width: 100%;
                        color: white;
                        background-color: rgba(255, 255, 255, 0.584);
                    }
                    .menu > li:not(:last-child) {
                        border-bottom: 1px solid #444;
                    }
                }
            }
        }
    }

</style>

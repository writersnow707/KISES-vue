<script setup>
    import { headerNav } from '../constants';
</script>

<template>
   <header id="header" role="banner">
        <div class="header_inner">
            <div class="header_logo">
                <h1>
                    <a href="#">&#128274; KISES
                    <!--<em>한 국 보 안 교 육 원</em>!-->
                    </a>
                </h1>
            </div>
            <nav 
                class="header_nav"
                :class="{show: isNavVisible}" 
                 role='navigation' 
                 aria-label='메인메뉴'
            >
                <ul>
                    <li v-for="(nav,key) in headerNav" :key="key">
                        <a :href="nav.url" @click="scrollLink($event)">{{nav.title}}</a>
                    </li>
                </ul>
            </nav>
            <div 
                class="header_nav_mobile" 
                id="headerToggle" 
                aria-controls="primary-menu" 
                :aria-expanded="isNavVisible.toString()" 
                role="button"
                tabindex="0"
                @click="toggleMobileMenu"
            >
                <span></span>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        data(){
            return{
               isNavVisible:false, 
            };
        },
        methods:{
            toggleMobileMenu(){
                this.isNavVisible = !this.isNavVisible;
            },
            scrollLink(event){
                event.preventDefault();

                const targetId = event.target.getAttribute("href");
                const targetElement = document.querySelector(targetId);

                if(targetElement){
                    targetElement.scrollIntoView({behavior:"smooth"});
                }
            }
        }
    }
</script>

<style lang="scss">
@import "@/assets/scss/mixin";
#header {
   @include position-fixed;
   z-index: 10000;
}
.header_inner {
    @include flex-between;
    background-color: rgba(232, 6, 240, 0.1);
    backdrop-filter: blur(15px);
    padding: 1rem; // 메뉴바(box) 크기

    .header_logo {
        font-size: 1.2rem;
        text-align: center; // 한국보안교육원 글씨 위치 
        text-transform: uppercase; // 로고 대문자(uppercase) 및 소문자(lowercase)
        line-height: 1; // 상단 메뉴바 box 크기 

        em {
            font-size: 18px; // 한국보안교육원 글씨 크기
            display: block; // 한국보안교육원 글씨 위치
            color: var(--black200); 
        }
    }
    .header_nav {
        @media (max-width: 800px) { // 창 최소화 시 메뉴버튼 생성(800px)
            display: none;

            &.show {
                display: block;

                ul {
                    display: block;
                    position: absolute;
                    right: 0;
                    top: 68px;
                    background-color: rgba(192, 27, 49, 0.1);
                    backdrop-filter: blur(15px);
                    z-index: 10000;
                    min-width: 150px;
                    padding: 15px 0;
                    
                    li {
                        display: block;
                        text-align: right;
                        
                        a{
                            display: inline-block;
                            padding: 10px;
                        }
                    }
                }
            }
            &.show + .header_nav_mobile span::before {
                width: 20px; 
            }
            &.show + .header_nav_mobile span::after {
                width: 20px; 
            }
        }
         li {
            display: inline;
    
            a {
                text-transform: uppercase;
                font-size: 14px;
                padding: 14px;
                position: relative; 
    
                &::before {
                    content: '';
                    width: calc(100% - 28px);
                    height: 2px;
                    background-color: var(--black);
                    position: absolute;
                    left: 14px;
                    bottom: 10px;
                    transform: scaleX(0);
                    transition: all 0.3s;
                }
                &:hover::before {
                    transform: scaleX(1);
                }
            }
        }        
    }
    .header_nav_mobile {
        display: none;
        width: 40px;
        height: 40px;
        cursor: pointer;

        @media (max-width: 800px){
            display: block;
        }

        span {
            display: block;
            width: 40px;
            height: 2px;
            background-color: var(--black);
            margin-top: 19px;
            position: relative;

            &::before {
                content: "";
                width: 40px;
                height: 2px;
                background-color: var(--black);
                position: absolute;
                right: 0;
                top: 6px;
                transition: width 0.3s;  
            }
            &::after {
                content: "";
                width: 40px;
                height: 2px;
                background-color: var(--black);
                position: absolute;
                left: 0;
                bottom: 6px;
                transition: width 0.3s;
            }
        }
    } 
}
    
</style>
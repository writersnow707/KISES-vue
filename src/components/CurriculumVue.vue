<script setup>
    import { curriculumText } from '../constants';
</script>

<template>
   <section id="curriculum">
            <div class="curriculum_inner">
                <h2 class="curriculum_title">
                    학습과정 <em>어떤 것을 배우게 되나요?</em>
                </h2>
                <div class="curriculum_wrap">
                    <article class="curriculum_item s1" v-for="(curriculum, key) in curriculumText" :key="key">
                        <span class="num">{{key+1}}. {{ curriculum.title }}</span>
                        <h2 class="title">
                           {{ curriculum.textTitle }}<br><br>
                        </h2>
                        <div class="subhead">
                           <!--<img class="img" v-bind:src="curriculum.img" />-->
                           Ⅰ.{{ curriculum.textSubheading[0] }}<br>
                           Ⅱ.{{ curriculum.textSubheading[1] }}<br>
                           Ⅲ.{{ curriculum.textSubheading[2] }}<br>
                        </div>
                        <!-- <div class="btn">
                            <a :href="curriculum.code">code</a>
                            <a :href="curriculum.view">view</a>
                        </div>
                        <div class="info">
                            <span>{{curriculum.info[0]}}</span>
                            <span>{{curriculum.info[1]}}</span>
                            <span>{{curriculum.info[2]}}</span>
                        </div> -->
                    </article>                                    
                </div>
            </div>
        </section>
</template>

<style lang="scss">
@import "@/assets/scss/mixin";

   .curriculum_inner{
        padding: 16px;

   .curriculum_title{
      position: sticky;
      top: 70px;
      left: 0;
      width: 70%;
      height: 5vw;
      font-size: 4vw;
      font-weight: 900;
      line-height: 1.5;
      font-family: var(--mainKor-font);
      text-transform: uppercase;
      color: var(--black100);
      border-bottom: 0.4vw solid var(--black100);
      margin-bottom: 100px;

      @media (max-width: 800px){
         width: 100%;
            margin-bottom: 10vw;
            font-size: 30px;
            height: auto;
            top: 68px;
            z-index: 1000;
            background-color: var(--mainBg-color);      
         }
      
      em{
         font-size: 1.25rem;
         font-weight: 400;
         line-height: 2;
     }
   }

   .curriculum_wrap{
      .curriculum_item{
         height: 70vh; // 박스 높이
         background-color: #ccc;
         @include flex-center;
         flex-direction: column;
         position: sticky;
         left: 0;

         &:nth-child(1){
            background-color: var(--subBg100);
            top: 180px;

            @media (max-width: 800px){
               top: 140px; 
            }
         }
         &:nth-child(2){
            background-color: var(--subBg200);
            top: 200px;

            @media (max-width: 800px){
               top: 160px; 
            }
         }
         &:nth-child(3){
            background-color: var(--subBg300);
            top: 220px;

            @media (max-width: 800px){
               top: 180px; 
            }
         }
         &:nth-child(4){
            background-color: var(--subBg400);
            top: 240px;
            
            @media (max-width: 800px){
               top: 200px; 
            }
         }
         .num{
            font-size: 4vw;
            line-height: 1;
            font-weight: 600;
            font-family: var(--mainKor-font);
            position: absolute;
            left: 1vw;
            top: 1vw;

            @media (max-width: 800px){
               font-size: 80px;
               left: 20px;
               top: 20px;
            }
        } 
        /* .text{
         text-align: center;
         margin-bottom: 1rem;

            div{
               font-size: 3vw;
               line-height: 1;
               font-weight: 900;
               text-decoration: underline;
               font-family: var(--mainEng-font);

               @media (max-width: 800px){
                  font-size: 26px;
               }
            }
         } */
         .title{
            font-family: var(--mainKor-font);
            margin-bottom: 20rem;
            text-align:center;
            
            /* img { // 박스 내의 이미지를 구성
               position: sticky;
               border-radius: 50px;
               max-width: 500px;
               max-height: 35vh;
            } */
         }
         /*
         .subhead {
            display: flex;
            justify-content: space-between;
         }*/
         .btn {
            a {
               text-decoration: underline;
               text-transform: uppercase;
               color: var(--black200);
               font-size: 1rem;

               &:hover {
                  color: var(--black); 
               }
            }
         }
         .info{
            position: absolute;
            left: 0;
            bottom: 3%;
            width: 98%;
            margin-left: 1%;
            border-top: 1px solid var(--black);
            border-bottom: 1px solid var(--black);
            display: flex;   
            justify-content: space-between;

            @media (max-width: 800px){
               flex-direction: column;
               width: 90%;
               margin-left: 5%;
               padding: 5px 0;
            }

            span {
               font-family: var(--mainKor-font);
               font-size: 12px;
               padding: 3px 0;
               text-transform: uppercase;
            }
         }
      }
   }
}
</style>
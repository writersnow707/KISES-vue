<script setup>
    import { portText } from '../constants';
</script>

<template>
    <section id="port">
            <div class="port_inner">
                <h2 class="port_title">
                    실습실 <em>사이버 공격 체험 실습</em>
                </h2> 
                <div class="port_wrap">
                    <article class="port_item" v-for="(port, key) in portText" :key="key">
                        <!--<span class="num">{{port.num}}.</span>!-->
                        <a :href="port.code" target="_blank" class="img">
                            <img :src="port.img" />
                        </a>
                        <h3 class="title">{{port.title}}</h3>
                        <p class="desc">
                            {{port.desc[0]}}<br><br>
                            {{port.desc[1]}}<br>
                            {{port.desc[2]}}<br>
                            {{port.desc[3]}}<br>
                            {{port.desc[4]}}<br><br>
                            {{port.desc[5]}}
                        </p>
                        <a :href="port.view" target="_blank" class="site">실습실로 이동</a>
                    </article>
                </div>   
            </div>
        </section>
</template>

<script>
    import gsap from "gsap";
    import ScrollTrigger from "gsap/ScrollTrigger";
    gsap.registerPlugin(ScrollTrigger);

    export default {
        mounted: function(){
            this.scrollAnimation();
        },
        methods: {
            scrollAnimation(){
                const horSection = gsap.utils.toArray(".port_item");

            gsap.to(horSection, {
                xPercent: -120 * (horSection.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: "#port",
                    start: "top 56px",
                    end: "+=3000",
                    pin: true,
                    scrub: 1,
                    markers: false,
                    invalidateOnRefresh: true,
                    anticipatePin: 1,
                }
            });
        }
    }
}
</script>
<style lang="scss">
    #port {
    width: 100%;
    height: 100vh;
    margin-top: 30vh;
    //overflow: hidden;
 
    .port_inner {
        padding: 16px;

    }
    .port_title {
        position: sticky;
        width: 100%;
        height: 5vw;
        font-size: 4vw;
        font-weight: 900;
        line-height: 1.5;
        font-family: var(--mainKor-font);
        text-transform: uppercase;
        color: var(--black100);
        border-bottom: 0.4vw solid var(--black100);
        margin-bottom: 20px;
        text-indent: -0.3vw;  
        
        em{
            font-size: 1.25rem;
            font-weight: 400;
            line-height: 2;
        }
    }
    .port_wrap{
        display: flex; // 화면 조성 (가로화면 이동)
        flex-wrap: wrap;
        width: 7000px;

        .port_item{
            width: 500px; // 네모상자 이미지
            height: 80vh; // 네모상자 높이
            background-color: var(--subBg100);
            padding: 1.5rem; // 네모상자와 내부 내용의 간격
            margin-right: 30px; // 각 네모상자 간의 간격  
            
            /* 각 상자별 Background 배경 색 */
            &:nth-child(1){
                background-color: var(--subBg200);
            }
            &:nth-child(2){
                background-color: var(--subBg200);
            }
            &:nth-child(3){
                background-color: var(--subBg300);
            }
            .num{
                font-size: 3rem;
                font-family: var(--mainKor-font);
            }
            .img{
                display: block; //숫자 밑 이미지를 동적으로 처리
                margin-top: -10px; // 숫자와 이미지 사이의 간격 (높을수록 간격이 벌어짐)
                transition: margin-top 0.3s; // 이미지 드래그 시 내려오는 속도

                img {
                    border-radius: 10px; // 이미지 각 끝부분 모서리 외형 크기
                    max-width: 500px; // 이미지 크기
                    max-height: 35vh; // 이미지 높이
                    overflow: hidden; 
                    filter: saturate(0%); // 이미지 드래그 이전 색상 (낮을 수록 어두움)
                    transition: all 0.3s; // 이미지 색상 변환 시간
                }

                &:hover {
                    margin-top: 0;

                    img {
                        filter: saturate(100%);  // 상단 filter(0%)에서 최대 변환 처리(100%)
                    }
                }
            }
            .title{
                font-size: 1.5rem; // 이미지 하단 글자 크기
                text-align: center; // 이미지 위치 (left, center, right)
                padding: 0.8rem 0; // 제목 높이 간격?
                font-weight: 700; // 제목 굵기
                color: var(--black100); // 제목 색깔
                border-bottom: 2px solid var(--black100); // 제목 밑줄
                margin-bottom: 1rem; // 밑줄과 본문 사이의 간격 
            }
            .desc{
                font-size: 1rem; // 본문 글자 크기
            } 
            .site{
                border: 1px solid var(--black100);
                display: block; // 버튼
                text-align: center; // 버튼 글자 위치
                padding: 0.625rem 1.5rem; // 버튼 상자 크기 조정
                margin-top: 1.5rem; // 버튼 상자 위치 조정(본문-버튼)

                &:hover {
                    background-color: var(--black100);
                    color: var(--white);
                }
            }           
        }
    }

}
</style>
<script setup>
    import { introText } from '../constants';
</script>

<template>
    <section id="intro">
            <div class="intro_inner">
                <h2 class="intro_title">
                    <div>{{ introText.title }}</div>
                </h2>
                <div class="intro_lines" aria-hidden="true">
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                </div>
                <div class="intro_text">
                    <div class="text">
                        <div>{{ introText.desc[0] }}</div>
                        <div>{{ introText.desc[1] }}</div>
                    </div>
                    <div class="img">
                        <img src="@/assets/img/about.jpg" alt="about me">
                    </div>
                </div> 
                <div class="intro_lines bottom" aria-hidden="true">
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                </div>
            </div>
        </section>
</template>

<style lang="scss">
    #intro{
    height: 70vh; // Header와 Intro의 간격
    
}
.intro_inner {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    flex-direction: column;
    padding: 16px;

    @media (max-width: 800px){
        justify-content: center;
    }

    .intro_title {
        font-size: 3vw;
        //text-align: center;
        // text-transform: uppercase; 글자 대/소문자 구분
        line-height: 1;
        font-weight: 600;
        white-space: nowrap;
        text-indent: -0.5vw; // 글자 위치
        letter-spacing: -0.1vw; // 글자 간 간격

        @media (max-width: 320px){
            display: none;
        }
    }
    .intro_text {
        width: 100%;
        height: 40vh; // 줄 상자 높이(맨 밑 큰 검은 상자)
        background-color: var(--black); // 큰 상자 색 조정
        color: var(--white); // 그림 속 글씨 색깔
        display: flex; // 글씨 위치 조정1 ?
        align-items: center;
        justify-content: center; // 글씨 위치 조정2 ?
        flex-direction: column;
        position: relative; // 그림 위치

        

        .text {
            font-size: 2vw;
            line-height: 1.6; // 각 글자 간의 간격
            font-weight: 750; // 글자 굵기            
            text-align: left; // 글자 조정 (left, center, right)
            z-index: 100;
            transition: all 0.3s; // 글자 사라지는 시간
            position: relative;
            cursor: all-scroll;

            @media (max-width: 800px) {
                font-size: 24px;
            }

           
        }
        .img {
            position:absolute; // 그림 모양
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
            width: 30vh;
            height: 30vh;
            border-radius: 50%;
            overflow: hidden; // 그림 모양 2?
            filter: grayscale(100%); // 초기 그림 상태(gray)
            transition: all 0.3s; // 그림 바뀌는 시간

            @media (max-width: 320px){
                width: 20vh;
                height: 20vh;
            }
        }

        &:hover .text {
            opacity: 0;
        }
        &:hover .img {
            filter: grayscale(0); 
        }
    }
       .intro_lines {
        width: 100%;

        .line{
            display: block;
            width: 100%;
            height: 1px;
            background-color: var(--black);
            margin-bottom: 0.5vw;

            &:nth-child(1){
                height: 1px;
            }&:nth-child(2){
                height: 2px;
            }
            &:nth-child(3){
                height: 5px;
            }
            &:nth-child(4){
                height: 9px;
            }
            &:nth-child(5){
                height: 13px;
            }
            &:nth-child(6){
                height: 17px;
            }
            &:nth-child(7){
                height: 25px;
            }
        }

        &.bottom {
            .line {
                margin-top: 0.5vw;
                margin-bottom: 0;
                display: none;

                @media (max-width: 800px) {
                    display: block;
                }
                &:nth-child(1){
                    height: 25px;
                }
                &:nth-child(2){
                    height: 17px;
                }
                &:nth-child(3){
                    height: 13px;
                }
                &:nth-child(4){
                    height: 9px;
                }
                &:nth-child(5){
                    height: 5px;
                }
                &:nth-child(6){
                    height: 2px;
                }
                &:nth-child(7){
                    height: 1px;
                }
            }
        }
    }
}
</style>
import about from "../assets/img/about.jpg";
import port01 from "../assets/img/port01.jpg";
import port02 from "../assets/img/port02.jpg";
import port03 from "../assets/img/port03.jpg";
import port04 from "../assets/img/port04.jpg";
import port05 from "../assets/img/port05.jpg";
import port06 from "../assets/img/port06.jpg";
import port07 from "../assets/img/port07.jpg";
import port08 from "../assets/img/port08.jpg";
import port09 from "../assets/img/port09.jpg";
import port10 from "../assets/img/port10.jpg";

export const headerNav = [
  {
    title: "intro",
    url: "#intro",
  },
  {
    title: "KISES이란?",
    url: "#skill",
  },
  {
    title: "학습 목표",
    url: "#site",
  },
  {
    title: "학습 과정",
    url: "#port",
  },
  {
    title: "로그인",
    url: "#contact",
  },
];

export const introText = {
  title: "Korea Institute of Security Education Service",
  desc: ["사이버 보안 교육의 첫 걸음", "KISES이 함께 나아가겠습니다."],
  img: about,
};

export const skillText = [
  {
    title: "안전한 사이버 보안의 시작, 올바른 보안 교육으로부터",
    desc: "갈수록 사이버 보안 경각심이 늘어나는 현재, 2015 개정 교육과정으로 ‘정보’ 과목이 의무교육이 되었습니다. 허나 안타깝게도, 해당 교육에서는 사이버 보안 교육에 대한 내용을 거의 가르치지 않고 있습니다. KISES은 이러한 문제를 극복하기 위해 사이버 보안 교육을 중점으로 한 사이트를 만들자는 취지에서 개설하게 되었습니다.",
    img: port01,
  },
  {
    title: "체험을 통해 알아보는 사이버 공격의 위험성",
    desc: "KISES에서는 초등학생부터 고등학생까지, 다양하면서도 중요한 사이버 공격들을 이해하며 이를 체험해 봄으로써 해당 공격들의 위험성과 이에 대한 대응책들을 의논 및 토론하는 시간을 갖고 사이버 보안에 대한 경각심을 심어주는 데에 목적을 두고 있습니다.",
    img: port02,
  },
  {
    title: "위험성과 예방책을 알아가며 위험으로부터 벗어나자!",
    desc: "손자병법에는 “적을 알고 나를 알면, 백 번 싸워도 위태롭지 않다 (知彼知己 白戰不殆, 지피지기 백전불태)” 라는 말이 있습니다. 시대를 거듭할수록 사이버 보안은 더욱 중요해지고 정보 교육이 의무화된 만큼, 해당 사이트를 통하여 학생 여러분들의 사이버 보안을 더욱 강화시킬 수 있는 목적이 되었으면 합니다.",
    img: port03,
  },
];
export const siteText = [
  {
    text: ["A", "B", "C"],
    title: "수정 중입니다.",
    code: "https://github.com/writersnow707",
    view: "https://github.com/writersnow707",
    info: [
      "1",
      "2",
      "3",
    ],
  },
  {
    text: ["A", "B", "C"],
    title: "수정 중입니다.",
    code: "https://github.com/writersnow707",
    view: "https://github.com/writersnow707",
    info: [
      "1",
      "2",
      "3",
    ],
  },
];
export const portText = [
  {
    num: "01",
    title: "기초 교육 (Basic Education)",
    desc: ["초등학교 학생들을 대상으로 진행하는 교육으로, 배우게 될 보안과정은 다음과 같습니다.",
          "[스마트폰 유형 사이버 공격]",
          "> 피싱 (Phishing)",
          "> 스미싱 (Smishing, SMS + Phishing)",
          "> 큐싱 (Qshing, QR + Phishing)",
          "대부분의 학생들이 컴퓨터(PC)보다 스마트폰을 처음 접하는 시기인 만큼, 컴퓨터보다는 스마트폰과 관련된 사이버 공격를 중점으로 다루는 과정입니다.",],
    img: port01,
    code: "https://github.com/writersnow707",
    view: "https://github.com/writersnow707",
  },
  {
    num: "02",
    title: "심화 교육 (Advanced Education)",
    desc: ["중 · 고등학교 학생들을 대상으로 진행하는 교육으로, 배우게 될 교육과정은 다음과 같습니다.",
          "[컴퓨터 유형 사이버 공격] ",
          "> 컴퓨터 바이러스 (Computer Virus)",
          "> 해킹 (Hacking)",
          "> 랜섬웨어 (Ransomware)",
          "컴퓨터를 본격적으로 학습하는 시기인 만큼, 컴퓨터와 관련된 사이버 공격을 중점으로 다루는 과정입니다. 스마트폰에도 적용될 수 있는 범죄이기에, 기초 교육을 응용하여 학습을 진행합니다.",],
    img: port02,
    code: "https://google.com",
    view: "https://google.com",
  },
  {
    num: "03",
    title: "수정중...",
    desc: ["미완성된 작업물입니다."],
    img: port03,
    code: "https://google.com",
    view: "https://google.com",
  },
];

export const contactText = [
  {
    link: "https://open.kakao.com/o/swCs4l6f",
    title: "KAKAO : KISES 한국보안연구원",
  },
  {
    link: "mailto:writtensnowt@naver.com",
    title: "mail : writtensnow@naver.com",
  },
];
export const footerText = [
  {
    title: "youtube",
    desc: "유튜브에 오시면 더 많은 강의를 볼 수 있습니다.",
    link: "https://www.youtube.com/@Webstoryboy",
  },
  {
    title: "github",
    desc: "깃헙에 오시면 더 많은 소스를 볼 수 있습니다.",
    link: "https://github.com/webstoryboy",
  },
  {
    title: "blog",
    desc: "블러그에 오시면 더 많은 정보를 볼 수 있습니다.",
    link: "https://webstoryboy.co.kr",
  },
  {
    title: "gsap",
    desc: "GSAP에 오시면 더 많은 강의를 볼 수 있습니다.",
    link: "https://www.youtube.com/playlist?list=PL4UVBBIc6giL8-6jvrClimg0cFL-Muqiq",
  },
  {
    title: "react",
    desc: "리액트로 만든 사이트를 같이 만들어 봅니다.",
    link: "https://github.com/webstoryboy/port2023-react",
  },
  {
    title: "vue",
    desc: "뷰로 만든 사이트를 같이 만들어 봅니다.",
    link: "https://github.com/webstoryboy/port2023-vue",
  },
  {
    title: "next",
    desc: "넥스트로 만든 사이트를 같이 만들어 봅니다.",
    link: "https://github.com/webstoryboy/port2023-next",
  },
];

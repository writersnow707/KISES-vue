<script setup>
import Skip from "@/components/Skip.vue";
import Header from "@/components/Header.vue";
import TitleVue from "@/components/TitleVue.vue";
import IntroVue from "@/components/IntroVue.vue";
import CurriculumVue from "@/components/CurriculumVue.vue";
import Port from "@/components/Port.vue";
import Contact from "@/components/Contact.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <Skip />
  <Header />
  <main id="main" role="main">
    <TitleVue />
    <IntroVue />
    <CurriculumVue />
    <Port />
    <Contact />
  </main>
  <Footer />
</template>

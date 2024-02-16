<template>
  <div class="w-full bg-white">
    <!-- pop up window -->
    <PopUp v-if="this.openModal == true" />
  </div>
</template>

<script>
import PopUp from '@/components/PopUp.vue'
export default {
    name: "IndexView",
    components: {
        PopUpView,
    },
    dat() {
        return {
            openModal: true,
        }
    }
}
</script>

<style>

</style>
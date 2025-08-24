<script lang="ts" setup>
const isMobile = useMediaQuery('(max-width: 1279px)', { ssrWidth: 768 })
</script>

<template>
  <div class="px-4 gap-2 grid grid-cols-2 h-screen lg:gap-4">
    <div class="p-4 text-left flex flex-col gap-6 col-span-full items-center justify-center xl:col-span-1 lg:items-start">
      <h1 class="text-4xl font-bold md:text-5xl xl:text-6xl">
        IT Solutions Tailored for Your Business
      </h1>
      <p class="text-muted md:text-xl">
        Doshin Tech provides expert web development, networking, and security services to help your business
        thrive in the digital world.
      </p>
      <div class="flex gap-2 w-full items-center justify-start lg:px-4 lg:flex-center lg:gap-8">
        <UButton
          class="btn-secondary text-xl mt-4"
          :size="isMobile ? 'sm' : 'lg'"
          label="Get a Free Consultation"
          icon="i-ph-arrow-right"
          :trailing="true"
        />
        <UButton
          v-if="!isMobile"
          class="text-xl mt-4 btn-primary"
          :size="isMobile ? 'sm' : 'lg'"
          label="Explore Our Services"
        />
      </div>
    </div>
    <div v-if="!isMobile" class="p-4 flex-center">
      <img
        src="../../../assets/doshin_img.JPG"
        alt="test"
        class="rounded-xl h-4/5 w-full object-cover"
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  imgUrl: string
  badgeLabel: string
  title: string
  description: string
  list: string[]
}>()
const img = '/doshin_img.JPG'
</script>

<template>
  <div class="my-6 gap-6 grid items-center lg:gap-12 lg:grid-cols-2">
    <NuxtImg
      src="../../../../assets/doshin_img.JPG"
      width="600"
      height="600"
      alt="Doshin Tech team working together"
      class="mx-auto rounded-xl aspect-video overflow-hidden object-cover sm:w-full"
    />

    <div class="flex flex-col justify-center space-y-4">
      <div class="space-y-2">
        <UBadge :ui="{ rounded: 'rounded-full' }" color="black" :label=" badgeLabel" />
        <h2 class="text-3xl font-bold sm:text-4xl">
          {{ title }}
        </h2>
        <p class="font-extralight">
          {{ description }}
        </p>
      </div>
      <div class="space-y-2">
        <div v-for="(item, index) in list" :key="index" class="flex gap-2 items-center">
          <div class="i-ph-check-circle" />
          <p>{{ item }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

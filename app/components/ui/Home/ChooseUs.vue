<script lang="ts" setup>
const schema = [
  [
    {
      title: 'Dependable',
      icon: 'i-ph-check-circle-bold',
      description: 'We provide top-notch cyber security services to protect your business from online threats. Our team of experts will ensure that your data is safe and secure.',
    },
    {
      title: 'Innovative',
      icon: 'i-ph-lightbulb-bold',
      description: 'We offer a range of cloud services to help you store, manage, and analyze your data. Our cloud solutions are scalable and secure, ensuring that your business can grow without limits.',
    },
  ],
  [
    {
      title: 'Supportive',
      icon: 'i-ph-person-arms-spread-bold',
      description: 'Our web development services are designed to help you create a stunning online presence. We have the expertise to bring your vision to life.',
    },
    {
      title: 'Versatile',
      icon: 'i-ph-globe-bold',
      description: 'Our web development services are designed to help you create a stunning online presence. We have the expertise to bring your vision to life.',
    },
  ],

]
</script>

<template>
  <div class="py-12 flex-center flex-col gap-14">
    <div class="flex flex-col gap-3">
      <h2 class="text-6xl font-semibold p-2">
        Why choose Doshin Tech?
      </h2>
      <span class="text-xl font-thin p-2">We deliver exceptional IT services with a focus on quality, reliability, and client satisfaction</span>
    </div>
    <div class="p-2 flex flex-wrap gap-6 w-full items-center md:gap-12">
      <div
        v-for="(row, index) in schema"
        :key="index"
        class="gap-6 grid grid-cols-2"
      >
        <div v-for="chose in row" :key="chose.title" class="text-center flex flex-col gap-6 col-span-2 items-center justify-center md:col-span-1">
          <h4 class="text-lg font-semibold">
            <div class="text-2xl mb-3 w-full" :class="[chose.icon]" />
            {{ chose.title }}
          </h4>
          <p class="font-light">
            {{ chose.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

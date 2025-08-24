<script lang="ts" setup>
const schema = [
  {
    title: 'Cyber Security',
    icon: 'i-ph-security-camera',
    description: 'We provide top-notch cyber security services to protect your business from online threats. Our team of experts will ensure that your data is safe and secure.',
  },
  {
    title: 'Cloud Services',
    icon: 'i-ph-cloud',
    description: 'We offer a range of cloud services to help you store, manage, and analyze your data. Our cloud solutions are scalable and secure, ensuring that your business can grow without limits.',
  },
  {
    title: 'Web Development',
    icon: 'i-ph-code',
    description: 'Our web development services are designed to help you create a stunning online presence. We have the expertise to bring your vision to life.',
  },

]
</script>

<template>
  <div class="py-12 flex-center flex-col gap-14">
    <h2 class="text-6xl font-semibold">
      Our Services
    </h2>
    <div class="p-2 flex flex-wrap gap-2 w-full items-center">
      <div
        v-for="service in schema"
        :key="service.title"
        class="group p-6 border border-zinc-200 rounded-lg flex flex-col gap-4 h-[205px] w-full shadow-sm transition-all duration-300 ease-in-out relative overflow-hidden hover:h-auto lg:w-32.5% hover:shadow-md"
      >
        <h4 class="text-lg font-semibold">
          <div class="text-lg mb-3" :class="[service.icon]" />
          {{ service.title }}
        </h4>
        <p class="font-light text-left">
          {{ service.description }}
        </p>
        <div
          class="bg-gradient-to-t h-12 transition-opacity duration-300 bottom-0 left-0 right-0 absolute from-white to-transparent group-hover:opacity-0 dark:from-gray-900"
        />
      </div>
    </div>
  </div>
</template>

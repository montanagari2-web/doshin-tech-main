<script lang="ts" setup>
defineProps<{
  title: string
  description: string
  pkgs: {
    title: string
    price: string
    description: string
    features: string[]
    highlighted?: boolean
  }[]
}>()
</script>

<template>
  <div class="space-y-6">
    <div class="text-center flex flex-col items-center justify-center space-y-4">
      <div class="space-y-2">
        <h3 class="text-2xl font-bold tracking-tighter sm:text-3xl">
          {{ title }}
        </h3>
        <p class="font-extralight max-w-[700px]">
          {{ description }}
        </p>
      </div>
    </div>

    <div class="gap-6 grid md:grid-cols-3">
      <UCard
        v-for="(pkg, index) in pkgs"
        :key="index"
      >
        <div class="min-h-150px">
          <h3 class-name="font-bold text-xl">
            {{ pkg.title }}
          </h3>
          <div class="mt-2">
            <span class="font-heading text-3xl font-bold">{{ pkg.price }}</span>
            <span class="text-muted-foreground ml-1">one-time</span>
          </div>
          <p class-name="pt-2">
            {{ pkg.description }}
          </p>
        </div>
        <div class="flex-1 min-h-380px">
          <ul class="space-y-2">
            <li v-for="(feature, idx) in pkg.features" :key="idx" class="flex gap-2 items-center">
              <div class="i-ph-check-circle" />
              <span class="text-sm">{{ feature }}</span>
            </li>
          </ul>
        </div>
        <div>
          <UButton
            :variant="pkg.highlighted ? 'solid' : 'outline'"
            :color="pkg.highlighted ? 'black' : 'white'"
            padded
            block
          >
            <NuxtLink href="/contact">
              Get Started
            </NuxtLink>
          </UButton>
        </div>
      </UCard>
    </div>
  </div>
</template>

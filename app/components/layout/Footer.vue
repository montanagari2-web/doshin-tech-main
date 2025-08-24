<script lang="ts" setup>
const schema = [
  {
    title: 'Services',
    items: [
      {
        name: 'Web Development',
      },
      {
        name: 'Networking',
      },
      {
        name: 'Security',
      },
    ],

  },
  {
    title: 'Company',
    items: [
      {
        name: 'About Us',
      },
      {
        name: 'Careers',
      },
      {
        name: 'Blog',
      },
    ],
  },
  {
    title: 'Contact',
    items: [
      {
        name: '123 Tech Street, Digital City',
      },
      {
        name: 'contact@doshintech.com',
      },
      {
        name: '(555) 123-4567',
      },
    ],
  },
]
</script>

<template>
  <footer class="bg-muted/50 px-4 lg:px-0">
    <div class="container py-8 flex flex-col gap-6 md:py-12">
      <UDivider />
      <div class="py-6 gap-8 grid lg:grid-cols-4 md:grid-cols-2">
        <div class="space-y-4">
          <NuxtLink to="/" class="flex gap-2 items-center">
            <div class="i-ph-globe-bold text-3xl" />
            <span class="text-xl font-bold">Doshin Tech</span>
          </NuxtLink>
          <p class="text-muted-foreground text-sm">
            Providing expert IT solutions to help businesses thrive in the digital world.
          </p>
        </div>

        <div
          v-for="(item, index) in schema"
          :key="index"
          class="flex flex-col gap-4"
        >
          <h3 class="text-xl font-medium">
            {{ item.title }}
          </h3>
          <ul class="text-sm space-y-4">
            <li v-for="(subItem, subIndex) in item.items" :key="subIndex" class="border-muted/50 w-fit hover:border-b">
              <NuxtLink
                :to="subItem.name"
                class="text-muted-foreground hover:text-foreground transition-colors"
              >
                {{ subItem.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <div class="pt-8 border-t flex flex-col gap-4 items-center justify-between sm:flex-row">
        <p class="text-muted-foreground text-xs">
          © {{ new Date().getFullYear() }} Doshin Tech. All rights reserved.
        </p>
        <div class="flex gap-4">
          <NuxtLink
            to="/privacy"
            class="text-muted-foreground hover:text-foreground text-xs transition-colors"
          >
            Privacy Policy
          </NuxtLink>
          <NuxtLink
            to="/terms"
            class="text-muted-foreground hover:text-foreground text-xs transition-colors"
          >
            Terms of Service
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

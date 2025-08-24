<script setup>
const team = [
  { name: 'Alex Johnson', role: 'Founder & CEO', image: 'https://github.com/benjamincanac.png' },
  { name: 'Sarah Chen', role: 'CTO', image: 'https://github.com/benjamincanac.png' },
  { name: 'Michael Rodriguez', role: 'Lead Web Developer', image: 'https://github.com/benjamincanac.png' },
  { name: 'Priya Patel', role: 'Network Engineer', image: 'https://github.com/benjamincanac.png' },
  { name: 'David Kim', role: 'Security Specialist', image: 'https://github.com/benjamincanac.png' },
  { name: 'Emma Wilson', role: 'Client Success Manager', image: 'https://github.com/benjamincanac.png' },
]
</script>

<template>
  <section class="py-16 bg-zinc-100 md:py-24 dark:bg-slate-900">
    <div class="container px-4 md:px-6">
      <div class="text-center flex flex-col items-center justify-center space-y-4">
        <div class="space-y-2">
          <h2 class="font-heading text-3xl font-bold tracking-tighter md:text-5xl sm:text-4xl">
            Meet Our Team
          </h2>
          <p class="text-muted-foreground max-w-[700px] md:text-xl/relaxed">
            The talented professionals behind Doshin Tech
          </p>
        </div>
      </div>

      <div class="mx-auto py-12 gap-6 grid max-w-5xl md:grid-cols-3">
        <div
          v-for="(member, index) in team"
          :key="index"
          class="flex flex-col items-center space-y-4"
        >
          <img
            :src="member.image || '/placeholder.svg'"
            :alt="member.name"
            width="200"
            height="200"
            class="rounded-full h-40 w-40 object-cover"
          >
          <div class="text-center space-y-1">
            <h3 class="font-heading font-bold">
              {{ member.name }}
            </h3>
            <p class="text-muted-foreground text-sm">
              {{ member.role }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

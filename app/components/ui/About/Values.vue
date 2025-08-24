<script setup lang="ts">
const schema = [
  {
    title: 'Excellence',
    description: 'We strive for excellence in every project, delivering solutions that exceed expectations and stand the test of time.',
  },
  {
    title: 'Integrity',
    description: 'We operate with honesty, transparency, and ethical standards in all our client and team interactions.',
  },
  {
    title: 'Innovation',
    description: 'We embrace creativity and forward-thinking to develop cutting-edge solutions that address complex challenges.',
  },
  {
    title: 'Collaboration',
    description: 'We believe in the power of teamwork, both within our organization and in partnership with our clients.',
  },
  {
    title: 'Client Focus',
    description: 'We prioritize understanding our clients\' unique needs and delivering solutions that align with their goals.',
  },
  {
    title: 'Continuous Learning',
    description: 'We invest in ongoing education and skill development to stay at the forefront of technological advancements.',
  },
]
</script>

<template>
  <section class="py-16">
    <div class="container px-4 md:px-6">
      <div class="py-6 text-center flex flex-col items-center justify-center space-y-4">
        <div class="space-y-2">
          <h2 class="font-heading text-3xl font-bold tracking-tighter md:text-5xl sm:text-4xl">
            Our Core Values
          </h2>
          <p class="text-muted-foreground max-w-[700px] md:text-xl/relaxed">
            The principles that guide everything we do
          </p>
        </div>
      </div>
      <div class="p-2 flex flex-wrap gap-2 w-full items-center">
        <div
          v-for="(item, index) in schema"
          :key="index"
          class="group p-6 border border-zinc-200 rounded-lg flex flex-col gap-4 min-h-[205px] w-full shadow-sm transition-all duration-300 ease-in-out relative overflow-hidden hover:h-auto lg:w-32.5% hover:shadow-md"
        >
          <h3 class="font-heading text-xl font-bold">
            {{ item.title }}
          </h3>
          <p class="text-muted-foreground text-left">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

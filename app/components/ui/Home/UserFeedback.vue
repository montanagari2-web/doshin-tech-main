<script lang="ts" setup>
const schema = [
  {
    title: 'Emily Regan',
    photo: 'https://github.com/benjamincanac.png',
    description: 'Doshin Tech transformed our workflow—absolutely seamless and efficient!',
  },
  {
    title: 'James Pawnstop',
    photo: 'https://github.com/benjamincanac.png',
    description: 'Exceptional service and innovative solutions. Highly recommend!',
  },
  {
    title: 'Sophia Longstaff',
    photo: 'https://github.com/benjamincanac.png',
    description: 'Their team exceeded expectations. Truly a game-changer!',
  },
  {
    title: 'Frank Buah',
    photo: 'https://github.com/benjamincanac.png',
    description: 'Their team exceeded expectations. Truly a game-changer.',
  },

]
</script>

<template>
  <div class="py-12 flex-center flex-col gap-14">
    <h2 class="text-6xl font-semibold">
      Hear from our awesome users!
    </h2>
    <div class="p-2 flex flex-wrap gap-2 w-full items-center">
      <div
        v-for="user in schema"
        :key="user.title"
        class="group p-6 border border-zinc-200 rounded-lg flex flex-col gap-4 h-fit w-full shadow-sm transition-all duration-300 ease-in-out relative overflow-hidden hover:h-auto lg:w-24% hover:shadow-md"
      >
        <div class="flex gap-8 items-center">
          <UAvatar :src="user.photo" size="xl" />
          <div class="flex flex-col">
            <h4 class="text-lg font-semibold mb-0">
              {{ user.title }}
              <img src="/Selection.png" class="h-25px">
            </h4>
          </div>
        </div>
        <p class="font-light text-left">
          {{ user.description }}
        </p>
        <div
          class="bg-gradient-to-t h-12 transition-opacity duration-300 bottom-0 left-0 right-0 absolute from-white to-transparent group-hover:opacity-0 dark:from-gray-900"
        />
      </div>
    </div>
  </div>
</template>

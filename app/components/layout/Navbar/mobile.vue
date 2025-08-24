<script lang="ts" setup>
const { links } = defineProps<{
  links: NavLink[][]
  defaultLink?: string
  wrapperStyle?: string
  activeLink?: string
}>()
const emit = defineEmits<{ toggle: [link: NavLink] }>()

function handleLinkClick(link: NavLink) {
  emit('toggle', link)
}
</script>

<template>
  <div
    class="text-lg border-b border-b-zinc-200 flex h-15 w-full items-center top-0 justify-between fixed z-40 bg-primary dark:border-b-zinc-500"
  >
    <div
      v-for="(link_arr, index) in links"
      :key="index"
      class="flex-center gap-3"
      :class="[wrapperStyle]"
    >
      <slot :name="`${index}-links`">
        <div
          v-for="(link, idx) in link_arr"
          :key="idx"
          class="p-3 flex-center gap-2 cursor-pointer"
          :class="[
            link.labelClass,
            { 'border-b border-b-solid border-b-zinc-500 dark:border-b-zinc-200': activeLink === link.label },
          ]"
          @click="handleLinkClick(link)"
        >
          <slot :name="`${link.label.toLowerCase()}-icon`">
            <div v-if="link.icon" :class="[link.iconClass, link.icon]" />
          </slot>
        </div>
      </slot>
    </div>
  </div>
</template>

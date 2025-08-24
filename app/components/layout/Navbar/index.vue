<script lang="ts" setup>
const links: NavLink[][] = [
  [{
    label: 'Doshin-Tech',
    icon: 'i-ph-broadcast',
  }],
  [
    { label: 'Home', to: '/', icon: 'i-ph-house', showIcon: 'mobile' },
    { label: 'About Us', to: '/about', icon: 'i-ph-user-square', showIcon: 'mobile' },
    { label: 'Services', to: '/services', icon: 'i-ph-briefcase', showIcon: 'mobile' },
    { label: 'Contact Us', to: '/contact-us', icon: 'i-ph-chat-text', showIcon: 'mobile' },

  ],
  [{ label: 'started' }],
]

// TODO Add route query and set the activelink to that route
const isMobile = useMediaQuery('(max-width: 768px)', { ssrWidth: 768 })
const showMobileNav = ref(false)
const activeLink = ref('Home')

function handleActiveLink(link: NavLink) {
  activeLink.value = link.label
  navigateTo(link.to)
}
watch(isMobile, () => showMobileNav.value = false)
</script>

<template>
  <div>
    <LazyLayoutNavbarMobile
      v-if="isMobile"
      :links
      :active-link
      @toggle="handleActiveLink"
    >
      <template #doshin-tech-icon />
    </LazyLayoutNavbarMobile>
    <LazyLayoutNavbarWeb
      v-else
      :links
      :active-link
      @toggle="handleActiveLink"
    >
      <template #started-link>
        <UButton
          variant="solid"
          size="lg"
          class="btn-primary"
          label="Get Started"
        />
      </template>
    </LazyLayoutNavbarWeb>
  </div>
</template>

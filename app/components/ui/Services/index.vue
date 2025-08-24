<script lang="ts" setup>
const schema = [
  {
    key: 'web',
    label: 'Web',
    icon: ' i-ph-globe-bold',
  },
  {
    key: 'network',
    label: 'Network',
    icon: 'i-ph-wifi-high-bold',
  },
  {
    key: 'security',
    label: 'Security',
    icon: 'i-ph-shield-check-bold',
  },
]
</script>

<template>
  <div>
    <div class="container mx-auto space-y-30">
      <div>
        <UiServicesHero />
        <div>
          <UTabs :items="schema">
            <template #item="{ item }">
              <div v-if="item.key === 'web'" class="space-y-3">
                <UiServicesWebSection />
              </div>
              <div v-else-if="item.key === 'network'" class="space-y-3">
                <UiServicesNetworkSection />
              </div>
              <div v-else-if="item.key === 'security'" class="space-y-3">
                <UiServicesSecuritySection />
              </div>
            </template>
          </UTabs>
        </div>
      </div>
    </div>
  </div>
</template>

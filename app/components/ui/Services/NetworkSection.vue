<script lang="ts" setup>
const itemsList = [
  'Network design and implementation',
  'Wireless (WiFi) solutions',
  'Firewall and security configuration',
  'VPN and remote access setup',
  'Ongoing network monitoring and support',
]
const processList = [
  {
    title: 'Assessment',
    description:
      'We start by evaluating your current network infrastructure, business needs, and security requirements.',
    icon: 'i-ph-magnifying-glass',
  },
  {
    title: 'Design',
    description:
      'Our experts create a detailed network design that is scalable, secure, and tailored to your specific goals.',
    icon: 'i-ph-network',
  },
  {
    title: 'Implementation',
    description:
      'We deploy and configure your new network with minimal disruption to your daily operations.',
    icon: 'i-ph-plugs-connected',
  },
  {
    title: 'Management',
    description:
      'We provide ongoing monitoring, maintenance, and support to ensure your network performs optimally.',
    icon: 'i-ph-chart-line-up',
  },
]

const pkgs = [
  {
    title: 'Small Office Setup',
    price: '$1,499',
    description: 'Ideal for startups and small offices needing a reliable network foundation.',
    features: [
      'Up to 10 devices',
      'Router and switch configuration',
      'Secure WiFi setup',
      'Basic firewall policy',
      'Remote support',
    ],
  },
  {
    title: 'Business Network Solution',
    price: '$2,999',
    description: 'A scalable and secure network for growing businesses.',
    features: [
      'Up to 50 devices',
      'Advanced router and managed switches',
      'Guest and internal WiFi networks',
      'VPN for remote access',
      'Content filtering',
      'Monthly health check',
    ],
    highlighted: true,
  },
  {
    title: 'Enterprise Infrastructure',
    price: 'Custom',
    description: 'Comprehensive network architecture for large organizations.',
    features: [
      'Unlimited devices',
      'High-availability design',
      'Advanced security and threat management',
      'Multi-site connectivity (SD-WAN)',
      '24/7 monitoring and support',
      'Compliance reporting',
    ],
  },
]
</script>

<template>
  <div>
    <UiServicesSharedTabHero
      badge-label="Networking"
      img-url="../../../../assets/doshin_img.JPG"
      title="Custom Network Solutions"
      description="We design, implement, and manage secure and reliable network infrastructures to keep your business connected and productive. From small office setups to enterprise-level solutions, we ensure your network is fast, secure, and scalable."
      :list="itemsList"
    />
    <UiServicesSharedPricing title="Networking Packages" description="Choose the package that best fits your business needs" :pkgs />
    <div class="mt-6">
      <div class="text-center flex flex-col items-center justify-center space-y-4">
        <div class="space-y-2">
          <h3 class="font-heading text-2xl font-bold tracking-tighter sm:text-3xl">
            Our Implementation Process
          </h3>
          <p class="text-muted-foreground max-w-[700px]">
            We follow a structured approach to ensure your network project is delivered successfully and meets your expectations.
          </p>
        </div>
      </div>

      <div class="gap-6 grid md:grid-cols-4">
        <div v-for="(process, idx) in processList " :key="idx" class="p-6 text-center flex flex-col items-center space-y-3">
          <div :class="[process.icon]" class="text-4xl" />
          <h4 class="font-heading text-xl font-bold">
            {{ process.title }}
          </h4>
          <p class="text-muted-foreground">
            {{ process.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const itemsList = [
  'Vulnerability assessments and penetration testing',
  'Security audits and compliance (e.g., GDPR, HIPAA)',
  'Managed firewall and intrusion detection systems',
  'Endpoint protection and response (EDR)',
  'Employee security awareness training',
]
const processList = [
  {
    title: 'Identify',
    description:
      'We assess your environment to identify cybersecurity risks to systems, assets, data, and capabilities.',
    icon: 'i-ph-binoculars',
  },
  {
    title: 'Protect',
    description:
      'We implement appropriate safeguards to ensure the delivery of critical infrastructure services and limit the impact of a potential event.',
    icon: 'i-ph-shield-check',
  },
  {
    title: 'Detect',
    description:
      'We deploy solutions to identify the occurrence of a cybersecurity event in a timely manner.',
    icon: 'i-ph-gps',
  },
  {
    title: 'Respond & Recover',
    description:
      'We take action regarding a detected incident and maintain plans for resilience to restore any capabilities or services that were impaired.',
    icon: 'i-ph-first-aid-kit',
  },
]

const pkgs = [
  {
    title: 'Security Essentials',
    price: '$999',
    description: 'A foundational security audit and setup for small businesses.',
    features: [
      'One-time vulnerability scan',
      'Firewall configuration review',
      'Endpoint protection for up to 10 devices',
      'Security policy template',
      'Report with recommendations',
    ],
  },
  {
    title: 'Advanced Protection',
    price: '$2,499',
    description: 'Proactive threat detection and response for growing businesses.',
    features: [
      'Quarterly vulnerability scans',
      'Managed firewall service',
      'Endpoint Detection & Response (EDR)',
      'Email security and filtering',
      'Employee security awareness training',
    ],
    highlighted: true,
  },
  {
    title: 'Total Security Management',
    price: 'Custom',
    description: 'A fully managed, 24/7 security operations center (SOC) service.',
    features: [
      'Continuous monitoring (SIEM)',
      'Penetration testing',
      'Incident response and forensics',
      'Compliance management (GDPR, HIPAA)',
      'Dedicated security analyst',
      'Threat intelligence feeds',
    ],
  },
]
</script>

<template>
  <div>
    <UiServicesSharedTabHero
      badge-label="Cybersecurity"
      img-url="../../../../assets/doshin_img.JPG"
      title="Comprehensive Security Solutions"
      description="We protect your business from evolving cyber threats with a multi-layered security approach. Our experts help you identify vulnerabilities, implement protective measures, and respond to incidents, ensuring your data and reputation are secure."
      :list="itemsList"
    />
    <UiServicesSharedPricing title="Cyber Security Packages" description="Choose the package that best fits your business needs" :pkgs />
    <div class="mt-6">
      <div class="text-center flex flex-col items-center justify-center space-y-4">
        <div class="space-y-2">
          <h3 class="font-heading text-2xl font-bold tracking-tighter sm:text-3xl">
            Our Security Framework
          </h3>
          <p class="text-muted-foreground max-w-[700px]">
            We follow a structured, industry-standard framework to manage and reduce cybersecurity risk for your organization.
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

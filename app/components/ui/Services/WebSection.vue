<script lang="ts" setup>
const itemsList = [
  'Responsive website design and development',
  'Custom web application development',
  'E-commerce solutions and online stores',
  'Content management systems (CMS)',
  'Website maintenance and support',
]
const processList = [
  {
    title: 'Discovery',
    description:
                          'We start by understanding your business goals, target audience, and project requirements.',
    icon: 'i-ph-database',
  },
  {
    title: 'Design',
    description:
                          'Our designers create wireframes and mockups to visualize the look and feel of your website.',
    icon: 'i-ph-code',
  },
  {
    title: 'Development',
    description:
                          'Our developers bring the designs to life, building a functional and responsive website.',
    icon: 'i-ph-hard-drives',
  },
  {
    title: 'Deployment',
    description:
                          'After thorough testing, we launch your website and provide ongoing support and maintenance.',
    icon: 'i-ph-globe',
  },
]
const pkgs = [
  {
    title: 'Basic Website',
    price: '$1,999',
    description: 'Perfect for small businesses looking to establish an online presence',
    features: [
      'Up to 5 pages',
      'Responsive design',
      'Basic SEO setup',
      'Contact form',
      '3 rounds of revisions',
    ],
  },
  {
    title: 'Business Website',
    price: '$3,999',
    description: 'Ideal for growing businesses with more complex needs',
    features: [
      'Up to 10 pages',
      'Responsive design',
      'Advanced SEO setup',
      'Content management system',
      'Blog integration',
      'Social media integration',
      '5 rounds of revisions',
    ],
    highlighted: true,
  },
  {
    title: 'E-commerce Solution',
    price: '$5,999',
    description: 'Complete online store with product management and payment processing',
    features: [
      'Up to 15 pages',
      'Product catalog (up to 100 products)',
      'Secure payment gateway integration',
      'Inventory management',
      'Order tracking',
      'Customer accounts',
      'Advanced SEO setup',
      'Unlimited revisions',
    ],
  },
]
</script>

<template>
  <div>
    <UiServicesSharedTabHero
      badge-label="Web Development"
      img-url="../../../../assets/doshin_img.JPG"
      title="Custom Web Solutions"
      description="We design and develop custom websites and web applications that are tailored to your specific business needs. Our team of experienced developers uses the latest technologies to create responsive, user-friendly, and scalable web solutions."
      :list="itemsList"
    />
    <UiServicesSharedPricing title="Web Development Packages" description="Choose the package that best fits your business needs" :pkgs />
    <div class="mt-6">
      <div class="text-center flex flex-col items-center justify-center space-y-4">
        <div class="space-y-2">
          <h3 class="font-heading text-2xl font-bold tracking-tighter sm:text-3xl">
            Our Development Process
          </h3>
          <p class="text-muted-foreground max-w-[700px]">
            We follow a structured approach to ensure your project is delivered on time and exceeds
            expectations
          </p>
        </div>
      </div>

      <div class="gap-6 grid md:grid-cols-4">
        <div v-for="(process, idx) in processList " :key="idx" class="p-6 text-center flex flex-col items-center space-y-3">
          <div :class="[process.icon]" />
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

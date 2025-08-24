<script lang="ts" setup>
const schema = [
  {
    question: 'What services does Doshin Tech offer?',
    answer:
        'We provide a comprehensive range of IT services including web development, networking solutions, and cybersecurity services tailored to businesses of all sizes.',
  },
  {
    question: 'How quickly can you respond to technical issues?',
    answer:
        'Our support team is available during business hours with a guaranteed response time of 2 hours for critical issues. We also offer premium support packages with 24/7 coverage.',
  },
  {
    question: 'Do you offer ongoing maintenance for websites?',
    answer:
        'Yes, we provide website maintenance packages that include regular updates, security patches, performance optimization, and content updates.',
  },
  {
    question: 'Can you help with cloud migration?',
    answer:
        'We specialize in helping businesses migrate their infrastructure to the cloud, ensuring minimal disruption and maximum security throughout the process.',
  },
]
</script>

<template>
  <!-- we need a better bg for black -->
  <section class="py-4 bg-zinc-100 dark:bg-slate-700">
    <div class="px-4 md:px-6">
      <div class="text-center flex flex-col items-center justify-center space-y-4">
        <div class="space-y-2">
          <h2 class="font-heading text-3xl font-bold tracking-tighter sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p class="text-muted-foreground max-w-[700px] md:text-xl/relaxed">
            Find quick answers to common questions
          </p>
        </div>
      </div>
      <div class="mx-auto py-12 gap-10 grid lg:grid-cols-2">
        <div v-for="(faq, index) in schema" :key="index" class="space-y-2">
          <h3 class="text-xl font-semibold">
            {{ faq.question }}
          </h3>
          <p class="font-extralight">
            {{ faq.answer }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

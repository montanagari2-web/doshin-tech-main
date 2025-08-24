<script lang="ts" setup>
const isSubmitted = ref(false)
</script>

<template>
  <section>
    <div class="container px-4 md:px-6">
      <div class="gap-10 grid lg:gap-16 lg:grid-cols-2">
        <div class="space-y-6">
          <div class="space-y-2">
            <h2 class="font-heading text-3xl font-bold tracking-tighter">
              Get in Touch
            </h2>
            <p class="text-muted-foreground">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>

          <div v-if="isSubmitted" class="p-6 text-center border border-green-200 rounded-lg bg-green-50 space-y-2xl">
            <h3 class="font-heading text-xl text-green-800 font-bold mb-2">
              Thank You!
            </h3>
            <p class="text-green-700">
              Your message has been received. We'll get back to you shortly.
            </p>
            <UButton
              variant="solid"
              size="lg"
              class="btn-primary"
              label="Send Another Message"
              @click="isSubmitted = false"
            />
          </div>
          <div v-else>
            <UiContactUsFormElement />
          </div>
        </div>

        <div class="space-y-8">
          <div class="space-y-2">
            <h2 class="font-heading text-3xl font-bold tracking-tighter">
              Contact Information
            </h2>
            <p class="text-muted-foreground">
              Prefer to reach out directly? Here's how you can contact us.
            </p>
          </div>

          <div class="space-y-6">
            <div class="flex gap-4 items-start">
              <div class="i-ph-map-pin" />
              <div>
                <h3 class="font-heading text-lg font-bold">
                  Our Location
                </h3>
                <address class="text-muted-foreground not-italic">
                  123 Tech Street
                  <br>
                  Digital City, DC 12345
                  <br>
                  United States
                </address>
              </div>
            </div>

            <div class="flex gap-4 items-start">
              <div class="i-ph-phone" />
              <div>
                <h3 class="font-heading text-lg font-bold">
                  Phone
                </h3>
                <p class="text-muted-foreground">
                  <a href="tel:+15551234567" class="hover:text-foreground transition-colors">
                    (555) 123-4567
                  </a>
                </p>
                <p class="text-muted-foreground text-sm">
                  Monday to Friday, 9am to 6pm EST
                </p>
              </div>
            </div>

            <div class="flex gap-4 items-start">
              <div class="i-ph-envelope" />
              <div>
                <h3 class="font-heading text-lg font-bold">
                  Email
                </h3>
                <p class="text-muted-foreground">
                  <a href="mailto:contact@doshintech.com" class="hover:text-foreground transition-colors">
                    contact@doshintech.com
                  </a>
                </p>
                <p class="text-muted-foreground text-sm">
                  We aim to respond within 24 hours
                </p>
              </div>
            </div>

            <div class="flex gap-4 items-start">
              <div class="i-ph-clock" />
              <div>
                <h3 class="font-heading text-lg font-bold">
                  Business Hours
                </h3>
                <div class="text-muted-foreground space-y-1">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

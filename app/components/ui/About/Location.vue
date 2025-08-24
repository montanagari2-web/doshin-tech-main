<script lang="ts" setup>

</script>

<template>
  <section class="py-16 md:py-24">
    <div class="px-4 md:px-6">
      <div class="gap-6 grid items-center lg:gap-12 lg:grid-cols-2">
        <div class="flex flex-col justify-center space-y-4">
          <div class="space-y-2">
            <h2 class="font-heading text-3xl font-bold tracking-tighter sm:text-4xl">
              Where to Find Us
            </h2>
            <p class="text-muted-foreground md:text-lg/relaxed">
              Our headquarters is located in the heart of Digital City, with additional offices in major tech hubs
              across the country.
            </p>
            <div class="pt-4 flex items-start space-x-4">
              <div class="i-ph-map-pin" />
              <div>
                <h3 class="font-heading font-bold">
                  Headquarters
                </h3>
                <address class="text-muted-foreground not-italic">
                  123 Tech Street
                  <br>
                  Digital City, DC 12345
                  <br>
                  Ghana
                </address>
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-hidden rounded-xl">
          <img
            src="../../../assets/doshin_img.JPG"
            alt="Map showing Doshin Tech headquarters location"
            width="{600}"
            height="{400}"
            class-name="w-full object-cover"
          >
        </div>
      </div>
    </div>
  </section>
</template>

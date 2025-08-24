<script setup lang="ts">
import type { FormSubmitEvent } from '#ui/types'
import * as v from 'valibot'

const emit = defineEmits(['submit'])
const schema = v.object({
  name: v.pipe(v.string(), v.minLength(3, 'Must be at least 3 characters')),
  email: v.pipe(v.string(), v.email('Invalid email')),
  phoneNumber: v.pipe(v.string()),
  subject: v.pipe(v.string()),
  message: v.pipe(v.string(), v.minLength(10, 'Please enter a full message. (!0 characters)')),
})

type Schema = v.InferOutput<typeof schema>

const state = reactive({
  email: '',
  name: '',
  phoneNumber: '',
  subject: '',
  message: '',
})

async function onSubmit(event: FormSubmitEvent<Schema>) {
  // Do something with event.data
  emit('submit')
  console.log(event.data)
}
</script>

<template>
  <UForm :schema="schema" :state="state" class="gap-4 grid grid-cols-1 lg:grid-cols-2" @submit="onSubmit">
    <UFormGroup label="Name" name="name" required>
      <UInput
        v-model="state.name"
        placeholder="Please enter your full name"
        color="white"
        variant="outline"
      />
    </UFormGroup>

    <UFormGroup label="Email" name="email" required>
      <UInput
        v-model="state.email"
        placeholder="Please enter your email address"
        color="white"
        variant="outline"
      />
    </UFormGroup>

    <UFormGroup label="Phone Number" name="phone number">
      <UInput
        v-model="state.phoneNumber"
        type="tel"
        placeholder="Please enter your phone number"
        color="white"
        variant="outline"
      />
    </UFormGroup>

    <UFormGroup label="Subject" name="subject">
      <USelect
        v-model="state.subject"
        placeholder="Select a subject"
        :options="['General Inquiry', 'Technical Support', 'Web Development', 'Cyber Security', 'Networking']"
        color="white"
        variant="outline"
      />
    </UFormGroup>
    <UFormGroup label="Message" name="message" class="col-span-full">
      <UTextarea
        v-model="state.message"
        autoresize
        :rows="5"
        type="textarea"
        placeholder="Please enter your message"
        color="white"
        variant="outline"
      />
    </UFormGroup>

    <UButton type="submit" class="col-span-full" variant="solid" size="lg" block color="black">
      Submit
    </UButton>
  </UForm>
</template>

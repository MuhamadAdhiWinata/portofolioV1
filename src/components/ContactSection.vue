<template>
  <!--
    ContactSection: tidak ada margin/padding luar.
    Parent (HomePage) yang mengatur jarak dari section lain.
    Padding internal px/py ada di dalam card ini sendiri.
  -->
  <section v-if="profile" id="contact" class="relative overflow-hidden rounded-3xl border border-[#1a1a1a] bg-[#111] px-8 py-16 text-center sm:px-16 sm:py-24">
    <!-- Glow -->
    <div aria-hidden="true" class="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#c8f135] opacity-[0.08] blur-3xl" />

    <div class="relative space-y-8">
      <p class="font-mono text-xs uppercase tracking-[0.3em] text-[#c8f135]">Get in touch</p>

      <h2 class="font-display text-4xl font-black leading-tight text-[#f0f0f0] sm:text-5xl lg:text-6xl">
        Let's Build<br />
        <span class="text-[#c8f135]">Something</span> Great
      </h2>

      <p class="mx-auto max-w-md font-display text-base text-[#555] sm:text-lg">
        Have a project in mind or want to collaborate? I'd love to hear from you.
      </p>

      <div class="flex flex-wrap items-center justify-center gap-4">
        <a
          :href="`mailto:${profile.email}`"
          class="group inline-flex items-center gap-3 rounded-full bg-[#c8f135] px-8 py-4 font-display text-base font-bold text-[#0a0a0a] transition-all hover:bg-[#a8cc1f] hover:gap-4"
        >
          Send an Email
          <svg class="size-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
          </svg>
        </a>
        <a
          :href="profile.linktree"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 rounded-full border border-[#2a2a2a] px-8 py-4 font-display text-base text-[#888] transition-all hover:border-[#c8f135] hover:text-[#c8f135]"
        >
          All My Links
        </a>
      </div>

      <p class="font-mono text-sm text-[#333]">{{ profile.email }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Profile } from '../types';
defineProps<{ profile: Profile | null }>();
</script>
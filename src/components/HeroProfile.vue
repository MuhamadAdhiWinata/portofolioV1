<template>
  <section id="hero" class="relative w-full overflow-hidden border-b border-[#1a1a1a]">

    <!-- Decorative bg — absolute ok karena ini pure visual, tidak interaktif -->
    <div
      aria-hidden="true"
      class="pointer-events-none absolute inset-0"
      style="background-image: linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px); background-size: 80px 80px; opacity: 0.25;"
    />
    <div aria-hidden="true" class="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a]" />

    <!-- Content: semua dalam flow normal, tidak ada absolute pada elemen konten -->
    <div class="relative w-full px-6 pb-0 pt-28 lg:px-16 lg:pt-36">
      <div class="flex flex-col items-center gap-5 text-center">

        <!-- 1. Avatar — flow normal -->
        <div class="size-36 overflow-hidden rounded-full border-2 border-[#c8f135]/50 sm:size-44">
          <img
            v-if="profile.avatar"
            :src="profile.avatar"
            :alt="profile.name"
            class="size-full object-cover"
            loading="eager"
          />
          <div v-else class="flex size-full items-center justify-center bg-[#111] font-display text-5xl font-black text-[#c8f135]">
            {{ profile.name.charAt(0) }}
          </div>
        </div>

        <!-- 2. Badges row — flow normal, satu baris -->
        <div class="flex flex-wrap items-center justify-center gap-2">
          <!-- Available -->
          <div class="inline-flex items-center gap-2 rounded-full border border-[#2a2a2a] bg-[#111] px-4 py-1.5">
            <span class="relative flex size-2">
              <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#c8f135] opacity-75" />
              <span class="relative inline-flex size-2 rounded-full bg-[#c8f135]" />
            </span>
            <span class="font-mono text-xs text-[#666]">Available for work</span>
          </div>
          <!-- Role -->
          <div class="rounded-full border border-[#c8f135]/20 bg-[#0a0a0a] px-4 py-1.5">
            <span class="font-mono text-xs tracking-widest text-[#c8f135]">Software Engineer</span>
          </div>
        </div>

        <!-- 3. Location -->
        <p class="font-mono text-xs uppercase tracking-[0.3em] text-[#555]">
          {{ profile.location }}
        </p>

        <!-- 4. Name -->
        <h1
          class="font-display font-black leading-[0.9] tracking-tight text-[#f0f0f0]"
          style="font-size: clamp(2.8rem, 9vw, 7rem)"
        >
          {{ profile.name }}
        </h1>

        <!-- 5. Title -->
        <p class="font-display text-base font-medium text-[#555] sm:text-lg">
          {{ profile.title }}
        </p>

        <!-- 6. Contact -->
        <div class="flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5">
          <a
            :href="`mailto:${profile.email}`"
            class="flex items-center gap-2 font-mono text-sm text-[#444] transition-colors hover:text-[#c8f135]"
          >
            <svg class="size-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            {{ profile.email }}
          </a>
          <span class="text-[#2a2a2a]" aria-hidden="true">·</span>
          <a
            :href="`tel:${profile.phone}`"
            class="flex items-center gap-2 font-mono text-sm text-[#444] transition-colors hover:text-[#c8f135]"
          >
            <svg class="size-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            {{ profile.phone }}
          </a>
        </div>

        <!-- 7. CTAs -->
        <div class="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a
            :href="profile.linktree"
            target="_blank"
            rel="noopener noreferrer"
            class="group inline-flex items-center gap-2.5 rounded-full bg-[#c8f135] px-7 py-3.5 font-display text-sm font-bold text-[#0a0a0a] transition-all hover:bg-[#a8cc1f] hover:gap-3.5"
          >
            View All Links
            <svg class="size-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
          <a
            href="#projects"
            class="inline-flex items-center gap-2 rounded-full border border-[#2a2a2a] px-7 py-3.5 font-display text-sm font-medium text-[#666] transition-all hover:border-[#c8f135] hover:text-[#c8f135]"
          >
            See My Work
          </a>
        </div>

      </div>

      <!-- Stat bar — full width, dalam flow -->
      <div class="mt-16 grid grid-cols-2 border-t border-[#1a1a1a] sm:grid-cols-4">
        <div
          v-for="(stat, i) in stats"
          :key="stat.label"
          class="py-7 text-center"
          :class="i !== 0 ? 'border-l border-[#1a1a1a]' : ''"
        >
          <p class="font-display text-2xl font-black text-[#f0f0f0] lg:text-3xl">{{ stat.value }}</p>
          <p class="mt-1 font-mono text-xs text-[#444]">{{ stat.label }}</p>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup lang="ts">
import type { Profile } from '../types';

defineProps<{ profile: Profile }>();

const stats = [
  { value: '3+',  label: 'Years Experience' },
  { value: '10+', label: 'Projects Shipped' },
  { value: '5+',  label: 'Tech Stacks' },
  { value: '∞',   label: 'Coffee Consumed' },
];
</script>
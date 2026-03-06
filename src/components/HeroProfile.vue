<template>
  <section id="home" class="relative">
    <div class="rounded-3xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-xl transition-all duration-700 hover:shadow-purple-500/20 sm:p-8 md:p-12">
      <div class="relative z-10 flex flex-col items-center gap-8 lg:flex-row lg:items-center">

        <!-- ── Text Content ───────────────────────────────── -->
        <div class="flex-1 text-center lg:text-left">
          <h1 class="font-display animate-hero-fade-in mb-3 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-4xl font-black text-transparent sm:text-5xl lg:text-7xl">
            {{ profile.name }}
          </h1>
          <p class="mb-3 text-lg font-semibold text-purple-200 sm:text-xl lg:text-2xl">
            {{ profile.title }}
          </p>

          <div class="mb-5 flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm text-slate-300 sm:text-base lg:justify-start">
            <span class="flex items-center gap-1">
              <svg class="size-4 shrink-0 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {{ profile.location }}
            </span>
            <span class="flex items-center gap-1">
              <svg class="size-4 shrink-0 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {{ profile.email }}
            </span>
            <span class="flex items-center gap-1">
              <svg class="size-4 shrink-0 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {{ profile.phone }}
            </span>
          </div>

          <a
            :href="profile.linktree"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/40 sm:px-8 sm:py-4 sm:text-base"
          >
            <svg class="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
            Explore My Links
          </a>
        </div>

        <!-- ── Avatar ─────────────────────────────────────── -->
        <div class="shrink-0">
          <div
            v-if="profile.avatar"
            class="mx-auto size-52 overflow-hidden rounded-full border-2 border-purple-500 ring-4 ring-purple-500/20 sm:size-64 lg:size-80"
          >
            <img
              :src="profile.avatar"
              :alt="`${profile.name} avatar`"
              class="size-full object-cover"
              loading="lazy"
            />
          </div>
          <div
            v-else
            class="mx-auto flex size-52 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 text-5xl font-black text-white ring-4 ring-purple-500/20 sm:size-64 sm:text-6xl lg:size-80 lg:text-8xl"
          >
            {{ profile.name.charAt(0) }}
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Profile } from '../types';

defineProps<{ profile: Profile }>();
</script>
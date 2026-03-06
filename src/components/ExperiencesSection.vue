<template>
  <section v-if="experiences.length" id="experience" class="space-y-10 sm:space-y-12">
    <!-- Heading -->
    <div class="space-y-4 text-center">
      <h2 class="font-display bg-gradient-to-r from-white to-purple-300 bg-clip-text text-4xl font-black text-transparent sm:text-5xl lg:text-6xl">
        Work Experience
      </h2>
      <div class="section-divider mx-auto" />
    </div>

    <!-- Timeline Cards -->
    <div class="space-y-5 sm:space-y-6">
      <article
        v-for="(exp, idx) in experiences"
        :key="exp.id"
        class="animate-fade-in-up hover-glow group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-colors duration-300 hover:bg-white/10 sm:p-8"
        :style="{ animationDelay: `${idx * 0.15}s` }"
      >
        <div class="flex items-start gap-4 sm:gap-6">

          <!-- Icon -->
          <div class="shrink-0 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 p-3 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 sm:p-4">
            <svg class="size-6 text-white sm:size-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>

          <!-- Content -->
          <div class="min-w-0 flex-1">
            <div class="mb-3 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 class="text-xl font-bold text-white transition-colors group-hover:text-purple-300 sm:text-2xl">
                  {{ exp.role }}
                </h3>
                <p class="mt-0.5 flex items-center gap-1.5 text-base font-semibold text-purple-300 sm:text-lg">
                  <span class="opacity-60">@</span>
                  <span class="transition-transform duration-300 group-hover:translate-x-0.5">{{ exp.company }}</span>
                </p>
              </div>
              <span class="inline-flex shrink-0 items-center self-start rounded-full border border-purple-500/30 bg-purple-500/20 px-3 py-1.5 text-xs font-semibold text-purple-300 sm:px-4 sm:text-sm">
                {{ exp.period }}
              </span>
            </div>
            <p class="text-base leading-relaxed text-slate-300 sm:text-lg">
              {{ exp.details }}
            </p>
          </div>
        </div>

        <!-- Hover accent bar -->
        <div class="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-purple-500/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Experience } from '../types';

defineProps<{ experiences: Experience[] }>();
</script>
<template>
  <section v-if="certifications.length" class="space-y-8">
    <!-- Heading -->
    <div class="space-y-3 text-center lg:text-left">
      <h2 class="font-display bg-gradient-to-r from-white to-purple-300 bg-clip-text text-3xl font-black text-transparent sm:text-4xl">
        Certifications
      </h2>
      <div class="section-divider mx-auto lg:mx-0" />
    </div>

    <!-- Cards -->
    <div class="space-y-4">
      <div
        v-for="cert in certifications"
        :key="cert.id"
        class="group flex items-start justify-between gap-4 rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-xl transition-all duration-300 hover:bg-white/15 sm:p-6"
      >
        <div class="min-w-0 flex-1">
          <h3 class="mb-1 text-base font-bold text-white transition-colors group-hover:text-purple-300 sm:text-lg">
            {{ cert.name }}
          </h3>
          <p class="text-sm font-semibold text-purple-300">{{ cert.issuer }}</p>
          <span class="text-xs text-slate-400 sm:text-sm">{{ cert.year }}</span>
        </div>

        <a
          v-if="cert.link && cert.link !== '-'"
          :href="cert.link"
          target="_blank"
          rel="noopener noreferrer"
          class="shrink-0 self-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 text-xs font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 sm:text-sm"
          :aria-label="`View ${cert.name} certificate`"
        >
          View
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Certification } from '../types';

defineProps<{ certifications: Certification[] }>();
</script>
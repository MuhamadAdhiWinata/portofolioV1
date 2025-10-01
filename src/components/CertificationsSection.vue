<template>
  <section v-if="certifications.length" class="space-y-8">
    <div class="text-center">
      <h2 class="text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-300 mb-4">
        Certifications
      </h2>
      <div class="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
    </div>

    <div class="space-y-4">
      <div v-for="cert in certifications" :key="cert.id"
           class="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 group flex justify-between items-start gap-4">
        <div class="flex-1">
          <h3 class="text-lg font-bold text-white group-hover:text-purple-300 transition-colors mb-1">{{ cert.name }}</h3>
          <p class="text-purple-300 font-semibold text-sm">{{ cert.issuer }}</p>
          <span class="text-slate-400 text-sm">{{ cert.year }}</span>
        </div>
        <a v-if="cert.link && cert.link !== '-'"
           :href="cert.link"
           target="_blank"
           rel="noopener noreferrer"
           class="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium rounded-full hover:scale-105 transition-all duration-300">
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

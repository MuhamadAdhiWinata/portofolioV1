<template>
  <section v-if="experiences.length" class="space-y-8">
    <div class="text-center">
      <h2 class="text-4xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-300 mb-4">
        Experience
      </h2>
      <div class="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
    </div>

    <div class="space-y-6">
      <div v-for="(exp, index) in experiences" :key="exp.id"
           class="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 group">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
          <div>
            <h3 class="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">{{ exp.role }}</h3>
            <p class="text-purple-300 text-lg font-semibold">@ {{ exp.company }}</p>
          </div>
          <span class="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30 text-sm font-medium">
            {{ exp.period }}
          </span>
        </div>
        <p class="text-slate-300 leading-relaxed">{{ exp.details }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Experience } from '../types';
defineProps<{ experiences: Experience[] }>();
</script>

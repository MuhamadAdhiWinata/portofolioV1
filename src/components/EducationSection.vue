<template>
  <section v-if="education.length" class="space-y-8">
    <div class="text-center">
      <h2 class="text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-300 mb-4">
        Education
      </h2>
      <div class="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
    </div>

    <div class="space-y-6">
      <div v-for="edu in education" :key="edu.id"
           class="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 group">
        <h3 class="text-xl font-bold text-white group-hover:text-purple-300 transition-colors mb-2">{{ edu.degree }}</h3>
        <p class="text-purple-300 font-semibold mb-2">{{ edu.institution }}</p>
        <div class="flex justify-between items-center text-sm text-slate-300">
          <span>{{ edu.period }}</span>
          <span class="px-3 py-1 bg-green-500/20 text-green-300 rounded-full border border-green-500/30">
            GPA: {{ edu.gpa }}
          </span>
        </div>
        <p v-if="edu.notes" class="text-slate-300 text-sm mt-3">{{ edu.notes }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Education } from '../types';
defineProps<{ education: Education[] }>();
</script>

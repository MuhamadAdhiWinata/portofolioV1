<template>
  <section v-if="projects.length" class="space-y-8">
    <div class="text-center">
      <h2 class="text-4xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-300 mb-4">Featured Projects</h2>
      <div class="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
    </div>
    <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
      <div v-for="(project, index) in projects" :key="project.id"
           class="group bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:bg-white/20 cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
           @click="$emit('open-project', project)">
        <div class="relative overflow-hidden rounded-xl mb-6 h-48 bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center">
          <div class="text-6xl opacity-50">🚀</div>
        </div>
        <h3 class="text-xl font-bold text-white group-hover:text-purple-300">{{ project.title }}</h3>
        <p class="text-slate-300 text-sm">{{ project.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Project } from '../types';
defineProps<{ projects: Project[] }>();
defineEmits<{ (e: 'open-project', project: Project): void }>();
</script>

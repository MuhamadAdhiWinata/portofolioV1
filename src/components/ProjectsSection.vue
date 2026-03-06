<template>
  <section v-if="projects.length" id="projects" class="space-y-8 sm:space-y-10">
    <!-- Heading -->
    <div class="space-y-4 text-center">
      <h2 class="font-display bg-gradient-to-r from-white to-purple-300 bg-clip-text text-4xl font-black text-transparent sm:text-5xl lg:text-6xl">
        Featured Projects
      </h2>
      <div class="section-divider mx-auto" />
    </div>

    <!-- Cards Grid -->
    <div class="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      <button
        v-for="project in projects"
        :key="project.id"
        type="button"
        class="group cursor-pointer rounded-2xl border border-white/20 bg-white/10 p-5 text-left backdrop-blur-xl transition-all duration-500 hover:scale-[1.03] hover:bg-white/20 hover:shadow-2xl hover:shadow-purple-500/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 sm:p-6"
        @click="$emit('open-project', project)"
      >
        <!-- Thumbnail -->
        <div class="relative mb-5 flex h-44 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 sm:h-48">
          <span class="text-5xl opacity-50 transition-transform duration-500 group-hover:scale-110">🚀</span>
          <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>

        <!-- Meta -->
        <h3 class="mb-2 text-lg font-bold text-white transition-colors group-hover:text-purple-300 sm:text-xl">
          {{ project.title }}
        </h3>
        <p class="line-clamp-2 text-sm leading-relaxed text-slate-300">
          {{ project.description }}
        </p>

        <!-- Year badge -->
        <div class="mt-4 flex items-center justify-between">
          <span class="inline-block rounded-full border border-purple-500/30 bg-purple-500/20 px-3 py-1 text-xs font-semibold text-purple-300">
            {{ project.year }}
          </span>
          <span class="text-xs font-medium text-purple-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            View details →
          </span>
        </div>
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Project } from '../types';

defineProps<{ projects: Project[] }>();
defineEmits<{ (e: 'open-project', project: Project): void }>();
</script>
<template>
  <!--
    ProjectsSection: tidak ada margin/padding luar.
    Parent (HomePage) yang mengatur jarak dari section lain.
  -->
  <section v-if="projects.length" id="projects">
    <!-- Heading -->
    <div class="mb-8 flex items-end justify-between gap-4 border-b border-[#1a1a1a] pb-6">
      <div>
        <p class="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-[#c8f135]">Work</p>
        <h2 class="font-display text-4xl font-black text-[#f0f0f0] lg:text-5xl">Projects</h2>
      </div>
      <span class="font-mono text-xs text-[#444]">{{ String(projects.length).padStart(2, '0') }} items</span>
    </div>

    <!-- Cards -->
    <div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      <button
        v-for="(project, i) in projects"
        :key="project.id"
        type="button"
        class="group relative overflow-hidden rounded-2xl border border-[#1a1a1a] bg-[#111] p-6 text-left transition-all duration-300 hover:border-[#c8f135]/50 hover:bg-[#141414] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8f135]"
        @click="$emit('open-project', project)"
      >
        <div class="mb-6 flex items-start justify-between">
          <span class="font-mono text-xs text-[#333]">{{ String(i + 1).padStart(2, '0') }}</span>
          <svg class="size-4 text-[#333] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#c8f135]"
               fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 17L17 7M7 7h10v10"/>
          </svg>
        </div>

        <div class="mb-5 flex size-12 items-center justify-center rounded-xl border border-[#2a2a2a] bg-[#0a0a0a] text-2xl transition-colors duration-300 group-hover:border-[#c8f135]/30">
          {{ projectEmoji(i) }}
        </div>

        <h3 class="mb-2 font-display text-lg font-bold text-[#f0f0f0] transition-colors group-hover:text-[#c8f135]">
          {{ project.title }}
        </h3>
        <p class="mb-5 line-clamp-2 font-display text-sm leading-relaxed text-[#555]">
          {{ project.description }}
        </p>
        <span class="font-mono text-xs text-[#333]">{{ project.year }}</span>

        <!-- Hover accent line -->
        <div class="absolute bottom-0 left-0 h-px w-0 bg-[#c8f135] transition-all duration-300 group-hover:w-full" />
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Project } from '../types';

defineProps<{ projects: Project[] }>();
defineEmits<{ (e: 'open-project', project: Project): void }>();

const emojis = ['⚡', '🛠', '📡', '🔐', '🧬', '🎯', '🌐', '🚀'];
const projectEmoji = (i: number) => emojis[i % emojis.length];
</script>
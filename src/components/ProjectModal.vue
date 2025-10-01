<template>
  <Teleport to="body">
    <div v-if="project"
         class="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4"
         @click.self="$emit('close')">
      <div class="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl max-w-2xl w-full p-8 relative animate-modal-in">
        <button class="absolute top-6 right-6 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white hover:text-purple-300 transition-all duration-300"
                @click="$emit('close')">
          ✕
        </button>

        <div class="mb-8">
          <div class="h-48 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl flex items-center justify-center mb-6">
            <div class="text-8xl opacity-50">🚀</div>
          </div>

          <h3 class="text-3xl font-bold text-white mb-3">{{ project.title }}</h3>
          <div class="flex items-center gap-4 mb-4">
            <span class="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30 text-sm font-medium">
              {{ project.year }}
            </span>
          </div>
          <p class="text-slate-300 leading-relaxed mb-6 text-lg">{{ project.description }}</p>

          <div class="flex flex-wrap gap-2 mb-8">
            <span v-for="tag in project.tags.split(', ')" :key="tag"
                  class="px-4 py-2 bg-purple-500/20 text-purple-300 text-sm rounded-full border border-purple-500/30">
              {{ tag }}
            </span>
          </div>

          <a :href="project.link" target="_blank" rel="noopener noreferrer"
             class="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full hover:scale-105 transition-all duration-300">
            <span>View Project</span>
          </a>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import type { Project } from '../types';

defineProps<{ project: Project | null }>();

// Emit 'close' event
defineEmits<{ (e: 'close'): void }>();
</script>


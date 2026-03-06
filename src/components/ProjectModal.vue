<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="project"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
        role="dialog"
        aria-modal="true"
        :aria-label="project.title"
        @click.self="$emit('close')"
      >
        <div class="modal-content relative w-full max-w-3xl overflow-hidden rounded-3xl border border-purple-500/30 bg-gradient-to-br from-slate-900/95 to-purple-900/95 p-6 shadow-2xl shadow-purple-500/20 sm:p-8">

          <!-- ── Close Button ──────────────────────────────── -->
          <button
            class="absolute right-5 top-5 z-10 flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:rotate-90 hover:bg-white/20 sm:right-6 sm:top-6 sm:size-12"
            aria-label="Close modal"
            @click="$emit('close')"
          >
            <svg class="size-5 sm:size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <!-- ── Header Image ──────────────────────────────── -->
          <div
            :class="['relative mb-6 flex h-48 items-center justify-center overflow-hidden rounded-2xl group sm:h-64', projectGradient]"
          >
            <div class="absolute inset-0 bg-black/20 transition-all duration-500 group-hover:bg-black/10" />
            <svg
              class="relative z-10 size-16 text-white/80 transition-transform duration-500 group-hover:scale-110 sm:size-24"
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>

            <!-- Floating particles inside modal header -->
            <div aria-hidden="true" class="pointer-events-none absolute inset-0">
              <div
                v-for="i in 8"
                :key="i"
                class="animate-particle-modal absolute size-2 rounded-full bg-white opacity-40"
                :style="particleStyle(i)"
              />
            </div>
          </div>

          <!-- ── Content ───────────────────────────────────── -->
          <div class="space-y-5 sm:space-y-6">
            <div>
              <span class="mb-3 inline-block rounded-full border border-purple-500/30 bg-purple-500/20 px-4 py-1.5 text-sm font-semibold text-purple-300">
                {{ project.year }}
              </span>
              <h3 class="font-display mb-3 text-3xl font-black leading-tight text-white sm:text-4xl">
                {{ project.title }}
              </h3>
              <p class="text-base leading-relaxed text-slate-300 sm:text-lg">
                {{ project.description }}
              </p>
            </div>

            <!-- Tags -->
            <div class="flex flex-wrap gap-2">
              <span
                v-for="(tag, idx) in project.tags.split(', ')"
                :key="idx"
                class="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-purple-200 transition-all duration-300 hover:scale-105 hover:border-purple-500/30 hover:bg-white/10"
              >
                {{ tag }}
              </span>
            </div>

            <!-- CTA -->
            <a
              :href="project.link"
              target="_blank"
              rel="noopener noreferrer"
              :class="['group inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl sm:px-8 sm:py-4 sm:text-base', projectGradient]"
            >
              View Project
              <svg class="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 sm:size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { Project } from '../types';

const props = defineProps<{ project: Project | null }>();
defineEmits<{ (e: 'close'): void }>();

const gradients = [
  'bg-gradient-to-br from-purple-500 to-pink-500',
  'bg-gradient-to-br from-blue-500 to-cyan-500',
  'bg-gradient-to-br from-green-500 to-emerald-500',
  'bg-gradient-to-br from-orange-500 to-red-500',
  'bg-gradient-to-br from-indigo-500 to-purple-500',
];

const projectGradient = computed(() => {
  if (!props.project) return gradients[0];
  return gradients[props.project.id % gradients.length];
});

/** Deterministic positions — avoids hydration mismatch / re-render jumps */
const particleStyle = (i: number) => ({
  left: `${(i * 29 + 5) % 90}%`,
  top: `${(i * 41 + 13) % 85}%`,
  animationDelay: `${(i * 0.6) % 3}s`,
  animationDuration: `${3 + (i * 0.9) % 4}s`,
});
</script>
<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="project"
        class="fixed inset-0 z-50 flex items-end justify-center bg-black/80 p-4 backdrop-blur-sm sm:items-center"
        role="dialog"
        aria-modal="true"
        :aria-label="project.title"
        @click.self="$emit('close')"
      >
        <div class="modal-box relative w-full max-w-2xl overflow-hidden rounded-2xl border border-[#2a2a2a] bg-[#111]">

          <!-- Header bar -->
          <div :class="['h-1 w-full', accentColor]" />

          <div class="p-6 sm:p-8">
            <!-- Top row -->
            <div class="mb-6 flex items-start justify-between gap-4">
              <div>
                <span class="font-mono text-xs text-[#555]">{{ project.year }}</span>
                <h3 class="mt-1 font-display text-2xl font-black text-[#f0f0f0] sm:text-3xl">
                  {{ project.title }}
                </h3>
              </div>
              <button
                class="shrink-0 rounded-lg border border-[#2a2a2a] p-2 text-[#555] transition hover:border-[#c8f135] hover:text-[#c8f135]"
                aria-label="Close"
                @click="$emit('close')"
              >
                <svg class="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>

            <!-- Description -->
            <p class="mb-6 font-display text-base leading-relaxed text-[#888]">
              {{ project.description }}
            </p>

            <!-- Tags -->
            <div class="mb-8 flex flex-wrap gap-2">
              <span
                v-for="(tag, i) in tagList"
                :key="i"
                class="tag-pill"
              >
                {{ tag }}
              </span>
            </div>

            <!-- CTA -->
            <a
              :href="project.link"
              target="_blank"
              rel="noopener noreferrer"
              class="group inline-flex items-center gap-3 rounded-full bg-[#c8f135] px-7 py-3.5 font-display text-sm font-bold text-[#0a0a0a] transition-all hover:bg-[#a8cc1f] hover:gap-4"
            >
              View Project
              <svg class="size-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
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

const colors = [
  'bg-[#c8f135]', 'bg-[#38bdf8]', 'bg-[#fb923c]',
  'bg-[#a78bfa]', 'bg-[#34d399]', 'bg-[#f472b6]',
];

const accentColor = computed(() =>
  props.project ? colors[props.project.id % colors.length] : colors[0]
);

const tagList = computed(() =>
  props.project?.tags.split(',').map((t) => t.trim()).filter(Boolean) ?? []
);
</script>

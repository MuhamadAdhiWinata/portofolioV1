<template>
  <!--
    ExperiencesSection: tidak ada margin/padding luar.
    Parent (HomePage) yang mengatur jarak dari section lain.
  -->
  <section v-if="experiences.length" id="experience">
    <!-- Heading -->
    <div class="mb-8 flex items-end justify-between gap-4 border-b border-[#1a1a1a] pb-6">
      <div>
        <p class="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-[#c8f135]">Career</p>
        <h2 class="font-display text-4xl font-black text-[#f0f0f0] lg:text-5xl">Experience</h2>
      </div>
      <span class="font-mono text-xs text-[#444]">{{ String(experiences.length).padStart(2, '0') }} roles</span>
    </div>

    <!-- Timeline -->
    <div class="relative">
      <!-- Vertical line -->
      <div class="absolute left-[5px] top-0 h-full w-px bg-[#1a1a1a] sm:left-[23px]" aria-hidden="true" />

      <div class="space-y-4">
        <article
          v-for="(exp) in experiences"
          :key="exp.id"
          class="group relative pl-8 sm:pl-16"
        >
          <!-- Dot -->
          <div class="absolute left-0 top-7 sm:left-[18px]">
            <div class="size-2.5 rounded-full border border-[#c8f135] bg-[#0a0a0a] transition-colors duration-300 group-hover:bg-[#c8f135]" />
          </div>

          <!-- Card -->
          <div class="rounded-2xl border border-[#1a1a1a] bg-[#111] p-6 transition-colors duration-200 hover:border-[#2a2a2a] sm:p-8">
            <div class="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 class="font-display text-xl font-bold text-[#f0f0f0] transition-colors group-hover:text-[#c8f135]">
                  {{ exp.role }}
                </h3>
                <p class="mt-1 font-display text-base text-[#888]">@ {{ exp.company }}</p>
              </div>
              <span class="shrink-0 self-start rounded-full border border-[#2a2a2a] bg-[#0a0a0a] px-4 py-1.5 font-mono text-xs text-[#555]">
                {{ exp.period }}
              </span>
            </div>
            <p class="font-display text-sm leading-relaxed text-[#555]">{{ exp.details }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Experience } from '../types';
defineProps<{ experiences: Experience[] }>();
</script>
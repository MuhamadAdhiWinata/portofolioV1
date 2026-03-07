<template>
  <!--
    EducationSection: tidak ada margin/padding luar.
    Parent (HomePage) yang mengatur jarak dari section lain.
  -->
  <section v-if="education.length">
    <!-- Heading -->
    <div class="mb-8 border-b border-[#1a1a1a] pb-5">
      <p class="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-[#c8f135]">Background</p>
      <h2 class="font-display text-3xl font-black text-[#f0f0f0] lg:text-4xl">Education</h2>
    </div>

    <!-- Cards -->
    <div class="space-y-4">
      <article
        v-for="edu in education"
        :key="edu.id"
        class="group rounded-xl border border-[#1a1a1a] bg-[#111] p-5 transition-colors duration-200 hover:border-[#2a2a2a]"
      >
        <div class="mb-3 flex items-start justify-between gap-4">
          <div class="min-w-0">
            <h3 class="font-display text-base font-bold text-[#f0f0f0] transition-colors group-hover:text-[#c8f135]">
              {{ edu.degree }}
            </h3>
            <p class="mt-0.5 font-display text-sm text-[#888]">{{ edu.institution }}</p>
          </div>
          <span class="shrink-0 rounded-full border border-[#2a2a2a] px-3 py-1 font-mono text-[10px] text-[#555]">
            {{ edu.period }}
          </span>
        </div>

        <span class="inline-flex items-center gap-1.5 font-mono text-xs text-[#c8f135]">
          <svg class="size-3 fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
          </svg>
          GPA {{ edu.gpa }}
        </span>

        <p v-if="edu.notes" class="mt-3 border-l border-[#c8f135]/30 pl-3 font-display text-xs italic text-[#444]">
          {{ edu.notes }}
        </p>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Education } from '../types';
defineProps<{ education: Education[] }>();
</script>
<template>
  <section v-if="education.length" class="space-y-8">
    <!-- Heading -->
    <div class="space-y-3 text-center lg:text-left">
      <h2 class="font-display bg-gradient-to-r from-white to-purple-300 bg-clip-text text-3xl font-black text-transparent sm:text-4xl lg:text-5xl">
        Education
      </h2>
      <div class="section-divider mx-auto lg:mx-0" />
    </div>

    <!-- Cards -->
    <div class="space-y-5">
      <article
        v-for="(edu, idx) in education"
        :key="edu.id"
        class="animate-fade-in-up hover-glow group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-colors duration-300 hover:bg-white/10 sm:p-6"
        :style="{ animationDelay: `${idx * 0.1}s` }"
      >
        <div class="flex items-start gap-4">

          <!-- Icon -->
          <div class="shrink-0 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 p-3 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
            <svg class="size-5 text-white sm:size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
            </svg>
          </div>

          <!-- Content -->
          <div class="min-w-0 flex-1">
            <h3 class="mb-1 text-lg font-bold text-white transition-colors group-hover:text-purple-300 sm:text-xl">
              {{ edu.degree }}
            </h3>
            <p class="mb-2 flex items-center gap-1.5 text-sm font-semibold text-purple-300 sm:text-base">
              <svg class="size-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span class="transition-transform duration-300 group-hover:translate-x-0.5">{{ edu.institution }}</span>
            </p>

            <!-- Meta row -->
            <div class="mb-3 flex flex-wrap items-center gap-2 text-sm text-slate-300">
              <div class="flex items-center gap-1">
                <svg class="size-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {{ edu.period }}
              </div>
              <span class="size-1 rounded-full bg-slate-500" />
              <span class="inline-flex items-center gap-1 rounded-full border border-green-500/30 bg-green-500/20 px-2.5 py-0.5 font-semibold text-green-300">
                <svg class="size-3 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                GPA: {{ edu.gpa }}
              </span>
            </div>

            <p v-if="edu.notes" class="border-l-2 border-purple-500/30 pl-3 text-sm italic text-slate-400">
              {{ edu.notes }}
            </p>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Education } from '../types';

defineProps<{ education: Education[] }>();
</script>
<template>
  <section class="space-y-10 sm:space-y-12">
    <!-- Heading -->
    <div class="space-y-4 text-center">
      <h2 class="font-display bg-gradient-to-r from-white to-purple-300 bg-clip-text text-4xl font-black text-transparent sm:text-5xl lg:text-6xl">
        Skills &amp; Expertise
      </h2>
      <div class="section-divider mx-auto" />
    </div>

    <!-- Grid -->
    <div class="grid gap-6 sm:grid-cols-2 sm:gap-8">
      <div
        v-for="(skill, idx) in skills"
        :key="idx"
        class="group space-y-3"
        :style="{ animationDelay: `${idx * 0.1}s` }"
      >
        <div class="flex items-center justify-between">
          <span class="text-base font-semibold text-white transition-colors group-hover:text-purple-300 sm:text-lg">
            {{ skill.name }}
          </span>
          <span class="text-sm font-bold text-purple-400 sm:text-base">{{ skill.level }}%</span>
        </div>
        <div class="h-2.5 overflow-hidden rounded-full bg-white/5 sm:h-3">
          <div
            class="skill-bar h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
            :style="{ '--skill-width': `${skill.level}%` }"
            role="progressbar"
            :aria-valuenow="skill.level"
            aria-valuemin="0"
            aria-valuemax="100"
            :aria-label="`${skill.name} proficiency`"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const skills = ref([
  { name: 'JavaScript / TypeScript', level: 95 },
  { name: 'Vue.js / React', level: 90 },
  { name: 'Node.js / Express', level: 88 },
  { name: 'Python / Django', level: 85 },
  { name: 'Cloud (AWS / GCP)', level: 82 },
  { name: 'Docker / Kubernetes', level: 80 },
]);
</script>
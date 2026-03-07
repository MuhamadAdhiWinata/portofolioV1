<template>
  <!--
    SkillsSection: tidak ada margin/padding luar.
    Parent (HomePage) yang mengatur jarak dari section lain.
  -->
  <section id="skills">
    <!-- Heading -->
    <div class="mb-8 flex items-end justify-between gap-4 border-b border-[#1a1a1a] pb-6">
      <div>
        <p class="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-[#c8f135]">Expertise</p>
        <h2 class="font-display text-4xl font-black text-[#f0f0f0] lg:text-5xl">Skills</h2>
      </div>
      <span class="font-mono text-xs text-[#444]">{{ String(skills.length).padStart(2, '0') }} items</span>
    </div>

    <!-- Grid -->
    <div class="grid gap-4 sm:grid-cols-2">
      <div
        v-for="(skill, i) in skills"
        :key="i"
        class="group rounded-xl border border-[#1a1a1a] bg-[#111] p-5 transition-colors duration-200 hover:border-[#c8f135]/40"
      >
        <div class="mb-3 flex items-center justify-between">
          <span class="font-display text-sm font-bold text-[#f0f0f0] lg:text-base">{{ skill.name }}</span>
          <span class="font-mono text-sm text-[#c8f135]">{{ skill.level }}%</span>
        </div>
        <div class="h-px w-full bg-[#1a1a1a]">
          <div
            class="skill-bar h-px bg-[#c8f135]"
            :style="{ '--w': `${skill.level}%`, animationDelay: `${i * 0.08}s` }"
            role="progressbar"
            :aria-valuenow="skill.level"
            aria-valuemin="0"
            aria-valuemax="100"
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
  { name: 'Vue.js / React',          level: 90 },
  { name: 'Node.js / Express',       level: 88 },
  { name: 'Python / Django',         level: 85 },
  { name: 'Cloud (AWS / GCP)',       level: 82 },
  { name: 'Docker / Kubernetes',     level: 80 },
]);
</script>
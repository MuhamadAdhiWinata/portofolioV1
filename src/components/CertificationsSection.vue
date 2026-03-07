<template>
  <!--
    CertificationsSection: tidak ada margin/padding luar.
    Parent (HomePage) yang mengatur jarak dari section lain.
  -->
  <section v-if="certifications.length">
    <!-- Heading -->
    <div class="mb-8 border-b border-[#1a1a1a] pb-5">
      <p class="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-[#c8f135]">Credentials</p>
      <h2 class="font-display text-3xl font-black text-[#f0f0f0] lg:text-4xl">Certifications</h2>
    </div>

    <!-- List -->
    <div class="space-y-3">
      <div
        v-for="cert in certifications"
        :key="cert.id"
        class="group flex items-center justify-between gap-4 rounded-xl border border-[#1a1a1a] bg-[#111] px-5 py-4 transition-colors duration-200 hover:border-[#2a2a2a]"
      >
        <div class="min-w-0">
          <h3 class="truncate font-display text-sm font-bold text-[#f0f0f0] transition-colors group-hover:text-[#c8f135]">
            {{ cert.name }}
          </h3>
          <p class="font-mono text-xs text-[#555]">{{ cert.issuer }} · {{ cert.year }}</p>
        </div>

        <a
          v-if="cert.link && cert.link !== '-'"
          :href="cert.link"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="`View ${cert.name}`"
          class="shrink-0 rounded-full border border-[#2a2a2a] px-4 py-1.5 font-mono text-[10px] text-[#555] transition-all hover:border-[#c8f135] hover:text-[#c8f135]"
          @click.stop
        >
          View ↗
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Certification } from '../types';
defineProps<{ certifications: Certification[] }>();
</script>
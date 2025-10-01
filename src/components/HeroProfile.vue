<template>
  <section class="relative">
    <div class="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl hover:shadow-purple-500/20 transition-all duration-700 group">
      <div class="relative z-10 flex flex-col lg:flex-row items-center gap-8">
        <div class="flex-1 text-center lg:text-left">
          <h1 class="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-300 mb-4 animate-fade-in">
            {{ profile.name }}
          </h1>
          <p class="text-2xl text-purple-200 font-semibold">{{ profile.title }}</p>
          <div class="flex flex-wrap justify-center lg:justify-start gap-4 text-slate-300 mt-2">
            <span>{{ profile.location }}</span>
            <span>{{ profile.email }}</span>
            <span>{{ profile.phone }}</span>
          </div>
          <a :href="profile.linktree" target="_blank" class="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full mt-4 hover:scale-105 transition-all duration-300">
            Explore My Links
          </a>
        </div>

        <!-- Avatar / Foto -->
        <div class="lg:w-80 relative">
          <div v-if="profile.avatar" class="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden mx-auto border-2 border-purple-500">
            <img :src="profile.avatar" alt="Avatar" class="w-full h-full object-cover">
          </div>
          <div v-else class="w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 p-1 mx-auto flex items-center justify-center text-6xl lg:text-8xl">
            {{ profile.name.charAt(0) }}
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Profile } from '../types';
defineProps<{ profile: Profile }>();
</script>

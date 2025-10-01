<template>
  <div class="flex items-center justify-center min-h-screen">
    <div class="bg-red-500/10 border border-red-500/20 rounded-xl p-8 text-center backdrop-blur-sm">
      <div class="text-red-400 text-6xl mb-4">⚠️</div>
      <p class="text-red-300 text-xl">{{ message }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ message: string }>();
</script>

<template>
  <div class="flex min-h-screen w-full items-center justify-center px-4" role="alert">
    <div class="animate-shake w-full max-w-sm space-y-6 rounded-2xl border border-red-500/20 bg-[#111] p-8 text-center">
      <!-- Icon -->
      <div class="mx-auto flex size-14 items-center justify-center rounded-full border border-red-500/30 bg-red-500/10">
        <svg class="size-7 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
        </svg>
      </div>

      <!-- Message -->
      <div class="space-y-2">
        <h3 class="font-display text-lg font-bold text-[#f0f0f0]">Something went wrong</h3>
        <p class="font-mono text-sm text-[#555]">{{ message }}</p>
      </div>

      <!-- Retry -->
      <button
        type="button"
        class="group inline-flex items-center gap-2 rounded-full border border-[#2a2a2a] px-6 py-3 font-mono text-sm text-[#888] transition-all hover:border-[#c8f135] hover:text-[#c8f135]"
        @click="() => window.location.reload()"
      >
        <svg class="size-4 transition-transform group-hover:rotate-180 duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
        </svg>
        Try Again
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ message: string }>();
</script>

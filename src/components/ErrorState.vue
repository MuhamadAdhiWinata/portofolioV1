<template>
  <div class="flex min-h-[60vh] items-center justify-center px-4" role="alert">
    <div class="w-full max-w-md">
      <div class="animate-shake space-y-6 rounded-3xl border-2 border-red-500/30 bg-red-500/10 p-8 text-center backdrop-blur-sm">

        <!-- Icon -->
        <div class="relative mx-auto size-20 sm:size-24">
          <div class="absolute inset-0 animate-ping rounded-full bg-red-500/20" />
          <div class="relative flex size-20 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-red-600 shadow-xl shadow-red-500/30 sm:size-24">
            <svg class="animate-wiggle size-10 text-white sm:size-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
        </div>

        <!-- Message -->
        <div class="space-y-2">
          <h3 class="text-xl font-bold text-red-300 sm:text-2xl">Oops! Something went wrong</h3>
          <p class="text-base leading-relaxed text-red-200 sm:text-lg">{{ message }}</p>
        </div>

        <!-- Retry -->
        <button
          type="button"
          class="group mx-auto flex items-center gap-3 rounded-full bg-gradient-to-r from-red-600 to-red-500 px-7 py-3.5 font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-red-500/30 sm:px-8 sm:py-4"
          @click="handleRetry"
        >
          <svg class="size-5 transition-transform duration-500 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Try Again
        </button>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ message: string }>();

const handleRetry = () => {
  window.location.reload();
};
</script>
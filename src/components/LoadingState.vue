<template>
  <div class="flex min-h-[60vh] items-center justify-center" role="status" aria-label="Loading content">
    <div class="space-y-6 text-center">

      <!-- Spinner rings -->
      <div class="relative mx-auto size-20 sm:size-24">
        <div class="absolute inset-0 rounded-full border-4 border-purple-500/30" />
        <div class="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-purple-500" />
        <div class="animate-spin-slow absolute inset-3 rounded-full border-4 border-transparent border-t-pink-500" />
        <div class="animate-spin-reverse absolute inset-6 rounded-full border-4 border-transparent border-t-purple-300" />
      </div>

      <!-- Text -->
      <div class="space-y-3">
        <p class="animate-pulse text-xl font-bold text-white sm:text-2xl">
          Loading Amazing Content
        </p>
        <div class="flex items-center justify-center gap-1.5">
          <span class="size-2 animate-bounce rounded-full bg-purple-500" style="animation-delay: 0s" />
          <span class="size-2 animate-bounce rounded-full bg-pink-500" style="animation-delay: 0.2s" />
          <span class="size-2 animate-bounce rounded-full bg-purple-400" style="animation-delay: 0.4s" />
        </div>
      </div>

    </div>
  </div>
</template>
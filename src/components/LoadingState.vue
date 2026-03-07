<template>
  <div class="flex min-h-screen w-full items-center justify-center" role="status" aria-label="Loading">
    <div class="space-y-6 text-center">
      <!-- Spinner -->
      <div class="relative mx-auto size-16">
        <div class="absolute inset-0 rounded-full border border-[#1a1a1a]" />
        <div class="animate-spin-slow absolute inset-0 rounded-full border border-transparent border-t-[#c8f135]" />
        <div class="animate-spin-rev absolute inset-3 rounded-full border border-transparent border-t-[#555]" />
      </div>

      <!-- Text -->
      <div class="space-y-2">
        <p class="font-mono text-sm text-[#555]">Loading portfolio</p>
        <div class="flex items-center justify-center gap-1">
          <span class="size-1 animate-bounce rounded-full bg-[#c8f135]" style="animation-delay: 0s" />
          <span class="size-1 animate-bounce rounded-full bg-[#c8f135]" style="animation-delay: 0.15s" />
          <span class="size-1 animate-bounce rounded-full bg-[#c8f135]" style="animation-delay: 0.3s" />
        </div>
      </div>
    </div>
  </div>
</template>

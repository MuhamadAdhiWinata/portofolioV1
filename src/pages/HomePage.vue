<template>
  <!-- Background wrapper — FULL WIDTH, tidak dibatasi max-w -->
  <div class="relative flex min-h-screen flex-col overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">

    <!-- ── Floating Particles ──────────────────────────────── -->
    <div aria-hidden="true" class="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        v-for="i in 20"
        :key="i"
        class="animate-float absolute size-1.5 rounded-full bg-purple-400 opacity-20 sm:size-2"
        :style="particleStyle(i)"
      />
    </div>

    <!-- ── Gradient Orbs ──────────────────────────────────── -->
    <div aria-hidden="true" class="pointer-events-none absolute inset-0 overflow-hidden">
      <div class="animate-pulse-slow absolute right-1/4 top-1/4 size-72 rounded-full bg-purple-500/20 blur-3xl sm:size-96" />
      <div
        class="animate-pulse-slow absolute bottom-1/4 left-1/4 size-72 rounded-full bg-pink-500/20 blur-3xl sm:size-96"
        style="animation-delay: 1s"
      />
    </div>

    <!-- ── Navigation ─────────────────────────────────────── -->
    <nav
      class="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl transition-all duration-300"
      :class="{ 'shadow-lg shadow-purple-500/10': scrollY > 50 }"
    >
      <!-- Nav inner — max-w hanya untuk konten nav -->
      <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <span class="font-display bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-xl font-black text-transparent sm:text-2xl">
          Portfolio
        </span>

        <!-- Desktop Links -->
        <div class="hidden items-center gap-6 text-sm font-medium text-slate-300 sm:flex">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="transition-colors duration-200 hover:text-purple-400"
          >
            {{ link.label }}
          </a>
        </div>

        <!-- Mobile Hamburger -->
        <button
          class="flex size-10 items-center justify-center rounded-xl bg-white/10 text-white transition hover:bg-white/20 sm:hidden"
          :aria-expanded="mobileOpen"
          aria-label="Toggle navigation"
          @click="mobileOpen = !mobileOpen"
        >
          <svg v-if="!mobileOpen" class="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div v-if="mobileOpen" class="border-t border-white/10 bg-slate-950/95 px-4 py-4 sm:hidden">
          <div class="flex flex-col gap-4">
            <a
              v-for="link in navLinks"
              :key="link.href"
              :href="link.href"
              class="text-base font-medium text-slate-300 transition-colors hover:text-purple-400"
              @click="mobileOpen = false"
            >
              {{ link.label }}
            </a>
          </div>
        </div>
      </Transition>
    </nav>

    <!-- ── Main — full width, padding kiri-kanan, lalu inner container di-center ── -->
    <main class="relative z-10 w-full flex-1 px-4 pb-24 pt-28 sm:px-6 sm:pt-28 lg:px-8">
      <LoadingState v-if="loading" />
      <ErrorState v-else-if="error" :message="error" />

      <!-- Inner container — max-w hanya membatasi konten, bukan background -->
      <div v-else class="mx-auto max-w-7xl space-y-24 sm:space-y-32">
        <HeroProfile v-if="profile" :profile="profile" />
        <SkillsSection />
        <ProjectsSection :projects="projects" @open-project="openProject" />
        <ExperiencesSection :experiences="experiences" />

        <div class="grid gap-16 lg:grid-cols-2">
          <EducationSection :education="education" />
          <CertificationsSection :certifications="certifications" />
        </div>

        <!-- Contact CTA -->
        <section id="contact" class="space-y-8 py-16 text-center sm:py-20">
          <h2 class="font-display animate-hero-fade-in bg-gradient-to-r from-white to-purple-300 bg-clip-text text-4xl font-black text-transparent sm:text-5xl lg:text-6xl">
            Let's Work Together
          </h2>
          <p class="mx-auto max-w-2xl text-lg text-slate-300 sm:text-xl">
            Have a project in mind? Let's discuss how we can bring your ideas to life.
          </p>
          <a
            v-if="profile"
            :href="`mailto:${profile.email}`"
            class="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 sm:px-10 sm:py-5 sm:text-lg"
          >
            <svg class="size-5 sm:size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Start a Conversation
          </a>
        </section>
      </div>
    </main>

    <!-- ── Footer — full width ────────────────────────────── -->
    <footer class="relative z-10 w-full border-t border-white/10 bg-slate-950/50 py-8 text-center text-sm text-slate-400 backdrop-blur-xl">
      <p>© {{ new Date().getFullYear() }} {{ profile?.name || 'Portfolio' }}. Built with passion and lots of coffee ☕</p>
    </footer>

    <!-- ── Project Modal ──────────────────────────────────── -->
    <ProjectModal :project="selectedProject" @close="selectedProject = null" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import type { Profile, Project, Experience, Education, Certification } from '../types';
import { getProfiles } from '../services/profileService';
import { getProjects } from '../services/projectService';
import { getExperiences } from '../services/experienceService';
import { getEducation } from '../services/educationService';
import { getCertifications } from '../services/certificationService';
import HeroProfile from '../components/HeroProfile.vue';
import SkillsSection from '../components/SkillsSection.vue';
import ProjectsSection from '../components/ProjectsSection.vue';
import ExperiencesSection from '../components/ExperiencesSection.vue';
import EducationSection from '../components/EducationSection.vue';
import CertificationsSection from '../components/CertificationsSection.vue';
import ProjectModal from '../components/ProjectModal.vue';
import ErrorState from '../components/ErrorState.vue';
import LoadingState from '../components/LoadingState.vue';

const profile = ref<Profile | null>(null);
const projects = ref<Project[]>([]);
const experiences = ref<Experience[]>([]);
const education = ref<Education[]>([]);
const certifications = ref<Certification[]>([]);
const selectedProject = ref<Project | null>(null);
const loading = ref(true);
const error = ref<string | null>(null);
const scrollY = ref(0);
const mobileOpen = ref(false);

const navLinks = [
  { href: '#home',       label: 'Home' },
  { href: '#projects',   label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact',    label: 'Contact' },
];

const openProject = (p: Project) => {
  selectedProject.value = p;
};

const handleScroll = () => {
  scrollY.value = window.scrollY;
};

const particleStyle = (i: number) => ({
  left: `${(i * 37 + 11) % 100}%`,
  top:  `${(i * 53 + 7) % 100}%`,
  animationDelay:    `${(i * 0.7) % 5}s`,
  animationDuration: `${6 + (i * 1.3) % 8}s`,
});

onMounted(async () => {
  window.addEventListener('scroll', handleScroll, { passive: true });

  try {
    const [profileList, projectList, experienceList, educationList, certificationList] =
      await Promise.all([
        getProfiles(),
        getProjects(),
        getExperiences(),
        getEducation(),
        getCertifications(),
      ]);

    profile.value        = profileList[0] ?? null;
    projects.value       = projectList;
    experiences.value    = experienceList;
    education.value      = educationList;
    certifications.value = certificationList;
  } catch (err: unknown) {
    error.value = err instanceof Error ? err.message : 'Failed to load data';
  } finally {
    loading.value = false;
  }
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
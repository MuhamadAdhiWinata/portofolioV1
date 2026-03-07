<template>
  <div class="grain-overlay relative min-h-screen w-full bg-[#0a0a0a] text-[#f0f0f0]">

    <!-- ══════════════════════════════════════════════
         NAV
    ══════════════════════════════════════════════ -->
    <header
      class="fixed inset-x-0 top-0 z-50 transition-all duration-300"
      :class="scrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#1a1a1a]' : 'bg-transparent'"
    >
      <div class="flex items-center justify-between px-6 py-5 lg:px-12">
        <a href="#hero" class="font-mono text-sm text-[#888] transition-colors hover:text-[#c8f135]">
          <span class="text-[#c8f135]">{'>'}</span> portfolio.dev
        </a>

        <nav class="hidden items-center gap-8 sm:flex">
          <a v-for="link in navLinks" :key="link.href" :href="link.href"
             class="font-mono text-xs uppercase tracking-widest text-[#555] transition-colors hover:text-[#c8f135]">
            {{ link.label }}
          </a>
          <a v-if="profile" :href="`mailto:${profile.email}`"
             class="rounded-full border border-[#c8f135] px-5 py-2 font-mono text-xs uppercase tracking-widest text-[#c8f135] transition-all hover:bg-[#c8f135] hover:text-[#0a0a0a]">
            Hire Me
          </a>
        </nav>

        <button
          class="flex size-9 items-center justify-center rounded-lg border border-[#2a2a2a] text-[#888] transition hover:border-[#c8f135] hover:text-[#c8f135] sm:hidden"
          :aria-expanded="mobileOpen"
          aria-label="Toggle menu"
          @click="mobileOpen = !mobileOpen"
        >
          <svg v-if="!mobileOpen" class="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
          <svg v-else class="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>

      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-1"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div v-if="mobileOpen" class="border-t border-[#1a1a1a] bg-[#0a0a0a] px-6 py-6 sm:hidden">
          <div class="flex flex-col gap-5">
            <a v-for="link in navLinks" :key="link.href" :href="link.href"
               class="font-mono text-sm uppercase tracking-widest text-[#888] transition-colors hover:text-[#c8f135]"
               @click="mobileOpen = false">
              {{ link.label }}
            </a>
          </div>
        </div>
      </Transition>
    </header>

    <!-- ══════════════════════════════════════════════
         MAIN
    ══════════════════════════════════════════════ -->
    <main class="w-full">
      <LoadingState v-if="loading" />
      <ErrorState v-else-if="error" :message="error" />

      <template v-else>

        <!--
          Hero: full-width, mengatur max-w & px sendiri di dalam.
          Tidak diberi margin/padding dari sini.
        -->
        <HeroProfile v-if="profile" :profile="profile" />

        <!--
          Semua section lain: dikurung dalam satu container.
          HANYA di sini ada px (horizontal padding) dan space-y (jarak antar section).
          Component di dalam TIDAK boleh punya margin/padding luar.
        -->
        <div class="px-6 lg:px-12">
          <div class="space-y-28 py-24 lg:space-y-32">
            
            <SkillsSection class="pb-12"/>

            <ProjectsSection
              :projects="projects"
              @open-project="openProject"
            class="pb-12"/>

            <ExperiencesSection :experiences="experiences" class="pb-12"/>

            <div class="grid gap-16 lg:grid-cols-2 pb-12">
              <EducationSection :education="education" />
              <CertificationsSection :certifications="certifications" />
            </div>

            <ContactSection :profile="profile" class="pb-12"/>

          </div>
        </div>
      </template>
    </main>

    <!-- ══════════════════════════════════════════════
         FOOTER
    ══════════════════════════════════════════════ -->
    <footer class="w-full border-t border-[#1a1a1a]">
      <div class="flex flex-wrap items-center justify-between gap-4 px-6 py-8 lg:px-12">
        <p class="font-mono text-xs text-[#444]">
          © {{ new Date().getFullYear() }} {{ profile?.name || 'Portfolio' }}
        </p>
        <p class="font-mono text-xs text-[#444]">
          Built with Vue 3 + Tailwind v4
        </p>
      </div>
    </footer>

    <ProjectModal :project="selectedProject" @close="selectedProject = null" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import type { Profile, Project, Experience, Education, Certification } from '../types';
import { getProfiles }        from '../services/profileService';
import { getProjects }        from '../services/projectService';
import { getExperiences }     from '../services/experienceService';
import { getEducation }       from '../services/educationService';
import { getCertifications }  from '../services/certificationService';

import HeroProfile           from '../components/HeroProfile.vue';
import SkillsSection         from '../components/SkillsSection.vue';
import ProjectsSection       from '../components/ProjectsSection.vue';
import ExperiencesSection    from '../components/ExperiencesSection.vue';
import EducationSection      from '../components/EducationSection.vue';
import CertificationsSection from '../components/CertificationsSection.vue';
import ContactSection        from '../components/ContactSection.vue';
import ProjectModal          from '../components/ProjectModal.vue';
import ErrorState            from '../components/ErrorState.vue';
import LoadingState          from '../components/LoadingState.vue';

const profile         = ref<Profile | null>(null);
const projects        = ref<Project[]>([]);
const experiences     = ref<Experience[]>([]);
const education       = ref<Education[]>([]);
const certifications  = ref<Certification[]>([]);
const selectedProject = ref<Project | null>(null);
const loading         = ref(true);
const error           = ref<string | null>(null);
const scrolled        = ref(false);
const mobileOpen      = ref(false);

const navLinks = [
  { href: '#projects',   label: 'Projects'   },
  { href: '#experience', label: 'Experience' },
  { href: '#skills',     label: 'Skills'     },
  { href: '#contact',    label: 'Contact'    },
];

const openProject = (p: Project) => { selectedProject.value = p; };
const onScroll    = () => { scrolled.value = window.scrollY > 40; };

onMounted(async () => {
  window.addEventListener('scroll', onScroll, { passive: true });
  try {
    const [p, proj, exp, edu, cert] = await Promise.all([
      getProfiles(), getProjects(), getExperiences(), getEducation(), getCertifications(),
    ]);
    profile.value        = p[0] ?? null;
    projects.value       = proj;
    experiences.value    = exp;
    education.value      = edu;
    certifications.value = cert;
  } catch (e: unknown) {
    error.value = e instanceof Error ? e.message : 'Failed to load';
  } finally {
    loading.value = false;
  }
});

onUnmounted(() => window.removeEventListener('scroll', onScroll));
</script>
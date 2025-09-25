<template>
  <div
    class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
    <!-- Background Effects -->
    <div class="absolute inset-0 opacity-20">
      <div
        class="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5"></div>
      <div
        class="absolute inset-0"
        style="
          background-image: radial-gradient(
            circle at 50% 50%,
            rgba(156, 146, 172, 0.1) 1px,
            transparent 1px
          );
          background-size: 60px 60px;
        "></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 py-12">
      <!-- Loading State -->
      <div v-if="loading" class="flex items-center justify-center min-h-screen">
        <div class="text-center">
          <div
            class="animate-spin rounded-full h-16 w-16 border-4 border-purple-500 border-t-transparent mx-auto mb-4"></div>
          <p class="text-white text-xl">Loading amazing content...</p>
        </div>
      </div>

      <!-- Error State -->
      <div
        v-else-if="error"
        class="flex items-center justify-center min-h-screen">
        <div
          class="bg-red-500/10 border border-red-500/20 rounded-xl p-8 text-center backdrop-blur-sm">
          <div class="text-red-400 text-6xl mb-4">⚠️</div>
          <p class="text-red-300 text-xl">{{ error }}</p>
        </div>
      </div>

      <div v-else class="space-y-16">
        <!-- Hero Profile Section -->
        <section v-if="profile" class="relative">
          <div
            class="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl hover:shadow-purple-500/20 transition-all duration-700 group">
            <div
              class="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div
              class="relative z-10 flex flex-col lg:flex-row items-center gap-8">
              <div class="flex-1 text-center lg:text-left">
                <div class="mb-6">
                  <h1
                    class="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-300 mb-4 animate-fade-in">
                    {{ profile.name }}
                  </h1>
                  <div class="space-y-2">
                    <p class="text-2xl text-purple-200 font-semibold">
                      {{ profile.title }}
                    </p>
                    <div
                      class="flex flex-wrap justify-center lg:justify-start gap-4 text-slate-300">
                      <span class="flex items-center gap-2">
                        <span
                          class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                        {{ profile.location }}
                      </span>
                      <span>{{ profile.email }}</span>
                      <span>{{ profile.phone }}</span>
                    </div>
                  </div>
                </div>
                <a
                  :href="profile.linktree"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full hover:from-purple-500 hover:to-pink-500 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/50">
                  <span>Explore My Links</span>
                  <svg
                    class="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                  </svg>
                </a>
              </div>
              <div class="lg:w-80 relative">
                <div
                  class="w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 p-1 mx-auto">
                  <div
                    class="w-full h-full rounded-full bg-slate-800 flex items-center justify-center text-6xl lg:text-8xl">
                    {{ profile.name.charAt(0) }}
                  </div>
                </div>
                <div
                  class="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-xl opacity-30 animate-pulse"></div>
              </div>
            </div>
          </div>
        </section>

        <!-- Projects Section -->
        <section v-if="projects.length" class="space-y-8">
          <div class="text-center">
            <h2
              class="text-4xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-300 mb-4">
              Featured Projects
            </h2>
            <div
              class="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>

          <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            <div
              v-for="(project, index) in projects"
              :key="project.id"
              class="group bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:bg-white/20 cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
              @click="openProject(project)"
              :style="animationDelay(index)">
              <div
                class="relative overflow-hidden rounded-xl mb-6 h-48 bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center">
                <div class="text-6xl opacity-50">🚀</div>
                <div
                  class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div class="space-y-3">
                <div class="flex items-center justify-between">
                  <h3
                    class="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    {{ project.title }}
                  </h3>
                  <span class="text-purple-300 text-sm font-medium">{{
                    project.year
                  }}</span>
                </div>
                <p class="text-slate-300 text-sm leading-relaxed">
                  {{ project.description }}
                </p>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tag in project.tags.split(', ')"
                    :key="tag"
                    class="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-500/30">
                    {{ tag }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Experience Section -->
        <section v-if="experiences.length" class="space-y-8">
          <div class="text-center">
            <h2
              class="text-4xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-300 mb-4">
              Experience
            </h2>
            <div
              class="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>

          <div class="space-y-6">
            <div
              v-for="(exp, index) in experiences"
              :key="exp.id"
              class="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 group"
              :style="animationDelay(index * 150)">
              <div
                class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <h3
                    class="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    {{ exp.role }}
                  </h3>
                  <p class="text-purple-300 text-lg font-semibold">
                    @ {{ exp.company }}
                  </p>
                </div>
                <span
                  class="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30 text-sm font-medium">
                  {{ exp.period }}
                </span>
              </div>
              <p class="text-slate-300 leading-relaxed">{{ exp.details }}</p>
            </div>
          </div>
        </section>

        <!-- Education & Certifications Grid -->
        <div class="grid lg:grid-cols-2 gap-16">
          <!-- Education -->
          <section v-if="education.length" class="space-y-8">
            <div class="text-center">
              <h2
                class="text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-300 mb-4">
                Education
              </h2>
              <div
                class="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
            </div>

            <div class="space-y-6">
              <div
                v-for="edu in education"
                :key="edu.id"
                class="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 group">
                <h3
                  class="text-xl font-bold text-white group-hover:text-purple-300 transition-colors mb-2">
                  {{ edu.degree }}
                </h3>
                <p class="text-purple-300 font-semibold mb-2">
                  {{ edu.institution }}
                </p>
                <div
                  class="flex justify-between items-center text-sm text-slate-300">
                  <span>{{ edu.period }}</span>
                  <span
                    class="px-3 py-1 bg-green-500/20 text-green-300 rounded-full border border-green-500/30">
                    GPA: {{ edu.gpa }}
                  </span>
                </div>
                <p v-if="edu.notes" class="text-slate-300 text-sm mt-3">
                  {{ edu.notes }}
                </p>
              </div>
            </div>
          </section>

          <!-- Certifications -->
          <section v-if="certifications.length" class="space-y-8">
            <div class="text-center">
              <h2
                class="text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-300 mb-4">
                Certifications
              </h2>
              <div
                class="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
            </div>

            <div class="space-y-4">
              <div
                v-for="cert in certifications"
                :key="cert.id"
                class="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 group">
                <div class="flex justify-between items-start gap-4">
                  <div class="flex-1">
                    <h3
                      class="text-lg font-bold text-white group-hover:text-purple-300 transition-colors mb-1">
                      {{ cert.name }}
                    </h3>
                    <p class="text-purple-300 font-semibold text-sm">
                      {{ cert.issuer }}
                    </p>
                    <span class="text-slate-400 text-sm">{{ cert.year }}</span>
                  </div>
                  <a
                    v-if="cert.link && cert.link !== '-'"
                    :href="cert.link"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium rounded-full hover:from-purple-500 hover:to-pink-500 transform hover:scale-105 transition-all duration-300">
                    View
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>

    <!-- Enhanced Project Modal -->
    <Teleport to="body">
      <div
        v-if="selectedProject"
        class="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4"
        @click.self="selectedProject = null">
        <div
          class="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl max-w-2xl w-full p-8 relative transform animate-modal-in">
          <button
            class="absolute top-6 right-6 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white hover:text-purple-300 transition-all duration-300"
            @click="selectedProject = null">
            ✕
          </button>

          <div class="mb-8">
            <div
              class="h-48 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl flex items-center justify-center mb-6">
              <div class="text-8xl opacity-50">🚀</div>
            </div>

            <h3 class="text-3xl font-bold text-white mb-3">
              {{ selectedProject.title }}
            </h3>
            <div class="flex items-center gap-4 mb-4">
              <span
                class="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30 text-sm font-medium">
                {{ selectedProject.year }}
              </span>
            </div>
            <p class="text-slate-300 leading-relaxed mb-6 text-lg">
              {{ selectedProject.description }}
            </p>

            <div class="flex flex-wrap gap-2 mb-8">
              <span
                v-for="tag in selectedProject.tags.split(', ')"
                :key="tag"
                class="px-4 py-2 bg-purple-500/20 text-purple-300 text-sm rounded-full border border-purple-500/30">
                {{ tag }}
              </span>
            </div>

            <a
              :href="selectedProject.link"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full hover:from-purple-500 hover:to-pink-500 transform hover:scale-105 transition-all duration-300">
              <span>View Project</span>
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import type {
  Profile,
  Project,
  Experience,
  Education,
  Certification,
} from "../types";
import { getProfiles } from "../services/profileService";
import { getProjects } from "../services/projectService";
import { getExperiences } from "../services/experienceService";
import { getEducation } from "../services/educationService";
import { getCertifications } from "../services/certificationService";

const profile = ref<Profile | null>(null);
const projects = ref<Project[]>([]);
const experiences = ref<Experience[]>([]);
const education = ref<Education[]>([]);
const certifications = ref<Certification[]>([]);

const selectedProject = ref<Project | null>(null);
const loading = ref(true);
const error = ref<string | null>(null);

const openProject = (p: Project) => (selectedProject.value = p);

const animationDelay = (delay: number) => ({
  animationDelay: `${delay}ms`,
});

onMounted(async () => {
  loading.value = true;
  try {
    const [
      profiles,
      projectList,
      experienceList,
      educationList,
      certificationList,
    ] = await Promise.all([
      getProfiles(),
      getProjects(),
      getExperiences(),
      getEducation(),
      getCertifications(),
    ]);

    profile.value = profiles[0] ?? null;
    projects.value = projectList;
    experiences.value = experienceList;
    education.value = educationList;
    certifications.value = certificationList;
  } catch (err: any) {
    console.error(err);
    error.value = err?.message ?? "Failed to load data";
  } finally {
    loading.value = false;
  }
});
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes modal-in {
  from {
    opacity: 0;
    transform: scale(0.9) translateY(-20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out;
}

.animate-modal-in {
  animation: modal-in 0.3s ease-out;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #8b5cf6, #ec4899);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, #7c3aed, #db2777);
}
</style>

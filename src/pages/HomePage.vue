<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
    <div class="my-12 mx-60">
        <LoadingState v-if="loading" />
        <ErrorState v-else-if="error" :message="error" />
        <div v-else class="space-y-16">
          <HeroProfile v-if="profile" :profile="profile" />
          <ProjectsSection :projects="projects" @open-project="openProject" />
          <ExperiencesSection :experiences="experiences" />
          <div class="grid lg:grid-cols-2 gap-16">
            <EducationSection :education="education" />
            <CertificationsSection :certifications="certifications" />
          </div>
        </div>
    </div>

    <ProjectModal :project="selectedProject" @close="selectedProject = null" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { Profile, Project, Experience, Education, Certification } from '../types';
import { getProfiles } from '../services/profileService';
import { getProjects } from '../services/projectService';
import { getExperiences } from '../services/experienceService';
import { getEducation } from '../services/educationService';
import { getCertifications } from '../services/certificationService';
import HeroProfile from '..\/components/HeroProfile.vue';
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

const openProject = (p: Project) => (selectedProject.value = p);

onMounted(async () => {
  loading.value = true;
  try {
    const [profiles, projectList, experienceList, educationList, certificationList] =
      await Promise.all([
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
    error.value = err?.message ?? 'Failed to load data';
  } finally {
    loading.value = false;
  }
});
</script>

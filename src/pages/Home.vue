<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error" class="text-red-600">{{ error }}</div>

    <section v-else>
      <!-- Profile -->
      <div v-if="profile" class="mb-6">
        <h1>{{ profile.name }}</h1>
        <p>{{ profile.title }}</p>
        <p>{{ profile.location }}</p>
        <p>{{ profile.email }}</p>
        <p>{{ profile.phone }}</p>
        <a :href="profile.linktree" target="_blank" rel="noopener noreferrer"
          >Linktree</a
        >
      </div>

      <!-- Projects -->
      <section v-if="projects.length">
        <h2>Projects</h2>
        <ul>
          <li v-for="p in projects" :key="p.id" class="mb-4">
            <h3>{{ p.title }} ({{ p.year }})</h3>
            <p>{{ p.description }}</p>
            <a :href="p.link" target="_blank" rel="noopener noreferrer"
              >Lihat Project</a
            >
            <p>Tags: {{ p.tags }}</p>
          </li>
        </ul>
      </section>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { getProfiles } from "../services/profileService";
import { getProjects } from "../services/projectService";
import type { Profile, Project } from "../types";

const profile = ref<Profile | null>(null);
const projects = ref<Project[]>([]);
const loading = ref(true);
const error = ref<string | null>(null);

onMounted(async () => {
  loading.value = true;
  try {
    const [profiles, projectList] = await Promise.all([
      getProfiles(),
      getProjects(),
    ]);
    profile.value = profiles[0] ?? null;
    projects.value = projectList;
  } catch (err: any) {
    console.error(err);
    error.value = err?.message ?? "Gagal mengambil data";
  } finally {
    loading.value = false;
  }
});
</script>

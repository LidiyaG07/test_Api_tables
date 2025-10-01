<script setup>
import { navLinks } from "~/constants/navLink";
</script>

<template>
  <div>
    <h2 class="mb-10 uppercase text-2xl">main</h2>
    <ul>
      <li v-for="(link, index) in navLinks.slice(1)" :key="index">
        <nuxt-link
          :to="link.to"
          class="flex items-center gap-1 hover:text-gray-400 hover:text-shadow transform duration-500 text-xl"
          >{{ link.label }}
          <Icon
            name="material-symbols:arrow-forward-rounded"
            size="20"
            class="w-5 h-5"
          />
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>
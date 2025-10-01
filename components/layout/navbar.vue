<script setup>
import { navLinks } from "~/constants/navLink.js";
</script>

<template>
  <div class="border-b border-primaryAccent mb-5">
    <div class="py-5 flex items-center justify-between mx-auto max-w-7xl">
      <div>
        <nuxt-link to="/">Logo.</nuxt-link>
      </div>
      <div>
        <ul class="flex items-center gap-10">
          <li v-for="(link, index) in navLinks" :key="index">
            <nuxt-link :to="link.to">{{ link.label }}</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup>
import { RouterLink } from "vue-router";
import router from "../router";

const navigateToSignIn = () => {
  router.push({ name: "signin" });
};
</script>
<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to="/" class="navbar-brand">Home</router-link>
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <router-link to="/demojwt" class="nav-link">DemoJWT</router-link>
      </li>
      <li class="nav-item active">
        <router-link to="/demovfor" class="nav-link">DemoVFor</router-link>
      </li>
      <li class="nav-item active">
        <router-link to="/signup" class="nav-link">Inscription</router-link>
      </li>
    </ul>
    <div class="nav-item my-2 my-lg-0">
      <button class="btn btn-primary" @click="navigateToSignIn">
        Se connecter
      </button>
    </div>
  </nav>
</template>
<style></style>

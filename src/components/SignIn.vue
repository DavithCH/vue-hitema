<script setup>
import { ref, watch } from "vue";
import axios from "axios";
import router from "../router";

const email = ref("");
const password = ref("");
const isChecked = ref(false);

const handleSignIn = async () => {
  console.log(email.value, password.value);
  try {
    const res = await axios.post("http://localhost:4000/user/login", {
      email: email.value,
      password: password.value,
    });
    console.log(res.data);
    if (isChecked.value) {
      localStorage.setItem("user", JSON.stringify(res.data));
    }
    // router.push({ name: "home" });
  } catch (err) {
    console.log(err.message);
  }
};
</script>
<template>
  <h1>Formulaire de connexion</h1>
  <form class="my-3" @submit.prevent="handleSignIn">
    <div class="form-group">
      <label for="exampleInputEmail1">l'adresse e-mail</label>
      <input
        type="email"
        class="form-control"
        placeholder="Saisir votre l'adresse e-mail..."
        v-model="email"
      />
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Mot de passe</label>
      <input
        type="password"
        class="form-control"
        id="exampleInputPassword1"
        placeholder="Saisir votre mot de passe ..."
        v-model="password"
      />
    </div>
    <div class="form-check">
      <input
        type="checkbox"
        class="form-check-input"
        id="exampleCheck1"
        v-model="isChecked"
      />
      <label class="form-check-label" for="exampleCheck1"
        >Souvnenir de moi</label
      >
    </div>
    <button type="submit" class="btn btn-primary">Se connecter</button>
  </form>
</template>

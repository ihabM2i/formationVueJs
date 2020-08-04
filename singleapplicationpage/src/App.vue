<template>
  <div>
    <h1>Bonjour</h1>
    <!-- <Personne nom="abadi" prenom="ihab" job-phone="0606060606" />
    <Personne nom="toto" prenom="tata" />
    <Personne nom="titi" prenom="minet" />-->
    <Personne
      v-for="p in personnes"
      :key="p"
      :nom="p.nom"
      :prenom="p.prenom"
      :job-phone="p.jobPhone"
    ></Personne>
  </div>
</template>

<script>
import Personne from "./components/Personne";
export default {
  name: "App",
  data: function () {
    return {
      personnes: [
        { nom: "toto", prenom: "tata", jobPhone: "060600606" },
        { nom: "titi", prenom: "minet", jobPhone: "060600606" },
      ],
    };
  },
  components: { Personne },
};
</script>

<style>
</style>

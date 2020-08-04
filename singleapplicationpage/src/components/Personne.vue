<template>
  <div>
    <h1>Personne {{nom}} {{prenom}} {{jobPhone}}</h1>
    <!-- <div>{{getInfo()}}</div> -->
    <div>{{info}}</div>
    <div>
      <input type="text" v-model="msg" />
      {{msg}}
    </div>
  </div>
</template>

<script>
export default {
  name: "Personne",
  //props : ['nom','prenom','jobPhone']
  //Typage des props
  // props : {
  //     nom:String,
  //     prenom:String,
  //     jobPhone:Number
  // }
  //Type et options
  props: {
    nom: {
      type: String,
      required: true,
    },
    prenom: String,
    jobPhone: String,
  },
  methods: {
    getInfo() {
      return "Bonjour " + this.nom + " " + this.prenom;
    },
  },
  computed: {
    info: function () {
      return "Bonjour " + this.nom + " " + this.prenom;
    },
  },
  data: function () {
    return {
      msg: "coucou",
    };
  },
};
</script>
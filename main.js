//Manipulation du DOM
// document.querySelector("#app").innerHTML = "<h1>Bonjour tout le monde</h1>"
// //Amélioration javascript ES6+
// //introduction Let et const
// //Destructeur en javascript
// const personne = {
//     nom : 'abadi',
//     prenom : 'ihab'
// }
// const {nom,prenom} = personne
// // alert(nom)
// // alert(prenom)

// //Opérateur spred et rest

// const tab = [0,1, 'toto', 'tata']
// const newTab = [...tab, 'new element']
// console.log(newTab)
// const et = {...personne, niveau:1}
// console.log(et)

// // function addition(...params) {
// //     console.log(this)
// //     console.log(params)
// // }

// const addition = (...params) => {
//     console.log(params)
// }

// addition(1,2,3,4)

//Création d'objet avant ES6+

// function personne(n,p) {
//     this.nom = n
//     this.prenom = p
//     this.afficher = () => {
//         console.log(this.nom + " "+this.prenom)
//     }
// }

// const p1 = new personne('toto', 'tatat')

// console.log(p1)

//Création d'objet après ES6+

class Personne {
    constructor(n,p) {
        this.nom = n
        this.prenom = p
    }
    afficher() {
        console.log(this.nom + " "+this.prenom)
    }
}

const p1 = new Personne('toto', 'tata')
p1.afficher()

//L'ajout du extends pour l'héritage en javascript
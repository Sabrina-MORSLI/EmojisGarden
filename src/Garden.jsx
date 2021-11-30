import React from 'react'
import './Styles/Garden.css'
import './Styles/style.css'


class Garden extends React.Component{
  // on let le constructor quand c une classe
  constructor(props) {
    super(props)
    this.state = {Garden: props.Garden}
  }
  
  // Pour suivre les mises à jours des states en synchrone
  //(et si nécessaire déclencher des actions)
  componentDidUpdate() {
    
    console.log("number of emojis:", this.getNumberOfEmojis());
    //console.log("count:", this.state.isLaunched);
  }
  // fonction qui renvoie juste le nombre de cases occupées
  getNumberOfEmojis = () => {    
    let numberOfEmojis = this.state.Garden.filter((element) => element.emoji !== "")
    return numberOfEmojis.length

  }

  updateGarden = () => {     
    
    this.growGarden();
    if(this.getNumberOfEmojis() <= 24){
      // on clone garden et on va modifier la valeur de newGarden pour l'index égal à count.
      let newGarden = [...this.state.Garden]; // ⚠️ syntaxe pour récupérer les références et non juste les valeurs
      newGarden.find((element) => element.emoji === "").emoji = "🌱"; // Permet de replanter la où on a une case vite, donc gère aussi les cases où on a delete la plante
      // 3. on met à jour le state
      this.setState({ Garden: newGarden });
    }
  };
  // NB: cette fonction était dans updateGarden() et a été séparée
  // fonction qui fait évoluer les plantes toutes les 2sec
  // attention: pour l'instant la fonction est rappellée à chaque fois qu'on clique sur addPlant...problème d'optimisation que l'on reglera
  growGarden = () => {
    let newGarden = [...this.state.Garden];
    newGarden.map((elem) => {
      if (elem.emoji === "🌱") return (elem.emoji = "🌿");
      else if (elem.emoji === "🌿") return (elem.emoji = "🌳");
      else return elem.emoji;
    });
    this.setState({ Garden: newGarden });

    // ici on appelle setTimeout en boucle dès que growGarden a été executé (c'est un trick pour la répéter toutes les 2sec)
    // NB: à optimiser...car trop rapide encore
    if (this.state.Garden.length > 0) {
      setTimeout(() => {
        this.growGarden();
      }, 2000);
    }
  };

   // fonction qui libère une case au clic    
  removeEmoji=(id) => {    
    // this.setState({ count: this.state.count - 1})
    let copyGarden = [...this.state.Garden]
    copyGarden[id].emoji = ''
    this.setState({ Garden: copyGarden })
  }
  render() {
    
  return (
    <>
    <div className="bigCountainer">
      <div className="gardenGrid">
      
      {this.state.Garden.map((elem) => {
          return <button key={elem.id} className="cell" onClick={() => this.removeEmoji(elem.id)}>{elem.emoji}</button>
        })
      }
      
      </div>    
    </div>
    <button className="btn btn-secondary button-marge" onClick={this.updateGarden}>Plant an emoji</button>
    </>

    
    
  )
}
}

export default Garden;
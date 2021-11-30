import React from 'react'
import Garden from './Garden';
import './Styles/style.css'



class App extends React.Component {
  constructor(props) {
            super(props);
            this.state = {
              //Farm est un tableau qui contiendra plusieurs garden
              farm: []           
            } 
            this.SIZE_GARDEN = 25;                 
          
          }

  
  // renvois un tableau de 25 éléments        
  generateGarden = (size) => {
    
    let copyGarden = []
    // on veut une boucle pour ajouter 25 valeurs dans ce tableau
    for(let i = 0; i<size; i++) {
      copyGarden.push({ id: i, emoji: ""})     
    
    };
    return copyGarden
  }
  //fonction qui ajoute un tableau garden dans le state farm
  addGarden = (size) => {
    //push des gardens dans farm
    // les 3 étapes pr modifier le state:
    let newFarm = [...this.state.farm]// 1. je copie le state
    newFarm.push(this.generateGarden(size)); // 2. j'utilise la copie
    this.setState({ farm: newFarm }); // 3. on met à jour le state
  }

  // fonction spécifique du cycle de vie du composant : indique ce qu'il se passe au 1er montage du composant (montage = render dans le DOM)
  componentDidMount() {
    this.addGarden(this.SIZE_GARDEN);
  }
  // Ce qu'il se passe au 1er montage de mon composant
  // componentDidMount(){
  //   const GardenSize = 25;
  //   this.setState({Garden: this.generateGarden(GardenSize)})

  // }
  // // Pour suivre les mises à jours des states en synchrone
  // //(et si nécessaire déclencher des actions)
  // componentDidUpdate() {
    
  //   console.log("number of emojis:", this.getNumberOfEmojis());
  //   //console.log("count:", this.state.isLaunched);
  // }

  // getNumberOfEmojis = () => {
  //   console.log("hello from getNumberOfEmojis")
  //   let numberOfEmojis = this.state.Garden.filter((element) => element.emoji !== "")
  //   return numberOfEmojis.length

  // }

  // updateGarden = () => {
  //   // TODO: on rajoute la condition pour évacuer les cas numberEmijis > 25
  //   // let numberOfEmojis = this.state.garden.filter( (element) => element.emoji !== "")
  //   if(this.getNumberOfEmojis() <= 24){
  //     this.growGarden();
  //     // on clone garden et on va modifier la valeur de newGarden pour l'index égal à count.
  //     let newGarden = [...this.state.Garden]; // ⚠️ syntaxe pour récupérer les références et non juste les valeurs
  //     newGarden.find((x) => x.emoji === "").emoji = "🌱"; // Permet de replanter la où on a une case vite, donc gère aussi les cases où on a delete la plante
  //     // 3. on met à jour le state
  //     this.setState({ garden: newGarden });
  //   }
  // };
  // // NB: cette fonction était dans updateGarden() et a été séparée
  // growGarden = () => {
  //   let newGarden = [...this.state.Garden];
  //   newGarden.map((elem) => {
  //     if (elem.emoji === "🌱") return (elem.emoji = "🌿");
  //     else if (elem.emoji === "🌿") return (elem.emoji = "🌳");
  //     else return elem.emoji;
  //   });
  //   this.setState({ Garden: newGarden });

  //   // ici on appelle setTimeout en boucle dès que growGarden a été executé (c'est un trick pour la répéter toutes les 2sec)
  //   // NB: à optimiser...car trop rapide encore
  //   if (this.state.Garden.length > 0) {
  //     setTimeout(() => {
  //       this.growGarden();
  //     }, 2000);
  //   }
  // };

      
  //   //   // 3. on met à jour le state
  //   //   this.setState({ Garden: newGarden })
  //   // }
  //   // setTimeout(() => {
  //   //   let newGarden = [...this.state.Garden];
  //   //   newGarden.map((elem) => {
  //   //     if(elem.emoji === "🌱") {return elem.emoji = "🌿"}
        
  //   //     else return elem.emoji
        
  //   //   })
      
  //   //   this.setState({ Garden: newGarden })
  //   //   }, 2000)
  //   //   setTimeout(() => {
  //   //     let newGarden = [...this.state.Garden];
  //   //     newGarden.map((elem) => {
  //   //       if(elem.emoji === "🌿") {return elem.emoji = "🌳"}
  //   //       else return elem.emoji          
  //   //     })
        
  //   //     this.setState({ Garden: newGarden })
  //   //     }, 4000)
        
          
  //       // newGarden.map((elem) => {setTimeout(() => {
  //       //   if(elem.emoji === "🌱") {elem.emoji = "🌿"}
  //       //   else return elem.emoji          
  //       // })
        
  //       // this.setState({ Garden: newGarden })
  //       // }, 2000)

  //       // newGarden.map((elem) => {setTimeout(() => {
  //       //   if(elem.emoji === "🌿") {elem.emoji = "🌳"}
  //       //   else return elem.emoji          
  //       // })
        
  //       // this.setState({ Garden: newGarden })
  //       // }, 4000)
  // // }    
 
  // removeEmoji=(id) => {    
  //   // this.setState({ count: this.state.count - 1})
  //   let copyGarden = [...this.state.Garden]
  //   copyGarden[id].emoji = ''
  //   this.setState({ Garden: copyGarden })
  // }

  componentDidUpdate() {
    console.log("farm:", this.state.farm);
  }
  
  render(){ 
    return (
      <>
        <h1 className="title"> 🌿 My Emoji Garden 🌿 </h1>
        {this.state.farm.map((elem) => {
          // on fait une boucle sur le state farm qui contient nos gardens
          return <Garden Garden={elem} />;
        })}    
        
        <button className="btn btn-secondary button-add-garden" onClick={() => this.addGarden(this.SIZE_GARDEN)}>Add Garden</button>
      </>
      ) 
      
  }
}

export default App;
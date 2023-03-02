import Imagem from "./imagem.js";
import Texto from "./texto.js";
import Abilidade from "./abilidade.js";
import Tipo from "./tipo.js";
import Altura from "./altura.js";


function Informacao(props){

    return (
        
      <div className="row">

        

        <div className=" col-3 mt-3 ms-3">

        <div class="card bg-info">
        <Imagem imagem={props.imagem} />
  <div class="card-body">
    <Texto nome={props.nome}/>
   
    <Abilidade abilidade={props.abilidade}/>

    <Tipo tipo={props.tipo}/>

    <Altura altura={props.altura}/>


    
  </div>

  
</div>



        
        
        </div>

        
        
        

      

      </div>
      
      
     
    )

}

export default Informacao;
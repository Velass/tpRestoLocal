
import { useContext } from "react";
import "./Livraison.css";  // Assurez-vous d'ajuster le chemin d'accès correct
import { FormContext } from "../../utils/FormContext";

const Livraison = () => {
    const { information } = useContext(FormContext)

console.log(information)

  if (!information) {
    return <p>Les données de livraison ne sont pas disponibles.</p>;
  }


  return (
    <div className="livraison">
      <h2>Page de Livraison</h2>
      <p>Nom: {information.nom}</p>
      <p>Prénom: {information.prenom}</p>
      <p>Adresse: {information.adresse}</p>
    </div>
  );
};

export default Livraison;

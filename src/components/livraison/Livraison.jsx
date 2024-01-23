/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import "./Livraison.css"; // Assurez-vous d'ajuster le chemin d'accès correct
import { FormContext } from "../../utils/FormContext";

const Livraison = () => {
  const { information } = useContext(FormContext);

  if (!information) {
    return <p>Les données de livraison ne sont pas disponibles.</p>;
  }

  return (
    <div className="livraison">
      <div className="info-supp">
        <h2>Information Livraison</h2>
        <p>Nom: {information.nom}</p>
        <p>Prénom: {information.prenom}</p>
        <p>Adresse: {information.adresse}</p>
      </div>
      <div className="remerciement">
        <h2>Cher(e) {information.prenom},</h2>

        <p>
          Nous tenons à exprimer notre sincère gratitude pour votre récente
          commande chez Riccardo's Pizzeria. C'est un grand honneur de vous
          avoir parmi nos précieux clients, et nous tenons à vous remercier
          chaleureusement pour la confiance que vous nous avez accordée.
        </p>

        <p>
          Votre choix de faire affaire avec nous est très apprécié, et nous
          sommes ravis de vous offrir les meilleurs produits et services
          possibles. Notre équipe s'efforce constamment de vous offrir une
          expérience exceptionnelle, et votre satisfaction est notre priorité
          absolue.
        </p>

        <p>
          Votre commande a été soigneusement traitée, et nous travaillons
          diligemment pour assurer une livraison rapide et sécurisée. Si vous
          avez des questions ou des préoccupations concernant votre commande,
          n'hésitez pas à nous contacter. Nous sommes là pour vous fournir un
          service personnalisé et répondre à toutes vos attentes.
        </p>

        <p>
          Encore une fois, merci d'avoir choisi Riccardo's Pizzeria. Nous sommes
          impatients de vous servir à nouveau à l'avenir. Votre soutien est
          essentiel pour nous, et nous sommes reconnaissants de faire partie de
          votre expérience.
        </p>

        <p>Merci beaucoup et à bientôt !</p>
      </div>
    </div>
  );
};

export default Livraison;

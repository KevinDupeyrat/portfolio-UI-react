import backend from "../../assets/images/icons/svg/back-end.svg";
import frontend from "../../assets/images/icons/svg/front-end.svg";
import modelisation from "../../assets/images/icons/svg/modelisation.svg";
import suivitprojet from "../../assets/images/icons/svg/suivit-projet.svg";

export const ServiceModel = [
  {
    image: backend,
    title: "Développeur Back-end",
    content:
      "Construction d'une application robuste, scalable et sécuritaire, en répondant au cahiers des charges des besoins client. Utilisation des derniers outils et framework dans le domaine.",
    techno: ["Java", "Spring Framwork", "NoSql", "SQL"],
  },
  {
    image: frontend,
    title: "Développeur Web Front-end",
    content:
      "Développement d'une UI & partir de maquettes, communication avec le Back-End pour utilisation des services. Application ergonomique et interactive.",
    techno: [
      "Angular",
      "Typescript",
      "React",
      "Redux",
      "Bootstrap",
      "Material UI",
    ],
  },
  {
    image: modelisation,
    title: "Modélisation / Architechture / CI - CD",
    content:
      "Construction d'une architecture répondant aux derniers standards, application maintenable et scalable, possibilité de micro-service. Décorrélation entre les différents composent de l'applicatif. Construction d'une chaine d'intégration continue pour optimisation des livraisons en test et / ou en production.",
    techno: [
      "Spring Cloud",
      "API REST-FULL",
      "Jenkins",
      "GitHub Actions",
      "Docker",
    ],
  },
  {
    image: suivitprojet,
    title: "Suivit de projet",
    content:
      "Un suivi de projet en Agile SCRUM, avec contacte permanent avec le client, livraison et démonstration régulières. Possibilité de modification en cours de projet et affinage des besoins. Conseilles d'implémentation et d'interconnexion des besoins métier.",
    techno: [],
  },
];

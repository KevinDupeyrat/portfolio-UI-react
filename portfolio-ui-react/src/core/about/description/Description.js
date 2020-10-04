import React from "react";
import { Avatar, makeStyles } from "@material-ui/core";
import avatar from "../../../assets/images/avatar.jpeg";
import './Description.css'

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
}));

const Description = () => {
  const classes = useStyles();

  return (
    <>
      <div className="div-avatar">
        <Avatar className={classes.avatar} alt="Dupeyrat Kevin" src={avatar} />
      </div>
      Je suis Développeur d'application depuis 2018, je participe a
      la conception et a la réalisation d'outil web pour les professionnels et
      grands comptes où je travaille sur toutes les étapes du projet, de la
      finalisation des besoins du client à la mise en production du produit
      fini. Je peux intégrer une équipe (ou travailler seul) sur des projets
      from scratch ou des projets en cours de développement.
      <br />
      J'ai l'habitude et les compétences pour travailler en Agile SCRUM
      comprenant ces cérémonie, sa philosophie et ses outils.
      <br />
      Intégration possible du produit dans des écosystème déjà existant avec des
      types de communication différent tel que REST, SAOP ou Mainframe.
      <br />
      <br />
      <div className="title">Pour ce site</div>
      J'ai utilisé pour la construction de ce site les outils utilisés et appris
      durant mes missions, avec notamment l'écosystème Java et le Framework
      Spring pour la partie Back-end, et l'écosystème React et Redux pour
      la partie Front-end. Intégration continue à partir d'un repository GitHub
      et son outil de CI/CD GitHub ACTIONS jusqu'à déploiement sur les serveurs.
    </>
  );
};

export default Description;
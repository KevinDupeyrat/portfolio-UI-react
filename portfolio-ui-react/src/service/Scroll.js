import {
  ABOUT_ACTIVE,
  ACCUEIL_ACTIVE,
  PROJECT_ACTIVE,
  SERVICE_ACTIVE,
} from "../shared/const/Menu";

export const scrollYDescription = [
  {
    start: 0,
    end: 300,
    direction: ACCUEIL_ACTIVE,
  },
  {
    start: 300,
    end: 1000,
    direction: ABOUT_ACTIVE,
  },
  {
    start: 1000,
    end: 1500,
    direction: SERVICE_ACTIVE,
  },
  {
    start: 1500,
    end: 10000,
    direction: PROJECT_ACTIVE,
  },
];

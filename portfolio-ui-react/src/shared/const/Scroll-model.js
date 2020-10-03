import {
  ABOUT_ACTIVE,
  ACCUEIL_ACTIVE,
  PROJECT_ACTIVE,
  SERVICE_ACTIVE,
} from "./Menu-model";

export const scrollYDescription = [
  {
    start: 0,
    end: 400,
    direction: ACCUEIL_ACTIVE,
  },
  {
    start: 400,
    end: 1500,
    direction: ABOUT_ACTIVE,
  },
  {
    start: 1500,
    end: 2400,
    direction: SERVICE_ACTIVE,
  },
  {
    start: 2400,
    end: 10000,
    direction: PROJECT_ACTIVE,
  },
];

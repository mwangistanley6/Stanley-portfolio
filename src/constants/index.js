import {
  mobile,
  backend,
  web,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Android Developer",
    icon: backend,
  },
];

const experiences = [];

const projects = [
  {
    name: "Merry Go Round",
    description:
      "A modern mobile app to manage group savings and loans for the Camp Nou savings group, built with Jetpack Compose and Firebase. Features secure authentication, real-time tracking, payment reminders, and financial reporting, all with an intuitive Material Design interface.",
    tags: [
      {
        name: "android",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "jetpack-compose",
        color: "pink-text-gradient",
      },
    ],
  },
];

export { services, experiences, projects };

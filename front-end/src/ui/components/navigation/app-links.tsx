import { AppLinks } from "@/types/app-links";
import { RiLinkedinFill, RiSlackFill, RiYoutubeFill } from "react-icons/ri";

const footerApplicationLinks :AppLinks[] = [
    {
        label:"Acceuil",
        baseUrl: "/",
        type:"internal",
    },
    {
        label: "Projets",
        baseUrl: "/#",
        type: "internal",
    },
    {
        label: "Coders Monkeys",
        baseUrl: "https://moodle.3il.fr/course/view.php?id=3246",
        type: "external",
    },
    {
        label: "Formations",
        baseUrl: "/#",
        type: "internal",
    },
];

const footerUsersLinks: AppLinks[] = [
    {
        label: "Mon espace",
        baseUrl: "/#",
        type: "internal",
    },
    {
        label: "Connexion",
        baseUrl: "/connexion",
        type: "internal",
    },
    {
        label: "Inscription",
        baseUrl: "/connexion/inscription",
        type: "internal",
    },
    {
        label: "Mot de passe oublie",
        baseUrl: "/connexion/mots-de-passe-perdu",
        type: "internal",
    }
];

const footerInformationLinks: AppLinks[] = [
    {
        label: "CGU",
        baseUrl: "/#",
        type: "internal",
    },
    {
        label: "Confiadentialite",
        baseUrl: "/#",
        type: "internal",
    },
    {
        label: "A propos",
        baseUrl: "/#",
        type: "internal",
    },
    {
        label: "Contact",
        baseUrl: "/#",
        type: "internal",
    }
];

export const  footerSocialLinks: AppLinks[] = [
    {
        label: "Youtube",
        baseUrl: "https://youtube.com",
        type: "external",
        icon:RiYoutubeFill,
    },
    {
        label: "Linkedin",
        baseUrl: "https://www.linkedin.com/in/alexia-djiki-322b3034a/",
        type: "external",
        icon:RiLinkedinFill,
    },
    {
        label: "Slack",
        baseUrl: "https://coders-monkeys.slack.com",
        type: "external",
        icon:RiSlackFill,
    }
];

export const footerLinks = [
    {
        label: "App",
        links: footerApplicationLinks,
    },
    {
        label: "Utilisaeteurs",
        links: footerUsersLinks,
    },
    {
        label: "Informations",
        links: footerInformationLinks,
    },
    {
        label: "Reseaux",
        links: footerSocialLinks,
    },
    
]
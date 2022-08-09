import { createAboutUs } from "./aboutUs";
import { createMenu } from "./menu";
import { createContacts } from "./contacts";

createAboutUs();

const aboutUs = document.querySelector('.about')
aboutUs.addEventListener('click', createAboutUs)

const menu = document.querySelector('.menu')
menu.addEventListener('click', createMenu)

const contacts = document.querySelector('.contacts')
contacts.addEventListener('click', createContacts)
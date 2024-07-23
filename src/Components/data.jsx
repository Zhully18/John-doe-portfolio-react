import { FaCentos } from "react-icons/fa";
import { PiWebhooksLogo } from "react-icons/pi";
import { SiMinutemailer, SiWebmoney, SiWebpack } from "react-icons/si";
import crm from '../assets/crm.jpg'
import finance from "../assets/finance.jpg"
import kitchen from "../assets/kitchen.jpg"
import landing from "../assets/landing.jpg"
import medical from "../assets/medical.jpg"
import staff from "../assets/staff.jpg"

export const services = [
    {
        icon: <FaCentos />,
        head : 'UI/UX Design',
        desc : 'A short description of the service your company provides and how it helps your clients business increase revenue using the technology and strategy your company provides',
    },
    {
        icon: <PiWebhooksLogo />,
        head : 'Web Development',
        desc : 'A short description of the service your company provides and how it helps your clients business increase revenue using the technology and strategy your company provides',
    },
    {
        icon: <SiWebmoney />,
        head : 'Mobile App Design',
        desc : 'A short description of the service your company provides and how it helps your clients business increase revenue using the technology and strategy your company provides',
    },
    {
        icon: <SiWebpack />,
        head : 'Content Creation',
        desc : 'A short description of the service your company provides and how it helps your clients business increase revenue using the technology and strategy your company provides',
    },
    {
        icon: <SiMinutemailer />,
        head : 'Email Marketing',
        desc : 'A short description of the service your company provides and how it helps your clients business increase revenue using the technology and strategy your company provides',
    },
];

export const projects = [
    {
      image : medical,
      title : 'Martins Hospital Managemeny',
      text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
    },
    {
      image : crm,
      title : 'Oland CRM Software',
      text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
    },
    {
      image : staff,
      title : 'Roland Staff Management',
      text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
    },
    {
      image : landing,
      title : 'Eduka Landing Page website',
      text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
    },
    {
      image : kitchen,
      title : 'Glory & Jane Kitchen',
      text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
    },
    {
      image : finance,
      title : 'Charity Bank App',
      text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
    },
  ];

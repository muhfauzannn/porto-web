import condangan from '/condangan.png'
import nodejsLogo from '/nodejs.svg'
import tailwindLogo from '/tailwind.svg'
import figmaLogo from '/figma.svg'
import postgressLogo from '/postgress.svg'
import nextjsLogo from '/nextjsLogo.png'
import shurkou from '/shurkou.png'
import csui24 from '/csui.png'


const dataProject = [
    {
      title: "HIMA IF Condangan - Website",
      picture: condangan,
      desc: "Condangan is a website designed as a platform where clients and student freelancers can connect. I contributed as a full-stack developer for this site.",
      buildWith : [
        nodejsLogo,tailwindLogo
      ]
    },
    {
      title: "Shurkou Store - Website",
      picture: shurkou,
      desc: "I contributed as a UI/UX designer and full-stack developer. The site includes subscription services, login and signup features, and payment gateway integration (in progress).",
      buildWith : [
        figmaLogo,nodejsLogo,tailwindLogo,postgressLogo
      ]
    },
    {
      title: "CSUI 2024 - Website",
      picture: csui24,
      desc: "CSUI24 is a company profile website for class of 2024 majoring in Computer Science at University of Indonesia. I contributed as a Front End Developers during development of this site.",
      buildWith : [
        tailwindLogo,nextjsLogo
      ]
    }
  ];

  export default dataProject;
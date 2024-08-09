import condangan from '../../public/condangan.png'
import nodejsLogo from '../../public/nodejs.svg'
import tailwindLogo from '../../public/tailwind.svg'
import figmaLogo from '../../public/figma.svg'
import postgressLogo from '../../public/postgress.svg'
import shurkou from '../../public/shurkou.png'


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
      title: "Shurkou Store - Website (PROGRESS)",
      picture: shurkou,
      desc: "I contributed as a UI/UX designer and full-stack developer. The site includes subscription services, login and signup features, and payment gateway integration (in progress).",
      buildWith : [
        figmaLogo,nodejsLogo,tailwindLogo,postgressLogo
      ]
    }
  ];

  export default dataProject;
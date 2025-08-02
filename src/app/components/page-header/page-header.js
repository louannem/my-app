import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import "./page-header.css";
import CtaUi from '../cta-ui/cta-ui';

export default function PageHeader(props) {
  const router = useRouter();

  const navigationLinks = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/about",
      label: "About",
    },
    {
      href: "/contact",
      label: "Contact"    
    }
   
  ];

  const cta = {
    label: "Contact",
    type: "primary",
    variant: 1,  
  };

  const Logo = () => {
    if (props.srcLogo) return (
      <img src={props.srcLogo} alt="Logo" height={40} width={70} />
    )
    else return (
      <div>
        <span>{props.signature}</span>
      </div>
    )
  };


  const linkClass = (link) => ([
    "page-header-link",
    props.currentPage === link.href ? "-is-active" : "",
  ])

  const linkStyle = (link) => {
    const classes = ["page-header-link"];
    
    if (link.href === props.path) classes.push("-is-active");
    return (classes.join(' '));
  }   

  
  return (
    <header className='page-header'>        
    {/* Logo */}
    <Logo />

    {/* Liens de navigation */}
    <nav>
    {
      navigationLinks.map((link, index) =>
        <Link 
          className={linkStyle(link)}
          key={`link-${index}`} 
          href={link.href}
        >
            {link.label}
        </Link>
      )
    }
    </nav>
    {/* Bouton d'action */ }
    <div>
      <CtaUi {...cta} />
    </div>
    </header>
  );
}
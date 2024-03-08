import React from 'react';
import AstroIcon from './assets/Astro.tsx';
import HtmlIcon from './assets/Html.tsx';
import TypeScriptIcon from './assets/TypeScript.tsx';
import JavaScriptIcon from './assets/JavaScript.tsx';
import JSONIcon from './assets/JSON.tsx';
import type { SVGProps } from "react";

type TechLogoProps = {
  logo: string;
};

const logos: { [index: string]: React.FC<SVGProps<SVGSVGElement>> } = {
  HTML: HtmlIcon,
  Astro: AstroIcon,
  TypeScript: TypeScriptIcon,
  JavaScript: JavaScriptIcon,
  JSON: JSONIcon,
};

function TechLogo({ logo }: TechLogoProps) {
  const defaultProps = {
    width: 48,
    height: 48,
  };

  const Logo = logos[logo] || (() => <div>Invalido</div>);

  return <Logo {...defaultProps} />;
}

export { TechLogo };

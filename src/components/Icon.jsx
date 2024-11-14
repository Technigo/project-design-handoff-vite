import React from 'react';
import JulklapparIcon from '../assets/JulklapparIcon.svg';
import VinterkladerIcon from '../assets/VinterkladerIcon.svg';
import JulmatskasseIcon from '../assets/JulmatskasseIcon.svg';
import ValfrittBeloppIcon from '../assets/ValfrittBeloppIcon.svg';

const icons = {
  JulklapparIcon,
  VinterkladerIcon,
  JulmatskasseIcon,
  ValfrittBeloppIcon,
};

const Icon = ({ name, width = 40, height = 40 }) => {
  const SvgIcon = icons[name];
  
  if (!SvgIcon) {
    console.error(`Icon '${name}' not found in assets folder.`);
    return null;
  }

  return <img src={SvgIcon} width={width} height={height} alt={`${name} icon`} />;
};

export default Icon;

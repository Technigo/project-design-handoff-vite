import React from 'react';

const icons = {
  JulklapparIcon: ('../assets/JulklapparIcon.svg').default,
  VinterkladerIcon: ('../assets/VinterkladerIcon.svg').default,
  JulmatskasseIcon: ('../assets/JulmatskasseIcon.svg').default,
  ValfrittBeloppIcon: ('../assets/ValfrittBeloppIcon.svg').default,
};

const Icon = ({ name, width = 40, height = 40 }) => {
  const SvgIcon = icons[name];
  
  if (!SvgIcon) {
    console.error(`Icon '${name}' not found in assets folder.`);
    return null;
  }

  return <SvgIcon width={width} height={height} />;
};

export default Icon;

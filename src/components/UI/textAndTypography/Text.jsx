import styles from './Typography.module.css';


export const Text = ({ header, type, style, className }) => {
  const textClassName = `${styles[type] || ''} ${className || ''}`;

  return (
    <div className={textClassName} style={style}>
      {header}
    </div>
  );
};





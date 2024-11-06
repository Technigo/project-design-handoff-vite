/* eslint-disable react/prop-types */
import "./Typography.css"

export const Typography = ({ typography, level = 2, className }) => {
  const Tag = `h${level}` // Dynamically chooses h2, h3, etc. based on `level`
  return <Tag className={`typography typography${level} ${className}`}>{typography}</Tag>
};
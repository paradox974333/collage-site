// Material Symbols Outlined icon helper.
// `fill` toggles the filled variant; `className` lets callers size/color it.
export default function Icon({ name, fill = false, className = '', style = {} }) {
  return (
    <span
      className={`material-symbols-outlined ${className}`}
      style={fill ? { fontVariationSettings: "'FILL' 1", ...style } : style}
    >
      {name}
    </span>
  )
}

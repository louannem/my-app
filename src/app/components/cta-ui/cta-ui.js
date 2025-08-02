// Composant fonctionnel pour créer un bouton call-to-action
export default function CtaUi(props) {
  const cssClass = [
    "cta-ui",
    `-cta-type-${props.type}`,
    `-cta-variant-${props.variant}`
  ];

  return (
    <button
    className={cssClass.join(' ')}
    >{props.label}</button>
  )
}
export function MenuItem({title, description, price}) {
  return (
    <div className="menu-item">
      <h2>{title}</h2>
      <p>{description}</p>
      <b>{price.toLocaleString()}</b>
    </div>
  )
}
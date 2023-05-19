import { MenuItem } from "./MenuItem";

export function Menu({items}) {
  return (
    <div className="menu">
      {items.map(item => <MenuItem key={item.title} title={item.title} price={item.price} description={item.description}/>)}
    </div>
  )
}
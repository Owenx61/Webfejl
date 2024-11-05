import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectITem: (item: string) => void;
}
function ListGroup(props: Props) {
  //hook
  const [selectedIndex, setSelectedIndex] = useState(-1); //arr[0] a változó maga arr[1] updatelő függvény amikor meghivod az update függvényt akkor a változót frissiti

  //Eventhandlerer
  //const handleClick = (event: MouseEvent) => console.log(event)

  return (
    <>
      <h1>{props.heading} </h1>
      {props.items.length === 0 ? <p>No item found</p> : null}
      {props.items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {props.items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              props.onSelectITem(item)
            }}
          >
            {item}
          </li> /*mivel ez nem html code se nem react igy muszáj {} használni hogy értelmezze a kódot  warning jöhet fel ezért kell a key*/
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

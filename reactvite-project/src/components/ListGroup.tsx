import { useState } from "react"; //when state of component changes react updates dom to match new component state

// shape of input to this component {items: [], heading: string}
interface Props {
  items: string[]; // type annotation
  heading: string;
}

                    //destructured "props" to {items, heading}
function ListGroup( {items, heading}: Props) {
    // Hook function, allows us to tap into built-in features in react (state hook)
    const [selectedIndex, setSelectedIndex] = useState(-1);
    
    return ( // Braces in heading because its dynamic
        <>
          <h1>{heading}</h1> 
    
          {items.length == 0 && <p>No item found</p>}
    
          <ul className="list-group">
            {items.map((item, index) =>
              <li className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'} key={item} onClick={() => setSelectedIndex(index)}> {item} </li>)}
          </ul>
        </>
      );
}

export default ListGroup;
import { useState } from "react";

export interface Dieukhien {
  children?: React.ReactNode
  title: string
}

 function Panel({children,title} : Dieukhien) {
  const [isActive, setIsAcTive] = useState(false);
  return (
    <section>
      
      <h3>{title}</h3>
      { isActive ? <p>{children}</p>
       : (
         <button onClick={() => setIsAcTive(true)}  className="Show">Show</button>
       )}
    </section>
    );
}


function Accordination() {
  return (
    <div>
      <h2>Almaty, Kazakhstan</h2>
      <Panel title="About">
        With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
      </Panel>
      <Panel title="Etymology">
        The name comes from алма, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild Malus sieversii is considered a likely candidate for the ancestor of the modern domestic apple.
      </Panel>
    </div>
  );
}

export default Accordination;
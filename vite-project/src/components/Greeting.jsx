import { useEffect, useState } from 'react';

function Greeting({ name }) {

  const [displayName, setDisplayName] = useState(name);

  useEffect(() => {

    setTimeout(() => {
      setDisplayName('Alfonsina');
    }, 3000);
    
  }, []);

  return <p>Hola {displayName}</p>;
}

export default Greeting;

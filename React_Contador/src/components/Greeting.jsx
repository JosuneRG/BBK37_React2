import React, { useEffect, useState } from 'react';

const Greeting = ({name}) => {
    const [currentName, setCurrentName] = useState(name);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentName('Alfonsina');
        }, 3000);

        return () => clearTimeout(timer); // limpieza por si el componente se desmonta antes
    },[]);

    return  <p>Hola {currentName}</p>;
};

export default Greeting

export default function Home({ dishes }) {
  return (

    <main>
      <h2>Menú</h2>
      <ul>
        {dishes.map(({ id, name, description, price }) => (

          <li key={id} style={{ marginBottom: '1rem' }}>
            <h3>{name}</h3>
            <p>{description}</p>
            <p><b>Precio:</b> ${price}</p>
          </li>
          
        ))}
      </ul>
    </main>
  );
}

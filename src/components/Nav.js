export function Nav() {
  let array = ["Home", "About", "Contact"];

  let people = [
    {
      id: 1,
      name: "T-Shirt",
      description: "Normal Clothing"
    },
    {
      id: 2,
      name: "Sneaker",
      description: "Footwear"
    }
  ];
  people = people.filter((person) => person.id === 2);
  const person = people.map((person) => (
    <li key={person.id}>
      <h1>{person.name}</h1>
      <p>{person.description}</p>
    </li>
  ));

  array = array.filter((a) => a.length > 5);

  const listItems = array.map((a) => (
    <li key="1" className="inline mr-3">
      <a href="/">{a}</a>
    </li>
  ));

  return (
    <nav>
      <ul>{listItems}</ul>
      <ul>{person}</ul>
    </nav>
  );
}

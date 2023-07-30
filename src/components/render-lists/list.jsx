import { ListItem } from "./list-item";

export function List() {
  const people = [
    "Creola Katherine Johnson: mathematician",
    "Mario José Molina-Pasquel Henríquez: chemist",
    "Mohammad Abdus Salam: physicist",
    "Percy Lavon Julian: chemist",
    "Subrahmanyan Chandrasekhar: astrophysicist",
  ];

  return (
    <ul>
      {people.map((p) => {
        return <ListItem person={p} />;
      })}
    </ul>
  );
}

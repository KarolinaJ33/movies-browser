import { Name, Person, Role } from "./styled";
import { PersonImage } from "../PersonImages";


export const PersonTile = ({ name, role, poster, personId }) => (
    <>
      <Person>
        <PersonImage poster={poster} personId={personId} />
        <Name>{name}</Name>
        <Role>{role}</Role>
      </Person>
    </>
  );
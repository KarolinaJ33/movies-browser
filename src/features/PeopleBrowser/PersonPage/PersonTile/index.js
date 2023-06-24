import { IMG_URL } from "../../../../core/App/apiCodes";
import {
    BasicInfo,
    PersonData,
    PersonTileWrapper,
    PersonName,
    PersonPhoto,
    Birth,
    BirthDetails,
    Biography
} from "./styled";

export const PersonTile = ({ poster, name, birthday, birthplace, biography }) => {
    const formatDate = (dateString) => {
        const dateParts = dateString.split("-");
        const year = dateParts[0];
        const month = dateParts[1];
        const day = dateParts[2];
        return `${day}.${month}.${year}`;
      };

    return (
        <PersonTileWrapper>
            {poster && <PersonPhoto src={`${IMG_URL}${poster}`} />}
            <PersonData>
                <PersonName>{name}</PersonName>
                {birthday && (
                <BasicInfo>
                    <Birth>Date of birth: </Birth>
                    <BirthDetails>{formatDate(birthday)}</BirthDetails>
                </BasicInfo>
                )}
                {birthplace && (
                <BasicInfo>
                    <Birth>Place of birth: </Birth>
                    <BirthDetails>{birthplace}</BirthDetails>
                </BasicInfo>
                )}
            </PersonData>
            {biography && <Biography>{biography}</Biography>}
        </PersonTileWrapper>
    );
};
import { Image } from "../MovieTile/styled";
import {
    BackdropWrapper,
    BackdropContainer,
    Pleksa,
    InfoContainer,
    LongTitle,
    Rating,
    StarIcon,
    RateBig,
    RateSmall,
    Votes,
} from "./styled";
import poster from "../../MoviePage/MovieTile/images/poster.png";

const Backdrop = () => {
    return (
        <>
            <BackdropWrapper>
                <BackdropContainer>
                    <Pleksa />
                    <Image src={poster} alt="" />
                    <InfoContainer>
                        <LongTitle>Mulan long title</LongTitle>
                        <Rating>
                            <StarIcon />
                            <RateBig>7,8</RateBig>
                            <RateSmall>/ 10</RateSmall>
                            <Votes>335 votes</Votes>
                        </Rating>
                    </InfoContainer>
                </BackdropContainer>
            </BackdropWrapper>
        </>
    );
};

export default Backdrop;

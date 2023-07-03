import { imgBackdrop } from "../../../../core/App/apiCodes";
import {
    BackdropContainer,
    Pleksa,
    BackdropImage,
    BackdropWrapper,
    InfoContainer,
    StarIcon,
    Rating,
    RateBig,
    RateSmall,
    Votes,
    LongTitle,
} from "./styled";

const Backdrop = ({ title, backdrop_path, rate, votes }) => {
    return (
        <>
            <BackdropWrapper >
                <BackdropContainer>
                    <Pleksa />
                    <BackdropImage src={`${imgBackdrop}${backdrop_path}`}
                        alt={`poster of ${title}`} />
                    <InfoContainer>
                        <LongTitle>{title}</LongTitle>
                        <Rating>
                            <StarIcon />
                            <RateBig>{rate.toFixed(1)}</RateBig>
                            <RateSmall>/ 10</RateSmall>
                            <Votes>{votes} votes</Votes>
                        </Rating>
                    </InfoContainer>
                </BackdropContainer>
            </BackdropWrapper>
        </>
    );
};

export default Backdrop;
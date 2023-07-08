import { imgBackdrop } from "../../../../../core/App/apiCodes";
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

const Backdrop = ({ backdrop_path, original_title, vote_average, vote_count }) => {
    return (
        <>
            <BackdropWrapper >
                <BackdropContainer>
                    <Pleksa />
                    <BackdropImage src={`${imgBackdrop}${backdrop_path}`}
                        alt={`poster of ${original_title}`} />
                    <InfoContainer>
                        <LongTitle>{original_title}</LongTitle>
                        <Rating>
                            <StarIcon />
                            <RateBig>{vote_average.toFixed(1)}</RateBig>
                            <RateSmall>/ 10</RateSmall>
                            <Votes>{vote_count} votes</Votes>
                        </Rating>
                    </InfoContainer>
                </BackdropContainer>
            </BackdropWrapper>
        </>
    );
};

export default Backdrop;
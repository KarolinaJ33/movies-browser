
import {
    Button,
    ButtonText,
    Container,
    LeftArrow,
    PageCounter,
    PageNumber,
    RightArrow
} from "./styled";

const Pagination = ({ onNextPage, onPrevPage, currentPage, totalPages, onFirstPage, onLastPage }) => {

    return (
        <Container>
            <Button onClick={onFirstPage} disabled={currentPage === 1}>
                <LeftArrow />
                <LeftArrow />
                <ButtonText>First</ButtonText>
            </Button>
            <Button onClick={onPrevPage} disabled={currentPage === 1}>
                <LeftArrow />
                <ButtonText>Previous</ButtonText>
            </Button>
            <PageCounter>
                Page <PageNumber>{currentPage}</PageNumber> of <PageNumber>{totalPages}</PageNumber>
            </PageCounter>
            <Button onClick={onNextPage} disabled={currentPage === totalPages}>
                <ButtonText >Next</ButtonText>
                <RightArrow />
            </Button>
            <Button onClick={onLastPage} disabled={currentPage === totalPages}>
                <ButtonText>Last</ButtonText>
                <RightArrow />
                <RightArrow />
            </Button>
        </Container>
    )
};

export default Pagination;
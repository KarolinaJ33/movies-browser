
import { Button, ButtonText, Container, LeftArrow, PageCounter, PageNumber, RightArrow } from "./styled";

const Pagination = ({ onNextPage, onPrevPage, currentPage, totalPages, onFirstPage, onLastPage }) => {
    const handlePrevPage = () => {
        onPrevPage();
    };

    const handleNextPage = () => {
        onNextPage();
    };

    const handleFirstPage = () => {
        onFirstPage();
    };

    const handleLastPage = () => {
        onLastPage();
    };
    return (
        <Container>
            <Button onClick={handleFirstPage} disabled={currentPage === 1}>
                <LeftArrow />
                <LeftArrow />
                <ButtonText>First</ButtonText>
            </Button>
            <Button onClick={handlePrevPage} disabled={currentPage === 1}>
                <LeftArrow />
                <ButtonText>Previous</ButtonText>
            </Button>
            <PageCounter>
                Page <PageNumber>{currentPage}</PageNumber> of <PageNumber>{totalPages}</PageNumber>
            </PageCounter>
            <Button onClick={handleNextPage} disabled={currentPage === totalPages}>
                <ButtonText >Next</ButtonText>
                <RightArrow />
            </Button>
            <Button onClick={handleLastPage} disabled={currentPage === totalPages}>
                <ButtonText>Last</ButtonText>
                <RightArrow />
                <RightArrow />
            </Button>
        </Container>
    )
};

export default Pagination;
import { Button, ButtonText, Container, LeftArrow, PageCounter, PageNumber, RightArrow } from "./styled";

const Pagination = () => {
    return (
        <Container>
            <Button>
                <LeftArrow />
                <LeftArrow />
                <ButtonText>First</ButtonText>
            </Button>
            <Button>
                <LeftArrow />
                <ButtonText>Previous</ButtonText>
            </Button>
            <PageCounter>
                Page <PageNumber>1</PageNumber> of <PageNumber>500</PageNumber>
            </PageCounter>
            <Button>
                <ButtonText>Next</ButtonText>
                <RightArrow />
            </Button>
            <Button>
                <ButtonText>Last</ButtonText>
                <RightArrow />
                <RightArrow />
            </Button>
        </Container>
    )
};

export default Pagination;
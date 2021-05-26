import styled from "styled-components"
import ImgSlider from "./ImgSlider"
import NewDisney from "./NewDisney"
import Originals from "./Originals"
import Recommendations from "./Recommendations"
import TopFour from "./Trending"
import Viewers from "./Viewers"


const Home = (props) =>
{
    return(
        <Container>
            <ImgSlider/>
            <Viewers />
            <Recommendations />
            <NewDisney />
            <Originals />
            <TopFour />
        </Container>
    )
}

const Container = styled.main`


    position: relative;
   
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);

    &:before
    {
        background: url("/images/home-background.png") center center / cover no-repeat fixed;
        content: "";
        position: absolute;
        inset: 0px;
        opacity: 1;
        z-index: -1;
    }

`


export default Home;
import styled from "styled-components"
import ImgSlider from "./ImgSlider"
import NewDisney from "./NewDisney"
import Originals from "./Originals"
import Recommendations from "./Recommendations"
import TopFour from "./Trending"
import Viewers from "./Viewers"
import {useEffect} from "react"
import {useSelector, useDispatch} from "react-redux"
import {setMovies} from "../features/Movie/movieSlice"
import {selectUserName} from "../features/user/userSlice"
import db from "../Firebase/firebase"

const Home = (props) =>
{

    const userName = useSelector(selectUserName)
    const dispatch = useDispatch()
    let recommendations = []
    let newDisney = []
    let originals = []
    let trending = []

    useEffect(() =>
    {
        db.collection('movies').onSnapshot((snapshot) =>
        {
            snapshot.docs.map((doc) =>
            {
                
                switch(doc.data().type)
                {
                    case 'recommend':
                        // break;
                        recommendations = [...recommendations, {id : doc.id, ...doc.data()}]
                        console.log(recommendations)
                        break;
                    case 'new':
                        newDisney = [...newDisney, {id : doc.id, ...doc.data()}]
                        break
                    case 'trending':
                        trending = [...trending, {id : doc.id, ...doc.data()}]
                        break;
                    case 'original':
                        originals = [...originals, {id : doc.id, ...doc.data()}]
                        break;
                    default:
                        alert("No data found ... oops!")
                        break;
                }
            })

            dispatch(
                setMovies(
                    {
                        recommend: recommendations,
                        newDisney: newDisney,
                        original: originals,
                        trending: trending
                    }
                )
            )
        })

        
    }, [userName])

    


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
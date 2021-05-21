import React, {useEffect} from "react"
import styled from "styled-components"
import { auth, provider } from "../Firebase/firebase"
import {useDispatch, useSelector} from "react-redux"
import {useHistory} from "react-router-dom"
import {selectUserName, selectUserPhoto,setUserLoginDetails, setSignOutState} from "../features/user/userSlice"

const Header = (props) =>
{
    const dispatch = useDispatch()
    const history = useHistory()
    const username = useSelector(selectUserName)
    const userPhoto = useSelector(selectUserPhoto)
    const handleAuth = () =>
    {
        if(!username)
        {
            auth.signInWithPopup(provider).then((result) =>
            {
                setUser(result.user);
            }).catch((err) =>
            {
                console.log(err.message)
            })
        }
        else if(username) 
        {
            auth.signOut().then((result)=>
            {
                console.log("user signed out")
                dispatch(setSignOutState())
                history.push("/")

            }).catch((err)=>
            {
                console.log(err.message)
            })
        }
    }

    useEffect(()=>
    {
        auth.onAuthStateChanged(async (user)=>
        {
            if(user)
            {
                setUser(user)
                history.push("/home")
            }
        })
    }, [username]) //dependancy on which this useEffect works, which means that this useEffect will run only when the USERNAME variale has been updated.
    
   
    const setUser = (user) =>
    {
        
        dispatch(
            setUserLoginDetails(
            {
                name: user.displayName,
                photo: user.photoURL, 
                email : user.email
            }
        ))
    }
    
    
    return (
        <Nav>
            <Logo>
                <img src ="images/logo.svg" alt="Disney+"/>
            </Logo>

            {

                !username ? 
                    <Login onClick={handleAuth}>LOGIN</Login>
                :
                <>
                    <NavMenu>
                        <a href = "/home">
                            <img src="images/home-icon.svg" alt="HOME"/>
                            <span>
                                HOME
                            </span>
                        </a>
                        <a href = "/home">
                            <img src="images/search-icon.svg" alt="HOME"/>
                            <span>
                                SEARCH
                            </span>
                        </a>
                        <a href = "/home">
                            <img src="images/watchlist-icon.svg" alt="HOME"/>
                            <span>
                                WATCHLIST
                            </span>
                        </a>
                        <a href = "/home">
                            <img src="images/original-icon.svg" alt="HOME"/>
                            <span>
                                ORIGINALS
                            </span>
                        </a>
                        <a href = "/home">
                            <img src="images/movie-icon.svg" alt="HOME"/>
                            <span>
                                MOVIES
                            </span>
                        </a>
                        <a href = "/home">
                            <img src="images/series-icon.svg" alt="HOME"/>
                            <span>
                                SERIES
                            </span>
                        </a>                
                    </NavMenu>
                    <SignOut>
                        <UserImg src = {userPhoto} alt="user-display-picture"/>
                        <Dropdown onClick={handleAuth}>
                            <span>
                                Sign Out
                            </span>
                        </Dropdown>
                    </SignOut>
                </>
            }
        
        </Nav>
    )
}


const Nav = styled.nav`

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    background-color: #090b13;
    display : flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 36px;
    letter-spacing: 16px;
    z-index: 3;

`
const Logo = styled.a`

    padding: 0;
    width: 80px;
    margin-top: 4px;
    max-height: 70px;
    display: inline-block;
    img
    {
        display: block;
        width: 100%;
    }
`

const NavMenu = styled.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
    margin: 0px;
    padding: 0px;
    position: relative;
    margin-right: auto;
    margin-left: 25px;

    

    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        img {
          height: 20px;
          min-width: 20px;
          width: 20px;
          z-index: auto;
        }
        span {
          color: rgb(249, 249, 249);
          font-size: 15px;
          letter-spacing: 1.42px;
          line-height: 1.08;
          padding: 0px 0px 0px 1px;
          white-space: nowrap;
          position: relative;
          &:before {
            background-color: rgb(249, 249, 249);
            border-radius: 0px 0px 4px 4px;
            bottom: -6px;
            content: "";
            height: 2px;
            left: 0px;
            opacity: 0;
            position: absolute;
            right: 0px;
            transform-origin: left center;
            transform: scaleX(0);
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            visibility: hidden;
            width: auto;
          }
        }
        &:hover {
          span:before {
            transform: scaleX(1);
            visibility: visible;
            opacity: 1 !important;
          }
        }


        @media (max-width: 768px)
        {
            display: none;
        }
    }

    
`

const Login = styled.a`

    background-color: rgba(0, 0, 0, 0.6);
    padding: 8px 16px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    border: 1px solid #f9f9f9;
    border-radius: 4px;

    &:hover
    {
        background-color: #f9f9f9;
        color: #000;
        cursor: pointer;
        
    }


`

const UserImg  =styled.img`

    height: 70%;
    border-radius: 50%;
    cursor: pointer;

`

const Dropdown = styled.div`

    position: absolute;
    top: 100%;
    right: -10%;
    background: rgb(19,19,19);
    border: 1px solid rgba(151, 151, 0.34);
    border-radius: 4px;
    padding: 10px;
    box-shadow: rgb(0 0 0/50%) 0px 0px 18px 0px;
    font-size: 14px;
    letter-spacing: 3px;
    width: 130px;
    opacity: 0;


`

const SignOut = styled.div`

    position: relative;
    height: 70px;
    width: 70px;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;

    &:hover
    {
        ${Dropdown}
        {
            opacity: 1;
            transition-duration: 1s;
        }
    }
`




export default Header; 



// transform-origin: left center;
                // transform: scaleX(0);
                // transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                // visibility: hidden;
                // width: auto;



                // &:hover
        // {
        //     span:before
        //     {
                
        //         transform: scaleX(1);
        //         visibility: visible;
        //         opactiy: 1 !important;
        //     }
        // }

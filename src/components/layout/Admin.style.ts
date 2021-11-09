import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
`

export const Header = styled.div`
    width: 100%;    
    /* background-color: green; */
    min-height: 64px;
`

export const Sidebar = styled.div`
    flex-basis: 200px;
    border-right: 1px solid rgba(231,231,231,0.9);;
    background-color: rgba(231,231,231,0.2);
    /* background-color: red; */
`

export const Main = styled.div`
    flex: 1 1 auto;
    /* background-color: yellow; */
    height: 100%;
    min-height: 100vh;
`

export const Title = styled.h3`
    font-size: 1.1rem;
    flex-grow: 1;

`

export const WrapperSidebar = styled.div`
    width: 100%;
    max-width: 200px;
    

`
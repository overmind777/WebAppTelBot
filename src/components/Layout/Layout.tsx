import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import styled from 'styled-components'

const Layout = () => {
    return (
        <Wrapper>
            <Header />
            <div>
                <Outlet />
            </div>
        </Wrapper>
    )
}

export default Layout

const Wrapper = styled.div`
    height: 100%;
    text-align: center;
    padding: 5px;

    background-image: url('/swarm_background.jpg');
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
`

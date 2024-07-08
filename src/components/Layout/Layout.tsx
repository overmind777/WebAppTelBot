import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import styled from 'styled-components'

const Layout = () => {
    return (
        <Wrapper>
            <Header />
            <OutletWrapper>
                <Outlet />
            </OutletWrapper>
        </Wrapper>
    )
}

export default Layout

const Wrapper = styled.div`
    width: 100%;
    height: 100%;

    text-align: center;
    padding: 5px;
`

const OutletWrapper = styled.div`
  width: 100%;
  height: 100%;
`

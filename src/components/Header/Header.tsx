import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

function Header() {
    const navigate = useNavigate()

    const handleClickHomeButton = () => {
        navigate('/')
    }

    const handleClickTasksButton = () => {
        navigate('/tasks')
    }

    const handleClickWalletButton = () => {
        navigate('/wallet')
    }

    return (
        <HeaderStyled>
            <button onClick={handleClickHomeButton}>Home</button>
            <RightWrapper>
                <button onClick={handleClickTasksButton}>Tasks</button>
                <button onClick={handleClickWalletButton}>Wallet</button>
            </RightWrapper>
        </HeaderStyled>
    )
}

export default Header

const HeaderStyled = styled.header`
    display: flex;
    justify-content: space-between;
`

const RightWrapper = styled.div`
    display: flex;
    gap: 10px;
`

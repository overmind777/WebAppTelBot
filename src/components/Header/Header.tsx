import styled from 'styled-components'
import icon from '../../icons/swarmV1.svg'

function Header() {
    return (
        <HeaderStyled>
            <svg width={40} height={40}>
                <use xlinkHref={`${icon}#icon-swarm`}></use>
            </svg>
            <button>Wallet</button>
        </HeaderStyled>
    )
}

export default Header

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
`
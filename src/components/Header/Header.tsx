import styled from 'styled-components'
import icon from '/icons/sprite.svg'

function Header() {
    return (
      <HeaderStyled>
        <SvgWrapper>
            <SvgStyled width={40} height={40}>
                {/* <use xlinkHref={`/public/vite.svg`}></use> */}
                <use xlinkHref={`${icon}#icon-swarmV2`}></use>
            </SvgStyled>

        </SvgWrapper>
            <button>Wallet</button>
        </HeaderStyled>
    )
}

export default Header

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
`

const SvgStyled = styled.svg`
  fill: white;
`

const SvgWrapper = styled.div`
   
`
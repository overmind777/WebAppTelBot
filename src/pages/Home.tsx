import TokensComponent from '../components/TokensComponent/TokensComponent'
import Task from '../components/Taks/Task'
import styled from 'styled-components'

const Home = () => {
    return (
        <Wrapper>
            <TokensComponent />
            <Task />
        </Wrapper>
    )
}

export default Home

const Wrapper = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    gap: 20px;

    padding-top: 10px;
    padding-bottom: 10px;
`

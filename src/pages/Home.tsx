import TokensComponent from '../components/TokensComponent/TokensComponent'
import Task from '../components/Taks/Task'
import Tasks from '../components/Tasks/Tasks'
import styled from 'styled-components'

const Home = () => {
    return (
        <Wrapper>
            <TokensComponent />
            <Task />
            <Tasks />
        </Wrapper>
    )
}

export default Home

const Wrapper = styled.div`
    width: 100%;
    height: 100%;

    padding-top: 10px;
    padding-bottom: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    & :nth-child(){
      height: calc((100% - 20px)/3);
    }
`

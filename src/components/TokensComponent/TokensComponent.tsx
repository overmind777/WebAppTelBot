import { useState } from 'react'
import styled from 'styled-components'

const TokensComponent = () => {
    const [swarm, setSwarm] = useState(0)
    const [shiba, setShiba] = useState(0)

    return (
        <Wrapper>
            <h3>Swarm token: {swarm}</h3>
            <h3>Shiba token: {shiba}</h3>
        </Wrapper>
    )
}

export default TokensComponent

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
`

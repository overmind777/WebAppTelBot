import { useState } from 'react'
import styled from 'styled-components'

const Task = () => {
  const [task, setTask] = useState('')
  
    return (
        <Wrapper>
            <h3>Your task: {task}</h3>
        </Wrapper>
    )
}

export default Task

const Wrapper = styled.div`

`
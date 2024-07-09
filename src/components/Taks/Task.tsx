import { useState } from 'react'
import styled from 'styled-components'

const Task = () => {
  const [tasks] = useState([
    {
      id: 1,
      text: 'task 1'
    },
    {
      id: 2,
      text: 'task 2'
    },
    {
      id: 3,
      text: 'task 3'
    }
  ])
  
    return (
        <Wrapper>
            <h3>Your task:</h3>
            <ul>
                {tasks.map((task) => (
                  <li key={task.id}>{task.text}</li>
                ))}
            </ul>
        </Wrapper>
    )
}

export default Task

const Wrapper = styled.div`

`
import React from 'react'
import Header from './components/Header'
import tw from 'tailwind-styled-components'

const TaskManagement = () => {
    return (
    <>
        <Header/>
        <Wrapper>
            Task Management page
        </Wrapper>
    </>
    )
}

export default TaskManagement

const Wrapper = tw.div`
bg-gray-100 h-screen
`
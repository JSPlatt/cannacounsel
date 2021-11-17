import React from 'react'
import Header from './components/Header'
import tw from 'tailwind-styled-components'

const Notes = () => {
    return (
    <>
        <Header/>
        <Wrapper>
            Notes Notes Notes
        </Wrapper>
    </>
    )
}

export default Notes

const Wrapper = tw.div`
bg-gray-100 h-screen
`
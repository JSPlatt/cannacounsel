import React from 'react'
import Header from './components/Header'
import tw from 'tailwind-styled-components'

const DocumentCenter = () => {
    return (
    <>
    <Header/>
        <Wrapper>
            Document Center Page
        </Wrapper>
    </>
    )
}

export default DocumentCenter

const Wrapper = tw.div`
bg-gray-100 h-screen
`

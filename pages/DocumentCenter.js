import React from 'react'
import Header from './components/Header'
import tw from 'tailwind-styled-components'

const DocumentCenter = () => {

    return (
    <>
    <Header/>
        <Wrapper>
            Document Center Page
            <ol>
                <li><h3>TODO-1</h3></li>
                <li><h3>TODO-2</h3></li>
                <li><h3>TODO-3</h3></li>
                <li><h3>TODO-4</h3></li>
                <li><h3>TODO-5</h3></li>
            </ol>
        </Wrapper>
    </>
    )
}

export default DocumentCenter

const Wrapper = tw.div`
bg-gray-100 h-screen
`

import React from 'react'
import Header from './components/Header'
import tw from 'tailwind-styled-components'

const DocumentCenter = () => {

    return (
    <>
    {/* <Header/> */}
        <Wrapper>
            Document Center Page
            
            <Todo>
                <ol class="list-decimal">
                    <li>TODO-1</li>
                    <li>TODO-2</li>
                    <li>TODO-3</li>
                    <li>TODO-4</li>
                    <li>TODO-5</li>
                </ol>
            </Todo>
            
        </Wrapper>
    </>
    )
}

export default DocumentCenter

const Wrapper = tw.div`
bg-gray-100 h-screen flex flex-col items-center text-2xl
`

const Todo = tw.div`
flex flex-col justify-between items-center text-green-700 text-xl py-4 px-4 
`

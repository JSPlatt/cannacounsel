import React from 'react'
import tw from 'tailwind-styled-components'

const Header = () => {
    return (
        <Wrapper>
            <Logo src='https://images.squarespace-cdn.com/content/v1/60aebfd53942b43aa5e17c42/1623294976419-9U1XSYK93JLP0HXIMHRX/CCNY%2Blong%2BLogo.jpg?format=1500w' alt='logo'/>
            <ActionItems>
                <ActionButton>
                    DASHBOARD
                </ActionButton>
                <ActionButton>
                    TASK MANAGEMENT
                </ActionButton>
                <ActionButton>
                    DOCUMENT CENTER
                </ActionButton>
                <ActionButton>
                    VENDOR TRACKER
                </ActionButton>
                <ActionButton>
                    NOTES
                </ActionButton>
            </ActionItems>
            
        </Wrapper>
    )
}

export default Header

const ActionItems = tw.div`
flex text-4xl text-blue-500
`

const Wrapper = tw.div`
flex flex-col h-screen 
`
const Logo = tw.img`
h-40 w-80 
`

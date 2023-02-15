import { styled, Button, Text } from '@nextui-org/react'
import React from 'react'
import { IconButton } from './IconButton'
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx'

type Props = {
    curPage: number
    totalPages: number
    toNextPage: () => void
    toPrevPage: () => void
}

const PDFViewerControls = ({ curPage, totalPages, toNextPage, toPrevPage }: Props) => {
    return (
        <Controls>
            <NavButton onClick={toPrevPage}
                css={{
                    cursor: curPage == 1 ? 'default' : 'pointer',
                }}
            >
                <RxCaretLeft size={16} style={{
                    color: curPage == 1 ? 'grey' : 'initial',

                }} />
            </NavButton>
            <Text>{curPage} / {totalPages}</Text>
            <NavButton onClick={toNextPage}
                css={{
                    cursor: curPage == totalPages ? 'default' : 'pointer',
                }}
            >
                <RxCaretRight size={16} style={{
                    color: curPage == totalPages ? 'grey' : 'initial',

                }} />
            </NavButton>
        </Controls>
    )
}

const Controls = styled('div', {
    display: 'flex',
    width: 'fit-content',
    gap: 16,
    background: 'white',

    alignItems: 'center',
    opacity: 1,
    transition: '0.3s ease',
    '&:hover': {
        opacity: 1,
        transition: '0.3s ease',
        ds: '$lg'
    }
})

const NavButton = styled('div', {
    d: 'flex',
    cursor: 'pointer',
    alignItems: 'center',
    padding: 12,
    justifyContent: 'center',
    '&:hover': {
        background: '$accents1'
    }
})

export default PDFViewerControls
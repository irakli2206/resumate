import { Col, styled, Text } from '@nextui-org/react'
import React from 'react'

type Props = {
    number: string
    title: string
    body: string
}

const ProcessStep = ({ number, title, body }: Props) => {
    return (
        <Col css={{ alignItems: 'center', display: 'flex', flexDirection: 'column', gap: 10 }}>
            <NumberCircle  >
                <Text size='$2xl'> {number}</Text>
            </NumberCircle>
            <Text weight='semibold' size='$2xl'
                css={{
                    textAlign: 'center'
                }}
            >{title}</Text>
            <Text size='$xl' css={{ color: '$accents6' }}>{body}</Text>
        </Col>
    )
}

const NumberCircle = styled('div', {
    borderRadius: '50%',
    boxShadow: '0px 0px 15px 10px #ADF5CC',
    background: '$primary',
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
})

export default ProcessStep
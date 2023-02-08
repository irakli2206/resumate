import { Card, Text, Row, Col } from '@nextui-org/react'
import React from 'react'
import WrappedIcon from './WrappedIcon'

type Props = {
    title: string
    body: string
    icon: JSX.Element
    iconBackground: string
}

const FeatureCard = ({ title, body, icon, iconBackground }: Props) => {
    return (
        <Card css={{ mw: "500px", background: 'transparent' }}>
            <Card.Body>
                <Row>
                    <WrappedIcon icon={icon} iconBackground={iconBackground} />
                    <Col>
                        <Text size='$2xl' weight='medium' >{title}</Text>
                        <Text size='$xl' weight='normal' css={{color: '$accents7'}} >{body}</Text>
                    </Col>

                </Row>

            </Card.Body>
        </Card>
    )
}

export default FeatureCard
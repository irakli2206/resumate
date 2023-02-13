import { Button, Input, Modal, Text } from '@nextui-org/react'
import React, { useState } from 'react'
import { CustomKeyword } from '../pages/Demo'
import PriorityDropdown from './PriorityDropdown'

type Props = {
    visible: boolean
    closeHandler: () => void
    actionHandler: (newKeyword: CustomKeyword) => void
}


const KeywordModal = ({ visible, closeHandler, actionHandler }: Props) => {
    const [keyword, setKeyword] = useState<string>('')
    const [priority, setPriority] = useState<Set<string>>(new Set(["Priority"]))

    const syntheticCloseHandler = () => {
        setKeyword('')
        setPriority(new Set(["Priority"]))
        closeHandler()
    }

    const syntheticActionHandler = () => {
        console.log(Number.isInteger(+[...priority][0]))
        if (keyword && Number.isInteger(+[...priority][0])) {
            setPriority(new Set(["Priority"]))
            console.log('test')
            actionHandler({
                keyword,
                priority: +[...priority][0],
                selected: true
            })
            setKeyword('')
        }

        
    }

    return (
        <Modal
            closeButton
            aria-labelledby="modal-title"
            open={visible}
            onClose={syntheticCloseHandler}
            blur
        >
            <Modal.Header>
                <Text id="modal-title" size={18}>
                    New Keyword
                </Text>
            </Modal.Header>
            <Modal.Body>
                <Input
                    aria-label='keyword'
                    clearable
                    bordered
                    fullWidth
                    value={keyword}
                    onChange={(e) => setKeyword(e.currentTarget.value)}
                    size="lg"
                    placeholder="Keyword"

                />
                <PriorityDropdown
                    priority={priority}
                    onPriorityChange={setPriority}
                />

            </Modal.Body>
            <Modal.Footer>
                <Button auto flat color="error" onPress={syntheticCloseHandler}>
                    Close
                </Button>
                <Button auto onPress={syntheticActionHandler}>
                    Add
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default KeywordModal
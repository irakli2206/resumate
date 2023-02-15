import { Button, Input, Modal, Text } from '@nextui-org/react'
import React, { useState } from 'react'
import { CustomKeyword, Priority } from '../types/general'
import PriorityDropdown from './PriorityDropdown'

type Props = {
    visible: boolean
    closeHandler: () => void
    actionHandler: (newKeyword: CustomKeyword) => void
}


const KeywordModal = ({ visible, closeHandler, actionHandler }: Props) => {
    const [keyword, setKeyword] = useState<string>('')
    const [priority, setPriority] = useState<Set<Priority>>(new Set(["Low"]))

    const syntheticCloseHandler = () => {
        setKeyword('')
        setPriority(new Set(["Low"]))
        closeHandler()
    }

    const syntheticActionHandler = () => {
        if (keyword && [...priority][0]) {
            setPriority(new Set(["Low"]))
            actionHandler({
                keyword,
                priority: [...priority][0],
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
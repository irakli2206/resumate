import { Dropdown } from '@nextui-org/react'
import React, { useMemo } from 'react'

type Props = {
    priority: any
    onPriorityChange: any
}

const PriorityDropdown = ({ priority, onPriorityChange }: Props) => {
    const selectedValue = useMemo(
        () => Array.from(priority).join(", ").replaceAll("_", " "),
        [priority]
    )

    console.log(priority)
    return (
        <Dropdown>
            <Dropdown.Button flat>{selectedValue}</Dropdown.Button>
            {/*@ts-ignore */}
            <Dropdown.Menu selectedKeys={priority}
                onSelectionChange={onPriorityChange}
                aria-label="Static Actions"
                selectionMode='single'
                disallowEmptySelection

            >
                <Dropdown.Item key="1">1</Dropdown.Item>
                <Dropdown.Item key="2">2</Dropdown.Item>
                <Dropdown.Item key="3">3</Dropdown.Item>

            </Dropdown.Menu>
        </Dropdown>
    )
}

export default PriorityDropdown
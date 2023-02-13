import { Dropdown } from '@nextui-org/react'
import React, { useMemo } from 'react'

type Props = {
    priority: Set<string>
    onPriorityChange: (val: Set<string>) => any
}

const PriorityDropdown = ({ priority, onPriorityChange }: Props) => {
    const selectedValue = useMemo(
        () => Array.from(priority).join(", ").replaceAll("_", " "),
        [priority]
    )

    return (
        <Dropdown>
            <Dropdown.Button flat>{selectedValue}</Dropdown.Button>
            {/*@ts-ignore */}
            <Dropdown.Menu selectedKeys={priority}
                onSelectionChange={(e) => onPriorityChange(e as Set<string>)}
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
import { Dropdown } from '@nextui-org/react'
import React, { useMemo } from 'react'
import { Priority } from '../types/general'

type Props = {
    priority: Set<Priority>
    onPriorityChange: (val: Set<Priority>) => any
}

const PriorityDropdown = ({ priority, onPriorityChange }: Props) => {
    const selectedValue = useMemo(
        () => Array.from(priority).join(", ").replaceAll("_", " "),
        [priority]
    )

    return (
        <Dropdown>
            <Dropdown.Button flat css={{ tt: "capitalize" }}>{selectedValue}</Dropdown.Button>
            {/*@ts-ignore */}
            <Dropdown.Menu selectedKeys={priority}
                onSelectionChange={(e) => onPriorityChange(e as Set<Priority>)}
                aria-label="Static Actions"
                selectionMode='single'
                disallowEmptySelection

            >
                <Dropdown.Item key="low">Low</Dropdown.Item>
                <Dropdown.Item key="medium">Medium</Dropdown.Item>
                <Dropdown.Item key="high">High</Dropdown.Item>

            </Dropdown.Menu>
        </Dropdown>
    )
}

export default PriorityDropdown
import { Container, Grid, Collapse, Checkbox, Input, Col, Button, Row, Text, Table } from '@nextui-org/react'
import { ref, listAll, list, getDownloadURL } from 'firebase/storage'
import React, { useEffect, useState, useMemo } from 'react'
import { storage } from '../firebase'
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import DragDropFiles from '../components/DragDropFiles';
import PriorityDropdown from '../components/PriorityDropdown';
import { MdOutlineAddCircle } from 'react-icons/md'
import KeywordModal from '../components/KeywordModal';


type DocURI = {
    uri: string
}

export type CustomKeyword = {
    keyword: string
    priority: number
    selected: boolean
}

export type DefaultCriteria = {
    name: string
    selected: boolean
}

const defaultCriteria = ['Has Education Information', 'Has Skills Selection', 'Has Socials Links']

const Demo = () => {
    const [docURIs, setDocURIs] = useState<DocURI[]>([

    ])
    const listRef = ref(storage, 'dummy-pdfs')

    const [defaultKeywords, setDefaultKeywords] = useState<string[]>([])
    const [customKeywords, setCustomKeywords] = useState<CustomKeyword[]>([])
    const [unprioritizedKeywords, setUnprioritizedKeywords] = useState<string>('')
    const [tableData, setTableData] = useState()
    const [showKeywordModal, setShowKeywordModal] = useState<boolean>(false)

    const unprioritizedCommaSeparated = useMemo(() => {
        return unprioritizedKeywords.split(',')
    }, [unprioritizedKeywords])

    //needed for checkbox group


    //needed for checkbox group
    const activeCustomKeywords = useMemo(() => {
        const selectedKeywords: string[] = []
        customKeywords.forEach(ck => {
            if (ck.selected) selectedKeywords.push(ck.keyword)
        })
        return selectedKeywords
    }, [customKeywords])



    useEffect(() => {
        listAll(listRef)
            .then(async (res) => {
                let result = await Promise.all(res.items.map(async (item) => {
                    return getDownloadURL(item).then((uri) => {
                        // console.log({ uri })
                        return { uri }
                    })
                }))
                setDocURIs(result)

            }).catch((error) => {
                console.log(error)
            });
    }, [])


    const showKeywordModalHandle = () => {
        setShowKeywordModal(true)
    }

    const handleKeywordModalClose = () => {
        setShowKeywordModal(false)
    }

    const handleAddKeyword = (newKeyword: CustomKeyword) => {
        setCustomKeywords(prevState => ([
            ...prevState,
            newKeyword
        ]))
        setShowKeywordModal(false)
    }


    const handlePriorityChange = (newPriority: Set<string>, index: number) => {
        const newPriorityNum = +[...newPriority][0]
        const updatedState = [...customKeywords]
        const updatedObj: CustomKeyword = {...updatedState[index], priority: newPriorityNum }
        updatedState[index] = updatedObj 
        setCustomKeywords(updatedState)
    }


    return (
        <>
            <Container lg >

                <Col css={{
                    py: 12,
                    d: 'flex',
                    flexDirection: 'column',
                    zIndex: 10,
                    position: 'relative',
                    gap: 36,
                    justify: 'center'
                }} >
                    <Checkbox.Group
                        color="primary"
                        // defaultValue={[]}
                        label="Default Criteria"
                        size='sm'
                        value={defaultKeywords}
                        onChange={setDefaultKeywords}
                    >
                        {/*
                                Education information how to - check keywords for section name and stuff like university, school etc.
                                Has Skills Section - check keywords like Skills, Talents etc.
                                Has Socials Links - check if contains links to linkedin, facebook etc.
                            */}
                        {defaultCriteria.map((dc) => {
                            return (
                                <Checkbox value={dc}>{dc}</Checkbox>
                            )
                        })}

                    </Checkbox.Group>

                    <Checkbox.Group
                        color="primary"
                        value={activeCustomKeywords}
                        label="Keywords (Prioritized)"
                        size='sm'

                    >
                        <Col css={{ d: 'flex', flexDirection: 'column', gap: 12 }} >
                            {customKeywords.map((ck, i) => {
                                //gotta set customkeywords state to prioritydropdown values
                                return (
                                    <Row align='center' css={{ gap: 20 }} >
                                        <Checkbox value={ck.keyword}>{ck.keyword}</Checkbox>
                                        <PriorityDropdown
                                            priority={new Set([ck.priority.toString()])}
                                            onPriorityChange={(newVal) => handlePriorityChange(newVal, i)} />
                                    </Row>
                                )
                            })}
                            <Text css={{
                                color: '$primary !important',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 4,
                                cursor: 'pointer',
                                width: 'fit-content'
                            }}
                                onClick={showKeywordModalHandle}
                            >
                                Add Keyword
                                <MdOutlineAddCircle />
                            </Text>
                        </Col>
                    </Checkbox.Group>


                    <Input
                        // css={{ ds: '$md' }}
                        size='lg'
                        label='Keywords (Unprioritized)' />


                    <DragDropFiles isDemo={false} />


                    <Collapse.Group css={{ width: '100%', height: '100%' }}>
                        <Collapse shadow title='Files'>
                            {docURIs.length > 0 && <DocViewer
                                documents={docURIs}

                                initialActiveDocument={docURIs[0]}
                                pluginRenderers={DocViewerRenderers}
                                style={{ width: '100%', height: '100%' }}
                                config={{ pdfZoom: { defaultZoom: 0.5, zoomJump: 0.1 } }}
                            />}
                        </Collapse>
                    </Collapse.Group>
                    <Row justify='center'>
                        <Button size='xl' color='primary' shadow>Analyze Resumes</Button>

                    </Row>
                </Col>
            </Container>
            <KeywordModal
                visible={showKeywordModal}
                closeHandler={handleKeywordModalClose}
                actionHandler={handleAddKeyword}
            />
        </>
    )
}

export default Demo
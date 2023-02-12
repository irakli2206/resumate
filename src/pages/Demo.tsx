import { Container, Grid, Collapse, Checkbox, Input, Col } from '@nextui-org/react'
import { ref, listAll, list, getDownloadURL } from 'firebase/storage'
import React, { useEffect, useState } from 'react'
import { storage } from '../firebase'
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import DragDropFiles from '../components/DragDropFiles';

type DocURI = {
    uri: string
}

const Demo = () => {
    const [docURIs, setDocURIs] = useState<DocURI[]>([

    ])
    const listRef = ref(storage, 'dummy-pdfs')



    useEffect(() => {
        console.log('test')
        listAll(listRef)
            .then(async (res) => {
                let result = await Promise.all(res.items.map(async (item) => {
                    return getDownloadURL(item).then((uri) => {
                        console.log({ uri })
                        return { uri }
                    })
                }))
                setDocURIs(result)

            }).catch((error) => {
                console.log(error)
            });
    }, [])

    console.log(docURIs)

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
                        defaultValue={["buenos-aires"]}
                        label="Select Criteria"
                        size='sm'
                    >
                        {/*
                                Education information how to - check keywords for section name and stuff like university, school etc.
                                Has Skills Section - check keywords like Skills, Talents etc.
                                Has Socials Links - check if contains links to linkedin, facebook etc.
                            */}
                        <Checkbox value="buenos-aires">Has Education Information</Checkbox>
                        <Checkbox value="sydney">Has Skills Section</Checkbox>
                        <Checkbox value="london">Has Socials Links</Checkbox>
                        <Checkbox value="tokyo">Tokyo</Checkbox>
                    </Checkbox.Group>
                    <Input size='lg' label='Keywords' />
                    <DragDropFiles isDemo={false} />
                    <Collapse.Group css={{ width: '100%', height: '100%', pb: 50 }}>
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

                </Col>
            </Container>
        </>
    )
}

export default Demo
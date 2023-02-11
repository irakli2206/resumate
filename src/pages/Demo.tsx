import { Container, Grid } from '@nextui-org/react'
import { ref, listAll, list, getDownloadURL } from 'firebase/storage'
import React, { useEffect, useState } from 'react'
import { storage } from '../firebase'
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

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

                res.prefixes.forEach((folderRef) => {


                    // All the prefixes under listRef.
                    // You may call listAll() recursively on them.
                });
                res.items.forEach((itemRef) => {

                    // All the items under listRef.
                });
            }).catch((error) => {
                console.log(error)
                // Uh-oh, an error occurred!
            });
    }, [])

    console.log(docURIs)

    return (
        <>
            <Container lg>
                <Grid.Container css={{ py: 12, minHeight: 'calc(100vh - 76px)', zIndex: 10, position: 'relative', marginTop: 100 }} alignItems='center' justify="center" >
                    <Grid >
                        <DocViewer
                            documents={docURIs}
                            initialActiveDocument={docURIs[1]}
                            pluginRenderers={DocViewerRenderers}
                            style={{width: '100%', height: '100%'}}
                            config={{pdfZoom: {defaultZoom: 30, zoomJump: 1}}}
                        />
                    </Grid>
                </Grid.Container>
            </Container>
        </>
    )
}

export default Demo
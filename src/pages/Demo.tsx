import { Container, Grid, Collapse, Checkbox, Input, Col, Button, Row, Text, Table, Tooltip, Textarea, Link, styled } from '@nextui-org/react'
import { ref, listAll, list, getDownloadURL } from 'firebase/storage'
import React, { useEffect, useState, useMemo } from 'react'
import { storage } from '../firebase'
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import DragDropFiles from '../components/DragDropFiles';
import PriorityDropdown from '../components/PriorityDropdown';
import { MdOutlineAddCircle } from 'react-icons/md'
import KeywordModal from '../components/KeywordModal';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import axios from 'axios';
import { AiFillEye } from 'react-icons/ai'
import { IconButton } from '../components/IconButton';
import { Document, Page } from 'react-pdf/dist/esm/entry.vite';
import usePdfViewer from '../hooks/usePDFViewer';
import PDFViewerControls from '../components/PDFViewerControls';
import PDFModal from '../components/PDFModal';
import { DocURI, CustomKeyword, ResumeAnalysis, Criteria, Priority } from '../types/general';





const interviewQuestions = [
    'What inspired you to pursue a career in construction and project management, and what do you find most fulfilling about the work?',
    'How do you approach project management, particularly in terms of budgeting and scheduling, and what strategies have you found to be particularly effective in keeping projects on track and within budget?',
    'Can you tell me about a particularly challenging project you worked on, and how you overcame any obstacles or issues that arose during its completion?',
    'How do you ensure the safety and security of workers on construction sites, and what measures do you take to ensure compliance with OSHA regulations and other safety standards?',
    'How do you stay current with new developments and technologies in the construction industry, and how do you integrate these into your work to ensure your projects are using the latest and most effective methods and tools?'
]

const columns = [
    { name: "CRITERIUM", uid: "criterium" },
    { name: "SCORE", uid: "score" },
];

const rows = [
    {
        key: 1,
        criterium: 'Grammar',
        score: 95
    },
    {
        key: 2,
        criterium: 'Structure',
        score: 90
    },
    {
        key: 3,
        criterium: 'Content',
        score: 95
    },

]

const feedbackText = `Overall, this is a well-written and informative resume. The candidate has provided a good overview of their relevant experience, skills, and areas of expertise. The use of bullet points and section headings makes the information easy to read and understand.

One suggestion would be to include more specific details and metrics to highlight achievements and demonstrate the impact the candidate has had in their previous roles. For example, instead of simply stating that they "oversaw a broad range of remodeling projects," they could mention the number of projects, their total value, and any specific challenges or accomplishments.
    
Additionally, the resume could benefit from more focus on the most recent and relevant experiences, as some of the earlier positions are from more than a decade ago. It may be more effective to highlight the most recent 10-15 years of experience.`

const Demo = () => {
    const [docURIs, setDocURIs] = useState<DocURI[]>([

    ])
    const listRef = ref(storage, 'dummy-pdfs')


    const [feedback, setFeedback] = useState<string>('')
    const [checkboxes, setCheckboxes] = useState({
        interview: true,
        websites: true
    })

    const { file, setFile, curPage, totalPageNum, toNextPage, toPrevPage, onFileChange, onDocumentLoadSuccess } = usePdfViewer('https://firebasestorage.googleapis.com/v0/b/resumate-6b5c1.appspot.com/o/dummy-pdfs%2Fconstruction-work-resume.pdf?alt=media&token=e32bd116-d4dd-4a5c-9d68-cf2a12222408')

    const [pdfModalVisible, setPdfModalVisible] = useState(false)
    const [modalFileSource, setModalFileSource] = useState<string | null>(null)

    const analyze = () => {
        setFeedback(feedbackText)
    }

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


    const renderCell = (resume: ResumeAnalysis, columnKey: any) => {
        const cellValue = resume[columnKey as keyof ResumeAnalysis];
        switch (columnKey) {
            case "id":
                return (

                    <Text css={{ p: 0 }}>{resume.id}</Text>
                );
            case "summary":
                return (

                    <Text size={14} css={{ tt: "capitalize" }}>
                        {cellValue}
                    </Text>

                );
            case "score":
                //make color dependant on score
                return <Text  >{cellValue}</Text>;

            case "actions":
                return (
                    <Row justify="center" align="center">
                        <Col css={{ d: "flex" }}>
                            <Tooltip content="Open PDF">
                                <IconButton onClick={() => setPdfModalVisible(true)}>
                                    <AiFillEye size={20} fill="#979797" />
                                </IconButton>
                            </Tooltip>
                        </Col>

                    </Row>
                );
            default:
                return cellValue;
        }
    };

    const onPdfModalClose = () => {
        setPdfModalVisible(false)
    }

    console.log(checkboxes)

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
                    justify: 'center',
                    mb: 50
                }} >
                    {/* <DragDropFiles isDemo={false} /> */}
                    <Collapse.Group css={{ width: '100%', height: '100%', p: 0 }}>
                        <Collapse shadow title='Resume'>
                            <Document file={file} onLoadSuccess={onDocumentLoadSuccess} className='pdf-viewer' >
                                <Page pageNumber={curPage} />
                                <PDFViewerControls curPage={curPage} totalPages={totalPageNum} toNextPage={toNextPage} toPrevPage={toPrevPage} />
                            </Document>
                        </Collapse>
                    </Collapse.Group>
                    <Input
                        // css={{ ds: '$md' }}
                        size='lg'
                        label='Targeted Profession'
                        readOnly
                        bordered
                        value='Construction Site Manager'
                    />
                    <Input
                        // css={{ ds: '$md' }}
                        size='lg'
                        label='Location'
                        readOnly
                        bordered
                        value='Boston area, USA'
                    />
                    <Checkbox isSelected={checkboxes.interview}
                        onChange={(e) => setCheckboxes(prev => ({
                            ...prev,
                            interview: e
                        }))}
                    >Interview Questions</Checkbox>
                    <Checkbox isSelected={checkboxes.websites}
                        onChange={(e) => setCheckboxes(prev => ({
                            ...prev,
                            websites: e
                        }))}
                    >Job Board Website Recommendations</Checkbox>

                    <Row justify='center'>
                        <Button size='lg' color='primary' shadow
                            onClick={analyze}
                        >Analyze Resume</Button>
                    </Row>
                    {feedback &&
                        <Col  >
                            <Text h3>Feedback</Text>
                            <Textarea rows={8} readOnly bordered size='lg' value={feedback} css={{ width: '100%' }} />
                        </Col>
                    }

                    {feedback &&
                        <Col>
                            <Text h3>Criteria Scores</Text>
                            <Table
                                aria-label="Example table with static content"
                                css={{
                                    height: "auto",
                                    minWidth: "100%",

                                }}
                            >
                                <Table.Header columns={columns}>
                                    {(column) => (
                                        <Table.Column
                                            key={column.uid}
                                            hideHeader={column.uid === "actions"}
                                            align={column.uid === "actions" ? "center" : "start"}
                                        >
                                            {column.name}
                                        </Table.Column>
                                    )}
                                </Table.Header>
                                <Table.Body items={rows}>
                                    {(item) => (
                                        <Table.Row key={item.key}>
                                            {(columnKey) => <Table.Cell>{item[columnKey as keyof typeof item]}</Table.Cell>}
                                        </Table.Row>
                                    )}
                                </Table.Body>
                            </Table>
                        </Col>
                    }
                    {(feedback && checkboxes.interview) &&
                        <Col>
                            <Text h3>Interview Questions</Text>
                            <QuestionsList>
                                {interviewQuestions.map(q => {
                                    return (
                                        <li>
                                            <Text>{q}</Text>
                                        </li>
                                    )
                                })}

                            </QuestionsList>
                        </Col>
                    }
                    {(feedback && checkboxes.websites) &&
                        <Col>
                            <Text h3>Job Boards</Text>
                            <Grid.Container css={{ columnGap: 20, rowGap: 20 }}>
                                <Grid>
                                    <Link target='_blank' href='https://www.indeed.com'>https://www.indeed.com</Link>
                                </Grid>
                                <Grid>
                                    <Link target='_blank' href='https://www.glassdoor.com'>https://www.glassdoor.com</Link>
                                </Grid>
                                <Grid>
                                    <Link target='_blank' href='https://www.linkedin.com/jobs'>https://www.linkedin.com/jobs</Link>
                                </Grid>
                                <Grid>
                                    <Link target='_blank' href='https://www.careerbuilder.com'>https://www.careerbuilder.com</Link>
                                </Grid>
                                <Grid>
                                    <Link target='_blank' href='https://www.ziprecruiter.com'>https://www.ziprecruiter.com</Link>
                                </Grid>


                            </Grid.Container>
                        </Col>

                    }
                </Col>
            </Container>

            <PDFModal visible={pdfModalVisible} closeHandler={onPdfModalClose} fileSource='https://firebasestorage.googleapis.com/v0/b/resumate-6b5c1.appspot.com/o/dummy-pdfs%2FFederal-Work-Resume-Template.pdf?alt=media&token=8c8646b9-cc1e-40f8-97b3-540eebf07c39' />
        </>
    )
}

const QuestionsList = styled('ol', {

})

export default Demo
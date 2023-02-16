export type Keyword = string

export type Priority = 'Low' | 'Medium' | 'High'

export type DocURI = {
    uri: string
}

export type CustomKeyword = {
    keyword: Keyword
    priority: Priority
    selected: boolean
}

export type ResumeAnalysis = {
    id: string
    summary: string
    score: number
}

export type DefaultCriteria = {
    name: string
    selected: boolean
}

export type Criteria = {
    hasEducationSelection: boolean,
    hasContactsSelection: boolean,
    hasSocialsSelection: boolean,
    hasSkillsSelection: boolean,
    customKeywords: CustomKeyword[],
    keywords: Keyword[]
}
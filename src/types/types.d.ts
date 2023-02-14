declare interface Career {
    title: string
    startDate: string
    endDate: string
    content: string
}

declare interface Certificate {
    name: string, date: string, content: string
}
declare interface Link {
    name: stirng, url: string
}
declare interface PreviewCardDatum {
    img: string
    title: string
    paragraph: string
    test: () => void
}

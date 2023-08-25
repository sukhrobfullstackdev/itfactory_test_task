export interface InterfaceInitialStateOfBooksSlice {
    data: Array<any>,
    loading: boolean,
    error: object,
    totalItems: number
}

export interface IAPIResponse {
    items: Array<IBook>
    kind: string,
    totalItems: number
}

export interface IBook {
    accessInfo: {
        accessViewStatus: string,
        country: string,
        embeddable: boolean,
        epub: {
            isAvailable: boolean
        },
        pdf: {
            acsTokenLink: string,
            isAvailable: boolean
        },
        publicDomain: boolean,
        quoteSharingAllowed: boolean,
        textToSpeechPermission: string,
        viewability: string,
        webReaderLink: string
    },
    etag: string,
    id: string,
    kind: string,
    saleInfo: {
        country: string,
        isEbook: boolean,
        saleability: string
    },
    searchInfo: {
        textSnippet: string
    },
    selfLink: string,
    volumeInfo: {
        allowAnonLogging: boolean,
        averageRating: number,
        canonicalVolumeLink: string,
        categories: Array<string>,
        contentVersion: string,
        description: string,
        imageLinks: {
            smallThumbnail: string,
            thumbnail: string
        },
        authors: Array<string>,
        industryIdentifiers: any,
        infoLink: string,
        language: string,
        maturityRating: string,
        pageCount: number,
        panelizationSummary: any,
        previewLink: string,
        printType: string,
        publishedDate: string,
        publisher: string,
        ratingsCount: number,
        readingModes: any,
        subtitle: string,
        title: string
    }
}

export interface IParams {
    q: string,
    category: string,
    sortingBy: string,
    startIndex?: number,
    maxResults?: number
}

export interface IAPIParams {
    key: string,
    q: string,
    orderBy: string,
    categories?: Array<string>,
    startIndex: number | UndefinedOrNull,
    maxResults: number | UndefinedOrNull
}
export interface ISagaBooksParams {
    type: string,
    data: IParams
}
type UndefinedOrNull = null | undefined;
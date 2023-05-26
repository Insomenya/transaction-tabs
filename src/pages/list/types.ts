export interface dataRow {
    [key: string]: number | string
    name: string
    amount: number
    _id: string
}

export interface tabsData {
    title: string,
    data: dataRow[] | null
}
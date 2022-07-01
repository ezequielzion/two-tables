import { ITableOneObj, ITableTwoObj } from "../utils/types"

export interface IProps {
    data: ITableOneObj[] | ITableTwoObj[]
    columns: string[]
}
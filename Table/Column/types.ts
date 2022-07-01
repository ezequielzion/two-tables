import { ITableOneObj, ITableTwoObj } from "../../utils/types"

export interface IProps {
    isTableOne: boolean,
    column: string,
    data: ITableOneObj[] | ITableTwoObj[]
}
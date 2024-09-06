export type ColumnKeys<T> = Array<keyof T>;

export interface Data {
 elements: number,
 starts: number,
 ends: number,
 avTotalS: number,
 avTotalOP: number,
 offtimeTotalS: string,
 offtimeTotalOP: string,
 runtimeTotal: string,
}
   
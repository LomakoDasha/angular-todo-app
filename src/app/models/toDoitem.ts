export interface ListState {
  lists: Array<{
    id: number,
    listTitle: string,
    subList: Array<{
      id: number,
      title: string,
      description: string;
      importanceFlag: boolean;
    }>
  }>;
  isLoading?: boolean;
}

export interface ListOfItems {
  id: number,
  listTitle: string,
  subList: Array<{
    id: number,
    title: string,
    description: string;
    importanceFlag: boolean;
  }>
}

export interface Item {
  id: number;
  title: string;
  description: string;
  importanceFlag: boolean;
}

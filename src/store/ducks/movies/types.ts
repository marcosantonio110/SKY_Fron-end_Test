/*
 * Actions types
 */
export enum MoviesTypes {
  GET_LIST_MOVIES_REQUEST = "@products/GET_LIST_MOVIES_REQUEST",
  GET_LIST_MOVIES_SUCCESS = "@products/GET_LIST_MOVIES_SUCCESS",
  GET_LIST_MOVIES_FAILURE = "@products/GET_LIST_MOVIES_FAILURE"
}

export interface Images {
  width: number
  height: number
  type: number
  isS3: boolean
  url: string
}

export interface Movies {
  availableChannels: []
  title: string
  isBlocked: boolean
  images: Images[]
  categories: string
  cast: []
  programId: string
  programType: string
  sheetType: number
  duration: number
  parentalRating: number
  description: string
  shortDescription: string
  year: number
}

export interface Highlight {
  type: string;
  title: string;
  items: []
}

export interface Menu {
  type: string;
  items: []
}

export interface CarouselPortrait {
  type: string;
  title: string
  movies: Movies[]
}

/*
 * State Type
 */
export interface MoviesState {
  readonly data: [Highlight, Menu, CarouselPortrait];
  readonly loading: boolean;
  readonly error: boolean;
}

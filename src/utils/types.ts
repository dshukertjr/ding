export enum BorderColor {
  red,
  blue,
  green,
  yellow,
}

export interface Question {
  question: string
  answer: number
  choices: Choice[]
}

export interface Choice {
  index: number
  choice: string
}

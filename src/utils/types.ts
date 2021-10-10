export enum BorderColor {
  red,
  blue,
  green,
  yellow,
}

export interface Room {
  id?: string
  created_at: string
}

export interface Question {
  id?: string
  question: string
  answer: number
  choices: Choice[]
}

export interface Choice {
  id?: string
  index: number
  choice: string
}

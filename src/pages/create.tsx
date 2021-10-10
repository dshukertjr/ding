import type { NextPage } from 'next'
import Head from 'next/head'
import React, { FC, useState } from 'react'
import AppBar from '../components/app-bar'
import FormField from '../components/form-field'
import Wrapper from '../components/wrapper'
import { SITE_NAME } from '../utils/constants'
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/outline'
import { BorderColor as ChoiceColor, Question } from '../utils/types'

const Page: NextPage = () => {
  const [questions, setQuestions] = useState<Question[]>([
    {
      question: '',
      answer: 0,
      choices: [
        { choice: '', index: 0 },
        { choice: '', index: 1 },
        { choice: '', index: 2 },
        { choice: '', index: 3 },
      ],
    },
    {
      question: '',
      answer: 0,
      choices: [
        { choice: '', index: 0 },
        { choice: '', index: 1 },
        { choice: '', index: 2 },
        { choice: '', index: 3 },
      ],
    },
    {
      question: '',
      answer: 0,
      choices: [
        { choice: '', index: 0 },
        { choice: '', index: 1 },
        { choice: '', index: 2 },
        { choice: '', index: 3 },
      ],
    },
  ])

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()
    console.log('questions', questions)
  }

  return (
    <div>
      <Head>
        <title>Create a Room | {SITE_NAME}</title>
        <meta
          name="description"
          content={`Create a new room to become a host enjoy ${SITE_NAME} with your friends!`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppBar title="Create a Room"></AppBar>

      <Wrapper>
        <div className="pb-4">
          Create 3 questions. Players will get 10 seconds to answer each question.
        </div>
        <form onSubmit={handleFormSubmit}>
          <QuestionForm questions={questions} setQuestions={setQuestions} index={0}></QuestionForm>
          <QuestionForm questions={questions} setQuestions={setQuestions} index={1}></QuestionForm>
          <QuestionForm questions={questions} setQuestions={setQuestions} index={2}></QuestionForm>
          <button className="text-center bg-blue-500 text-white py-2 w-full rounded">
            Submit and Go To Lobby
          </button>
        </form>
      </Wrapper>
    </div>
  )
}

export default Page

const QuestionForm: FC<{
  index: number
  questions: Question[]
  setQuestions: React.Dispatch<React.SetStateAction<Question[]>>
}> = ({ index, questions, setQuestions }) => {
  return (
    <div className="mb-12">
      <div className="mb-6">
        <FormField
          onChange={(event) => {
            questions[index].question = event.target.value
            setQuestions(questions)
          }}
          label="Enter your question..."
        ></FormField>
      </div>
      <ChoiceFormField color={ChoiceColor.red} isSelected={true} index={0}></ChoiceFormField>
      <ChoiceFormField color={ChoiceColor.blue} isSelected={false} index={1}></ChoiceFormField>
      <ChoiceFormField color={ChoiceColor.green} isSelected={false} index={2}></ChoiceFormField>
      <ChoiceFormField color={ChoiceColor.yellow} isSelected={false} index={3}></ChoiceFormField>
      <div className="border mt-12"></div>
    </div>
  )
}

const ChoiceFormField: FC<{ color: ChoiceColor; isSelected: boolean; index: number }> = ({
  color,
  isSelected,
  index,
}) => {
  return (
    <div className="flex items-center mb-6">
      <button type="button" className="py-2 px-4">
        {isSelected ? (
          <CheckCircleIcon className="w-6 h-6 text-green-500"></CheckCircleIcon>
        ) : (
          <XCircleIcon className="w-6 h-6 text-red-500"></XCircleIcon>
        )}
      </button>
      <FormField label={`Choice ${index + 1}`} borderColor={color}></FormField>
    </div>
  )
}

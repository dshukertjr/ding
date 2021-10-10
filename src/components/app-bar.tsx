import React, { FC } from 'react'

const AppBar: FC<{ title: string }> = ({ title }) => {
  return <header className="flex items-center justify-center h-16">{title}</header>
}

export default AppBar

import React, { useState } from 'react'
import { Input } from './components/InputAmout/Input'
import { Amount } from './components/InputAmout/Amount'
import { StarMenu } from './components/StartMenu/StarMenu'
import { Category } from './components/Category/Category'
import { AddCategory } from './components/AddCategory/AddCategory'


function App() {
  const [isOpen, setIsOpen] = useState('menu')
  
  return (
    <>
    {/* <AddCategory /> */}
      {isOpen === 'menu' && <StarMenu onNavigate={setIsOpen} />}
      {isOpen === 'input' && <Input />}
      {isOpen === 'amount' && <Amount />}
      {isOpen === 'category' &&  <Category/>}
    </>
  )
}

export default App
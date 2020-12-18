import React, {useState} from 'react';
import Accordion from './components/accordion';
import Search from './components/search';
import Dropdown from './components/dropdowm';
import Translate from './components/translate';

const items = [
  {
    title: 'What is React',
    content: 'React is a front end Javascript framework'
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library among engineers'
  },
  {
    title: 'How do you use React?',
    content: 'You use react by creatin components'
  }
]

const options = [
  {
    label: 'The color red',
    value: 'red'
  },
  {
    label: 'The color green',
    value: 'green'
  },
  {
    label: 'A shade of blue',
    value: 'blue'
  }
]

const App = () => {

  return (
    <div>
      <Translate />
    </div>
  )
}

export default App;
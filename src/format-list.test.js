import formatList from './format-list'

test('Can format a list', () => {
  const formattedList = formatList(
    'Some fictitious characters(change is intentional and inevitable)',
    [
      {name: "Qui-Gon Jinn"},
      {name: "Chewbacca"},
      {name: "Han Solo"},
      {name: "Luke Skywalker"},
      {name: "Jaime Lannister"}
    ],
    'name'
  )
  expect(formattedList).toMatchSnapshot()
})

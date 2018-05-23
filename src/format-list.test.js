import formatList from './format-list'

test('Can format a list', () => {
  const formattedList = formatList(
    'Star wars name',
    [
      {name: "Qui-Gon Jinn"},
      {name: "Chewbacca"},
      {name: "Han Solo"},
      {name: "Luke Skywalker"},
    ],
    'name'
  )
  expect(formattedList).toMatchSnapshot()
})

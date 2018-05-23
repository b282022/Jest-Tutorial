export default formatList

function formatList(listName, listItems, key) {
  console.log(listName, listItems, key)
  return `These are the items in the ${listName}:${
    listItems.reduce((itemsList, item) => {
      console.log(itemsList, key, item[key])
      return `${itemsList}\n - ${key ? item[key] : item}`
    }, '')
  }`
}

const fetchLink = 'https://fakestoreapiserver.reactbd.com/amazonproducts'

const Fetcheddata = async () => {
  const response = await fetch(fetchLink)
  const data = await response.json()
  return data
}

export default Fetcheddata

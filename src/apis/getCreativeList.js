import axios from 'axios'

const getCreativeList = async () => {
  const response = await axios.get(`https://jut.based.bar/100-creative-power-api`)
  return response.data.creative_list
}

export default getCreativeList
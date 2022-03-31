import axios from 'axios'

const getCreativeList = async () => {
  const response = await axios.get(`https://jut.based.bar/creative-power/`)
  return response.data.creative_list
}

export default getCreativeList
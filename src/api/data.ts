import axios from "../utils/axios";

const getDetailPlaylist = async (id: string) => {
  try {
    const data = await axios.get<any, any>(
      "https://quang-music-nodejs.herokuapp.com/api/detailplaylist",
      {
        params: {
          id: id,
        },
      }
    );
    return data;
  } catch (err) {
    console.log(err);
  }
};
const getSong = async (id: string) => {
  try {
    const data = await axios.get<any, any>(
      "https://quang-music-nodejs.herokuapp.com/api/song",
      {
        params: {
          id: id,
        },
      }
    );
    return data;
  } catch (err) {
    console.log(err);
  }
};
const getTop100 = async () => {
    try {
      const data = await axios.get<any, any>("https://quang-music-nodejs.herokuapp.com/api/top100")
      return data
    } catch(err) {
      console.log(err)
    }
  }

export { getDetailPlaylist, getSong,getTop100 };
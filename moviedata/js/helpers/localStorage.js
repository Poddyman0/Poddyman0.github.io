import { cleanMovieData } from '../movieData.js'
import { setCleanMoiveData } from '../movieData.js'

export const getDataFromStorage = () => {
  const dataFromStorage = JSON.parse(localStorage.getItem('cleanMoiveData'))
  if (dataFromStorage) {
    setCleanMoiveData(dataFromStorage)
  }
}

export const addDatatoStorage = () => {
  const cleanMoiveDataForStorage = JSON.stringify(cleanMovieData)
  localStorage.setItem('cleanMoiveData', cleanMoiveDataForStorage)
}

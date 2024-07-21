import axios from "axios"

const api = axios.create({
  baseURL: "http://localhost:4000", // バックエンドのベースURL
  timeout: 5000, // タイムアウト設定（ミリ秒）
})

export default api

function bad(a,b) {
  if(+a) {
    return a
  } else (b) {
    console.error("error")
  }
}

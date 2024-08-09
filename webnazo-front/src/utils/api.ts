import axios from "axios"

const api = axios.create({
  baseURL: "http://localhost:4000/api", // バックエンドのベースURL
  timeout: 5000, // タイムアウト設定（ミリ秒）
  /* eslint-disable @typescript-eslint/naming-convention */
  headers: {
    "Content-Type": "application/json",
  },
})

export default api

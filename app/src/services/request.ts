import axios from "axios";
import useStore from "@/helpers/useStore";
type Method = "post" | "put" | "patch" | "get" | "delete";

function getCookie(name: string): string | null {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.substring(0, name.length + 1) === (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

export const request = (path: string, method: Method = "get", data: FormData | object | null = null) => {
  const {progress}= useStore()
  axios.defaults.headers.common['X-CSRFToken'] = <string>getCookie("csrftoken");
  return new Promise((resolve, reject) => {
    axios.request({
      method: method,
      baseURL: import.meta.env.VITE_APP_DATABASE_URL,
      url: path + "/",
      data: data,
      onUploadProgress: (event: any): any => {
        // console.log(Math.round((event.loaded / event.total) * 100), "progress")
        progress.value = Math.round((event.loaded / event.total) * 100)
      }
    }).then((response: any) => {
      resolve(response.data)
    }).catch((error: any) => {
      let object: any = {}
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        object.method = method
        object.endpoint = path
        object.status = error.response.status
        Object.keys(error.response.data).forEach(key => {
          object.problem = key + " -- " + error.response.data[key].toString() + " / "
        })
      }
      if (error.response.status !== 403){
        alert("エラーが発生しました。\n エラー内容をサポートチームに送信しました。\n\nご理解のほどよろしくお願いいたします");
        if (alert != null) {
          axios.request({
            method: "post",
            baseURL: import.meta.env.VITE_APP_DATABASE_URL,
            url: "logs/errors/",
            data: object,
          }).then(() => {
            // window.location.reload();
          })
        }
      }
      reject(false)
    })
  })
}

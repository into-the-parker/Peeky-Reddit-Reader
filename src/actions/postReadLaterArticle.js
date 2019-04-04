export function postReadLaterArticle(data){
  console.log(data)
  return (dispatch) => {
    return fetch("http://localhost:3000/api/v1/create",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
          data: {
            article: data.url
          }
      })
    })
    .then(response => response.json())
    .then(responseJSON => {
      if (responseJSON.data === "success"){
        alert("Article Saved")
        return dispatch({type: "READ_LATER"})
      }else if (responseJSON.data === "saved already") {
        alert("You already have this article Saved")
      }
    })
  }
}

const express = require("express")

const app = express()

app.get("/", (request, response) => {
  response.json({
    message: "This API is working!",
  })
})

app.listen(443, () => console.log("Server is listening on 443"))

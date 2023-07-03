# frontend

# backend 폴더 생성 및 아래 코드 
const express = require('express')
const app = express()
const port = 3000

const memos = ["메모1", "메모2", "메모3"];


app.get('/api/memos', (req, res) => {
  res.send(memos)
})

app.post('/api/memos', (req, res) => {
  memos.push('추가내용')
  res.send(memos)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


<iframe width="560" height="315" src="https://www.youtube.com/embed/ADxbGlwhl_s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

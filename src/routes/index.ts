import express from 'express'
import cheerio from 'cheerio'

import rp from 'request-promise'

const router = express.Router()

router.get('/', (req: express.Request, res: express.Response) => {
  res.render('index')
})

router.post('/', (req: express.Request, res: express.Response) => {
  const url = `${req.body.url.split('?')[0]}/retweets`
  console.log(url)

  const options = {
    uri: url,
    method: 'GET',
    timeout: 1000,
    headers: {
      // 헤더 부분 설정
      'User-Agent': 'TWEET-PICKER/1.0',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  }

  rp(options)
    .then(body => {
      let $ = cheerio.load(body)
      let list = $(
        '//*[@id="react-root"]/div/div/div[1]/div/div/div/div/div[2]/div[2]/div/div[2]/div/div/section/div/div/div/div',
      )
      console.log(list.length)
    })
    .catch(err => {
      console.log(err)
    })

  res.render('index')
})

export default router

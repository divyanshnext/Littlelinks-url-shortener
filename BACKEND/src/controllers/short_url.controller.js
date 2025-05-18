// This file contains the error handling middleware and custom error classes for the application.
// It provides a centralized way to handle errors and send appropriate responses to the client.
import { createShortUrlWithoutUser } from "../services/short_url.service.js"
import { getShortUrl } from "../dao/short_url.js"

export const createShortUrl = wrapAsync(async(req,res) => {
    const {url} = req.body
    const shortUrl = await createShortUrlWithoutUser(url)
    res.send(process.env.APP_URL + shortUrl)
})

export const redirectFromShortUrl = wrapAsync(async(req, res) => {
    const { id } = req.params
    const url = await getShortUrl(id)
    if(!url) {
        return res.status(404).send("ShortURL not found")
    }
    res.redirect(url.full_url)
})

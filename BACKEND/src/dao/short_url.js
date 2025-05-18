import urlSchema from '../models/short_url.model.js'
import { ConflictError } from '../utils/errorHandler.js'

export const saveShortUrl = async(shortUrl, longUrl, userId)=>{
    try{
        const newUrl = new urlSchema({
        full_url: longUrl,
        short_url: shortUrl
        })
        if(userId){
        newUrl.user_id = userId
        }
        await newUrl.save()
    } 
    catch(error){
        if(error.code === 11000){
            throw new ConflictError("Short URL already exists")
        }
        throw new Error(error)
    }
}

export const getShortUrl = async(shortUrl)=>{
    const url = await urlSchema.findOneAndUpdate({short_url: shortUrl}, {$inc: {clicks: 1}})
    return url
}


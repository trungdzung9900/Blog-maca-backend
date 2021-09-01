import { PostModel } from "../models/postMode.js"

export async function getPost (){
    const post = await PostModel.find();
    if(!post){
        throw 'Data not found'
    }
    return post  
}
export async function createPost (body){
    const post = new PostModel({
        title: body.title,
        content: body.content,
        attachment: body.attachment,
        author: body.author,
    }) 
    const result = await post.save()
    return result
}
export async function  updatePost (body){
    const postFoundUpdate = await PostModel.findOneAndUpdate({_id: body._id},body,{new: true})
  
    return postFoundUpdate
}
import * as postService from '../services/postService.js'

export async function  getPost (req,res){
    try {
        const post = await postService.getPost()
        res.status(200).json(post)
    }
    catch(err){
        res.status(500).json(err)
    }
}

export async function  createPost(req,res){
    try {
        const post =  await postService.createPost(req.body)
        res.status(200).json(post)
    }
    catch(err){
        res.status(500).json(err)
    }
}


export async function updatePost(req,res){
    try {
        const post =  await postService.updatePost(req.body)
        res.status(200).json(post)
    }
    catch(err){
        res.status(500).json(err)
    }
}
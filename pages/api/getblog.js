// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// http://localhost:3000/api/getblog?slug=how-to-learn-egaming
import * as fs from 'fs';


export default function handler(req, res) {
    let slug = req.query.slug
  fs.readFile(`blogdata/${slug}.json`, 'utf-8' , (err, data)=>{
    if(err){
        res.status(404).json({error: "No such blog found"})
    }
    console.log(req.query.slug)
    res.status(200).json(JSON.parse(data))
  })
  
}




const asyncHandler = (requestHandler)=>{
    (req, res, next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
    }
}

export {asyncHandler};


// another way to handle request

// const asyncHandler = (requestHandler)=> async (req,res,next)=>{
//     try {
//         await requestHandler(req,res,next)
//     } catch (error) {
//         res.status(err.code).json({
//             success:false,
//             message:err.message
//         })
//     }
// }
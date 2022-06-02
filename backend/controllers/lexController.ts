import asyncHandler from 'express-async-handler'


// @description 
// @route GET /lexapi
// @access Public

const getResponse = asyncHandler(async (req, res) => {

    // const articles = await Article.find({})
    res.json(res)
})

export { getResponse }
import asyncHandler from 'express-async-handler'
import Fragment from '../models/fragmentModel'

// @description create new fragment
// @route POST /api/fragments
// @access private

const addNewFragment = asyncHandler(async (req: any, res: any) => {
    const {
        source,
        excerpt,
        coordinates,
        title,
        description,
    } = req.body


    const fragment = new Fragment({
        user: req.user._id,
        source,
        excerpt,
        coordinates,
        title,
        description,

    })

    const createdFragment = await fragment.save()

    res.status(201).json(createdFragment)
})




// @description update Fragment 
// @route PUT /api/fragments/:id 
// @access private

const updateFragment = asyncHandler(async (req, res) => {
    const {
        source,
        excerpt,
        coordinates,
        title,
        description,
    } = req.body
    const fragment = await Fragment.findById(req.params.id)

    if (fragment) {

        fragment.source = source
        fragment.excerpt = excerpt
        fragment.coordinates = coordinates
        fragment.title = title
        fragment.description = description
        // fragment.updatedAt = Date.now()

        const updatedFragment = await fragment.save()
        res.json(updatedFragment)
    }
    else {
        res.status(404)
        throw new Error('Fragment not found')
    }
})



// @description get logged in user fragments
// @route GET /api/fragments/myfragments
// @access private

const getMyFragments = asyncHandler(async (req: any, res: any) => {
    //only want to find fragments that user is equal req.user_id, so only logged in user
    const fragments = await Fragment.find({ user: req.user._id })
    res.json(fragments)
})

// @description get all orders
// @route GET /api/orders
// @access private/admin

const getOrders = asyncHandler(async (req, res) => {
    const orders = await Order.find({}).populate('user', 'id name')
    res.json(orders)
})

export {
    addOrderItems,
    getOrderById,
    updateOrderToPaid,
    updateOrderToDelivered,
    getMyOrders,
    getOrders,
}

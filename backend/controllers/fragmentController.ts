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


// @description get order by id
// @route GET /api/orders/:id
// @access private

const getOrderById = asyncHandler(async (req, res) => {
    // the following will find order by its id and add to that associated user and email
    const order = await Order.findById(req.params.id).populate(
        'user',
        'name email'
    )
    if (order) {
        res.json(order)
    } else {
        res.status(404)
        throw new Error('Order not found')
    }
})

// @description update order to paid
// @route PUT /api/orders/:id/pay - I think it's a put request
// @access private

const updateOrderToPaid = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id)

    if (order) {
        order.isPaid = true
        order.paidAt = Date.now()
        order.paymentResult = {
            id: req.body.id,
            status: req.body.status,
            update_time: req.body.update_time,
            email_address: req.body.payer.email_address,
        }

        const updatedOrder = await order.save()

        res.json(updatedOrder)
    } else {
        res.status(404)
        throw new Error('Order not found')
    }
})

// @description update order to delivered
// @route PUT /api/orders/:id/deliver
// @access private/admin

const updateOrderToDelivered = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id)

    if (order) {
        order.isDelivered = true
        order.deliveredAt = Date.now()

        const updatedOrder = await order.save()

        res.json(updatedOrder)
    } else {
        res.status(404)
        throw new Error('Order not found')
    }
})

// @description get logged in user orders
// @route GET /api/orders/myorders
// @access private

const getMyOrders = asyncHandler(async (req, res) => {
    //only want to find orders that user is equal req.user_id, so only logged in user
    const orders = await Order.find({ user: req.user._id })
    res.json(orders)
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

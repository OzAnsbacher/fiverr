import { orderService } from '../../services/order.service.js'
import router from '../../router'

export default {
    state: {
        orders: null,
    },
    getters: {
        getorders(state) {
            return state.orders
        },
    },
    mutations: {
        setorders(state, { orders }) {
            state.orders = orders
        },
        addorder(state, { order }) {
            state.orders.push(order)
        },
    },
    actions: {
        async getorders({ commit }, { filterBy }) {
            try {
                const orders = await orderService.query(filterBy)
                commit({
                    type: 'setorders',
                    orders,
                })
            } catch (err) {
                console.log(err)
            }
        },
        async addorder(context, { content, toyId }) {
            const user = context.rootGetters.getUser
            if (!user) return router.push('/login')
            const order = {
                content,
                userId: user._id,
                toyId,
            }
            await orderService.addorder(order)
            // context.commit({
            //   type: 'addorder',
            //   order: addedorder
            // })
        },
    },
}

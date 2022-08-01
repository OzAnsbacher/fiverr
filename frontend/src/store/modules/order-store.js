import { orderService } from '../../services/order.service.js'
import router from '../../router'

export default {
    state: {
        orders: [],
    },
    getters: {
        getorders(state) {
            return state.orders
        },
    },
    mutations: {
        setOrders(state, { orders }) {
            state.orders = orders
        },
        addOrder(state, { order }) {
            state.orders.push(order)
        },
    },
    actions: {
        async getorders({ commit }, { filterBy }) {
            try {
                const orders = await orderService.query(filterBy)
                commit({
                    type: 'setOrder',
                    orders,
                })
            } catch (err) {
                console.log(err)
            }
        },
        async addOrder({ commit }, { order }) {
            try {
                const savedOrder = await orderService.save(order)
                commit({ type: 'addOrder', savedOrder })
                return savedOrder
            } catch (err) {
                console.log('Err in adding order', err)
            }
        },
        async getOrdersById({ commit }, { filterBy }) {
            try {
                console.log('filterBy', filterBy)
                
                const orders = await orderService.query(filterBy)
                commit({ type: 'setOrders', orders })
                return orders
            } catch (error) {}
        },
    },
}

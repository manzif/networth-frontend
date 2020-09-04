import store  from '../store/modules/auth'
import router from '@/router.js'

const guard1 = (to, from, next) => {
    const token = localStorage.getItem('token')
    console.log('\n\n\n\n\n\n', token)
    if (store.state.token === null) {
        if(token === null) {
            router.push('/login')
        }
        next()
    }
    // console.log('\n\n\n\n\n\n', store.state.token)
    next()
}

export default {
    guard1
}
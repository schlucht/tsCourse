import axios from 'axios'
import {User} from './model/user'

const user = new User({name: 'Janina', age: 45})
user.events.on('change', () => {
    console.log('change')
})
user.events.trigger('change')

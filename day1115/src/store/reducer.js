
export const initState = {
    name: '默认名字',
    age: 22,
    sex: '男',
    cart: []
  }
  
  export const reducer = (state, action) => {
    switch(action.type) {
      case 'change_name':
        return {...state, name: action.payload}
      case 'add_cart':
        return {...state, cart: [...state.cart, Math.random()]}
    }
    return state
  }
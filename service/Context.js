import React, { createContext, useContext, useState } from 'react'

const Context = createContext()

function ContextApi({ children }) {

    // used Components --> Header.js,User.js
    // used Pages      --> home page
    const [userToggle, setUserToggle] = useState(false)
    const showOrHideUser = () => {
        setUserToggle(!userToggle)
    }

    // used Components --> LoginForm.js & SignUpForm.js
    // used Pages      --> home page
    const [loginToggle, setLoginToggle] = useState(false)
    const showOrHideLoginForm = () => {
        setLoginToggle(!loginToggle)
    }

    // used Components --> LoginForm.js & SignUpForm.js
    // used Pages      --> home page
    const [signUpToggle, setSignUpToggle] = useState(false)
    const showOrHideSignUpForm = () => {
        setSignUpToggle(!signUpToggle)
    }


    const [cartToggle, setCartToggle] = useState(false)
    const showOrHideCart = () => {
        setCartToggle(!cartToggle)
    }

    const [completePayment, setCompletePayment] = useState(false)
    const showOrHideCompletePayment = () => {
        setCompletePayment(!completePayment)
    }
    // ============================ data state results ==============================
    const [cartData, setCartData] = useState([])
    const [cartTotal, setCartTotal] = useState(0)
    const [order, setOrder] = useState([])
    const [user, setUser] = useState({ companyName: '', email: '', phoneNumber: 610000000 })
    const [totalOrder, setTotalOrder] = useState(0)

    return (
        <Context.Provider
            value={{
                userToggle, setUserToggle, showOrHideUser,
                loginToggle, setLoginToggle, showOrHideLoginForm,
                signUpToggle, setSignUpToggle, showOrHideSignUpForm,
                cartToggle, setCartToggle, showOrHideCart,
                cartData, setCartData, cartTotal, setCartTotal,
                order, setOrder, user, setUser, totalOrder, setTotalOrder,
                completePayment, setCompletePayment, showOrHideCompletePayment
            }}
        >
            {children}
        </Context.Provider>
    )
}
export const useCustomHook = () => (useContext(Context))
export default ContextApi

import axios from 'axios'

export const state = () => ({
    token : "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiYTg3YzE1NGFlY2UzNDBkYTNlYTUzMWE1MDg5M2VhZDVjOWQzY2Q2NjgwODNjNmE0ZGM2YjE4NGM5NjE4M2RlZTJmMGU4ZTFlM2ExOWEyYTgiLCJpYXQiOjE2MDA3ODg0NTksIm5iZiI6MTYwMDc4ODQ1OSwiZXhwIjoxNjMyMzI0NDU5LCJzdWIiOiI4Iiwic2NvcGVzIjpbXX0.Nj3CGOvsnDTedJ2i9l7FBdNLoFlaPE0eL4NFEa3Zvj42OohBCTdjFn1yNdhHVX2oQ7eFeNHNE7-v-O0unU1TqjtxUecnbOm9XhfFAOr6cVy0SF2C2jSIoRlMSJxqjOK6CBVDc4UMkNWJaJo5UjrOmKhu69LL-7wMJKV6ZxroKFu5yqlJAnl5dqLZvSAMiRp9wzA4KRsTe7jZjkgFrI0ehjvpqPOhuELKrkKtYiplE10vYBx5UwRJ5guPn2zEp9G45nbKSx9qWuWi4YXi_eG_n9A9K5MmmVE53MXKdKEYcd5z9TqqCV71KTeNHqtyQAGUBgRGKJZo2xYNYzS4rPs6H4isBu3q7KNquoKBgpBkkH-VivHD1qEMtSa4lWNkwjbxfSB8ji47Sb-k8-vn3ge4nvNUIEBWDM_CvY-UnS0V7pWQLK6tW02IyHyXc5trOA_w81vDGypIJA4Vv9RcW2MhLFrwaienFlHwLv5t5SE4ImnBM8xZLKCVyiqeRBeBZfcYclQQSIuSVABEImpmdLv2FFxex3xXMW5auE0iJqReRlgLkeBatvkvE_wRb69c9H0kXQPWPzd-4WIzPSGjR6_jcb8mjJ6r2d8Sm1fLEltcuK2-RN0iX2Xttug_lyegAOd2u-NcUfiSnxvOp1ZwSHbwJ6YgRsV_vL9THyl6KtS37o8",
    userData : {},
})

export const getters = {
    getData : state => {
        return state.userData;
    }
}
export const mutations = {
   SET_DATA : (state,Data) => {
      state.userData = Data;  
   }, 
}

export const actions = {
    
}
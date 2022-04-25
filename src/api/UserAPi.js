import Axios from '@/utils/AxiosUtils'

// 发起一个post请求
// axios({
//     method: 'post',
//     url: '/user/12345',
//     data: {
//         firstName: 'Fred',
//         lastName: 'Flintstone'
//     }
// });

export default {

    // 用户调用函数时
    // 1. axios异步发送请求
    // 2. 返回结果
    // 3. 用户处理数据 .then(response => { response.data })
    getAllUserInfo(UserList) {
        return Axios({

        })
    }

}
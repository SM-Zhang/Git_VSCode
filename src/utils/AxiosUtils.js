import axios from "axios";

// 使用库提供的默认配置创建实例
// 好处是像使用 api 的形式发送请求，且可以自定义请求基础路径
const instance = axios.create({
    baseURL: 'https://some-domain.com/api/',
    timeout: 2000,
});

export default instance


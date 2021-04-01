import { createService } from './axiosConfig'

// todo 환경변수 파일에 정의하기
const baseUrl = 'http://172.30.1.45:3000'

const service = createService(baseUrl)


export default service

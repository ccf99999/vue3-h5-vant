import Mock from 'mockjs'

const timeout: number = 5000

export default [
  // 登录接口
  {
    url: '/login/password',
    method: 'post',
    timeout,
    response: () => {
      const data = {
        account: '测试用户',
        avatar:
          'http://jkl.com/consult/production/20230805/6927144884936704.png',
        id: '201',
        mobile: '132****2222',
        refreshToken: 'eyJhbGciOiJIU',
        token: 'eyJhbGciOiJIUzI1NiIsIn'
      }

      // 返回模拟的数据
      return {
        code: 10000,
        message: '模拟登录成功',
        data
      }
    }
  },
  // 模块接口
  {
    url: '/patient/message/sys/list',
    method: 'GET',
    timeout: '500',
    response: () => {
      const data = []

      for (let i = 0; i < 10; i++) {
        data.push(
          Mock.mock({
            id: '@id',
            title: '@ctitle(5,10)',
            content: '@ctitle(10,20)',
            avatar: '@image("100x100")',
            createTime: '@datetime()',
            status: '@integer(0,1)',
            type: '@integer(1,3)'
          })
        )
      }

      // 返回模拟的数据
      return {
        code: 10000,
        message: '模拟数据成功',
        data
      }
    }
  }
]

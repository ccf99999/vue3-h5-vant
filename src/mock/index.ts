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
        avatar: 'http://jkl.com/consult/production/20230805/6927144884936704.png',
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

  {
    url: '/patient/myUser',
    method: 'GET',
    timeout,
    response: () => {
      const data = {
        account: '测试用户',

        avatar:
          'http://yjy-teach-oss.oss-cn-beijing.aliyuncs.com/consult/production/20230805/6927144884936704.png',
        collectionNumber: 0,
        consultationInfo: [],
        couponNumber: 0,
        id: '201',
        likeNumber: 692,
        mobile: '13211112222',
        orderInfo: {
          paidNumber: 0,
          receivedNumber: 1,
          shippedNumber: 0,
          finishedNumber: 0
        },
        score: 0
      }

      // 返回模拟的数据
      return {
        code: 10000,
        message: '模拟数据成功',
        data
      }
    }
  },
  //未读消息条数
  {
    url: '/patient/message/unRead/all',
    method: 'get',
    timeout,
    response: () => {
      // 返回模拟的数据
      return {
        code: 10000,
        message: '模拟登录成功',
        data: 66
      }
    }
  },
  //首页分页
  {
    url: '/patient/home/knowledge',
    method: 'get',
    timeout,
    response: () => {
      const rows = []

      // "commentNumber": 7,
      // "likeFlag": 1,
      // "creatorName": "王医生",
      // "creatorAvatar": "https://yjy-teach-oss.oss-cn-beijing.aliyuncs.com/consult/deafaultAvatar.jpg",
      // "creatorTitles": "副主任医师",
      // "creatorHospatalName": "中山大学肿瘤防治中心",
      // "creatorDep": "胃肠外科",
      // "hospatalGrade": "三级甲等",
      // "id": "23132143",
      // "content": "克服面试紧张的技巧　　\n\n    第一：客观看待紧张情绪\n　　很多考生一想到自己面试时可能会紧张，心里便充满了畏惧，认为这是自己的一大劣势。其实，从另一个角度看，紧张也正反映了考生对这场面试的重视，对这份工作的向往，这就是一个优点了。试想，如果一个考生在公务员面试如此严肃正式的场合，全程表现得很随意，考官反而会觉得考生根本就不在乎这个职位。因此，适度的紧张其实很正常，是一种正常反应，这是考官能够理解的，甚至是十分认同的。\n　　第二：真正的紧张源于自身能力不足\n　　有些考生，还没有进行学习备考，就整天担心自己紧张怎么办。这纯粹是一种盲目的担忧。连面试的基本情况都不了解，基本思路都没有，基本素材都没有，紧张是必然的。因为对于未知的事物，我们必然会心存担忧与恐惧;但是让我们去做自己擅长的事情，就能坦然面对。因此，考生先放下心里的这些担忧，把心思都投入到学习备考上来，实实在在提高自己的面试能力，做到胸有成竹，肚中有货。你若盛开，清风自来。因此，提升能力是王道。\n　　第三：克服紧张情绪的技巧\n　　1、多动口说话。考生要多在公共场合说话，在陌生人面前说话，打破心理障碍。\n　　2、多进行模拟练习。要模拟实际面试的场景，反复进行面试答题，让自己见多识广。\n　　3、做一些减压活动。在学习的过程中，可以抽出时间静下心来看看书，或者进行一场酣畅淋漓的运动，寻找自我，突破自我。\n　　4、淡化目标，享受过程。每个考生都希望自己能成功上岸，但是往往越是向往目标，越是患得患失，导致心态失衡。因此，把面试当成人生美好的经历，去享受它，发现它的乐趣。那么，功到自然成。\n　　5、善于进行心理调节。实际面试的时候，刚开始难免有点紧张，但是不能自乱阵脚，一定要让自己冷静下来，可以深呼吸，来调节一下自己的状态。不能自暴自弃，要相信自己，等进入状态后，紧张会自然消失。\n　　面试成功的技巧　　在面试时，你首先要沉着冷静，举止得体，思维清晰，语言表达有逻辑性，懂得商务礼仪。许多应聘者在招聘人员面前有胆怯心理，这是很不好的表现。你应该在招聘者面前表现出充分的自信。面试的过程其实也是一个心理较量的过程，你如果勇于展现自己的心理素质，一定能得到对方的欣赏。我曾经对一个胆怯的面试者说：“你为什么会怕我?其实，你的能力很好，完全不必胆怯。全世界人都是一样的人，只不过我比你早工作几年而已。”听了我的话，这位同学笑了，也不那么胆怯了，后来我们录取了他。后来他告诉我，如果不是我的话让他放松，他吓得一定不会通过面试的。",
      // "coverUrl": [
      //     "https://t7.baidu.com/it/u=1595072465,3644073269&fm=193&f=GIF",
      //     "https://t7.baidu.com/it/u=1595072465,3644073269&fm=193&f=GIF",
      //     "https://t7.baidu.com/it/u=1595072465,3644073269&fm=193&f=GIF"
      // ],
      // "creatorId": "1001",
      // "title": "克服面试紧张的技巧\n",
      // "topic": "运动与减肥",
      // "collectionNumber": "10"

      for (let i = 0; i < 5; i++) {
        rows.push(
          Mock.mock({
            commentNumber: '@integer(1,9)',
            likeFlag: '@integer(1,9)',
            creatorName: '@cname(2,3)',
            creatorAvatar: '@url',
            creatorTitles: '@cname(2,3)'

            // id: '@id',
            // title: '@ctitle(5,10)',
            // content: '@ctitle(10,20)',
            // avatar: '@image("100x100")',
            // createTime: '@datetime()',
            // status: '@integer(0,1)',
            // type: '@integer(1,3)'
          })
        )
      }

      // {
      //   account: '测试用户',
      //   avatar: 'http://jkl.com/consult/production/20230805/6927144884936704.png',
      //   id: '201',
      //   mobile: '132****2222',
      //   refreshToken: 'eyJhbGciOiJIU',
      //   token: 'eyJhbGciOiJIUzI1NiIsIn'
      // }

      // 返回模拟的数据
      return {
        code: 10000,
        message: '模拟登录成功'
        // data
      }
    }
  }
]

define({ "api": [
  {
    "type": "post",
    "url": "/api/account/login",
    "title": "用户登录",
    "name": "Login",
    "group": "Account",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "login",
            "description": "<p>账号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/account.py",
    "groupTitle": "Account"
  },
  {
    "type": "get",
    "url": "/api/account/login",
    "title": "判断登录状态",
    "name": "LoginStatus",
    "group": "Account",
    "version": "0.0.0",
    "filename": "../admin/frontend/account.py",
    "groupTitle": "Account"
  },
  {
    "type": "get",
    "url": "/api/account/profile",
    "title": "当前登录用户信息",
    "name": "LoginUserProfile",
    "group": "Account",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"name\": \"孙谷宇\",\n    \"role\": 1           # 角色 0:普通, 1:管理员, 2:运营管理员, 3:数据管理员, 4:财务管理员\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/account.py",
    "groupTitle": "Account"
  },
  {
    "type": "post",
    "url": "/api/account/logout",
    "title": "注销",
    "name": "Logout",
    "group": "Account",
    "description": "<p>用户注销</p>",
    "version": "0.0.0",
    "filename": "../admin/frontend/account.py",
    "groupTitle": "Account"
  },
  {
    "type": "get",
    "url": "/api/banners",
    "title": "banner页",
    "name": "banner_list",
    "group": "Banner",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "hide",
            "description": "<p>是否隐藏1:是, 0:否</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"id\": 12,\n    \"image\": \"http://dsadsadsa.png\",\n    \"link\": \"http://www.baidu.com\",     # 跳转地址\n    \"order_no\": 33,\n    \"hide\": true\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/banner.py",
    "groupTitle": "Banner"
  },
  {
    "type": "post",
    "url": "/api/banners",
    "title": "创建banner",
    "name": "create_banner",
    "group": "Banner",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "id",
            "description": "<p>id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "image",
            "description": "<p>图片地址</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "link",
            "description": "<p>跳转地址</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "[{\n    \"id\": 1,\n    \"image\": \"http://www.baidu.com\",\n    \"link\": \"http://www.baidu.com\",     # 跳转地址\n    \"order_no\": 33,\n    \"hide\": true\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/banner.py",
    "groupTitle": "Banner"
  },
  {
    "type": "delete",
    "url": "/api/banners/:id",
    "title": "删除banner",
    "name": "delete_banner",
    "group": "Banner",
    "version": "0.0.0",
    "filename": "../admin/frontend/banner.py",
    "groupTitle": "Banner"
  },
  {
    "type": "patch",
    "url": "/api/certifications/:id",
    "title": "认证审核",
    "name": "Certificate",
    "group": "Certification",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "bool",
            "optional": false,
            "field": "pass",
            "description": "<p>是否通过</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/certification.py",
    "groupTitle": "Certification"
  },
  {
    "type": "get",
    "url": "/api/certifications",
    "title": "认证申请",
    "name": "certificateList",
    "group": "Certification",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "status",
            "description": "<p>状态,0:待处理，1：通过， 2：拒绝</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "page",
            "description": "<p>第几页</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "per_page",
            "description": "<p>每页数量</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"id\": 100377,\n    \"name\": \"小明\",\n    \"mobile\": \"150679876523\",\n    \"created_time\": \"2016-12-23T12:23:33\", # 申请时间\n    \"company_name\": \"机构名称\",\n    \"position\": \"职位理财师\",\n    \"work_year\": 1,     # 工作年限(1:1~3年, 2:3~5年, 3:5~10年, 4:10年以上)\n    \"industry\": 3,      # 行业(1:银行, 2:信托, 3:资管, 4:保险, 5:证券, 6:基金, 7:P2P, 8:三方)\n    \"business_card_pic\": \"dsadsadsakdjlsak\"     # 名片\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/certification.py",
    "groupTitle": "Certification"
  },
  {
    "type": "get",
    "url": "/",
    "title": "错误码",
    "name": "ErrorCode",
    "group": "Constant",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "0",
            "description": "<p>成功</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "100001",
            "description": "<p>未知错误</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "100002",
            "description": "<p>参数错误</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "100003",
            "description": "<p>用户未登录</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "100004",
            "description": "<p>无权限访问</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "100005",
            "description": "<p>资源不存在</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "100006",
            "description": "<p>注册验证码短信发送太频繁</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "100007",
            "description": "<p>验证码错误</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "100008",
            "description": "<p>手机格式错误</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "100009",
            "description": "<p>身份证号不合法</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "100010",
            "description": "<p>非认证用户，无法访问</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "110001",
            "description": "<p>产品节点无法参与</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "120001",
            "description": "<p>产品无法购买</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "120002",
            "description": "<p>产品状态无法改变</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "130001",
            "description": "<p>预约额度超过产品剩余额度</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "130002",
            "description": "<p>最迟打款日期晚于产品的最迟打款日期</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "130003",
            "description": "<p>存在未完成订单</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "130004",
            "description": "<p>不是订单管理员</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "130005",
            "description": "<p>订单初始化失败</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "130006",
            "description": "<p>订单预约额度不正确</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "130007",
            "description": "<p>订单流程错误</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "130008",
            "description": "<p>分成金额不能大于剩余待打款金额</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "140001",
            "description": "<p>手机号已被注册</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "140002",
            "description": "<p>初始化账户失败</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "140003",
            "description": "<p>账号被冻结</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "140004",
            "description": "<p>登录密码错误</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "140005",
            "description": "<p>账号不存在</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "140006",
            "description": "<p>当前有待处理的认证审核</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "140007",
            "description": "<p>不是管理员</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "140008",
            "description": "<p>管理员无法退出机构</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "140009",
            "description": "<p>用户已加入机构</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "140010",
            "description": "<p>不能重复邀请</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "140011",
            "description": "<p>无法邀请管理员</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "140012",
            "description": "<p>无法邀请自己的旗下理财师</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "140013",
            "description": "<p>无法邀请其他机构的旗下理财师</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "140014",
            "description": "<p>邀请已取消</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "140015",
            "description": "<p>无法删除非在职人员</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../admin/apidoc.py",
    "groupTitle": "Constant"
  },
  {
    "type": "get",
    "url": "/",
    "title": "订单小进度类型",
    "name": "OrderSubType",
    "group": "Constant",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "101",
            "description": "<p>等待管理员审核</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "102",
            "description": "<p>管理员审核不通过</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "103",
            "description": "<p>等待麦策审核</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "104",
            "description": "<p>麦策审核不通过</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "105",
            "description": "<p>待申领合同</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "106",
            "description": "<p>待资料报单</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "109",
            "description": "<p>等待资料报单审核</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "110",
            "description": "<p>待重新资料报单</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "111",
            "description": "<p>待合同寄还</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "112",
            "description": "<p>等待麦策确认合同扫描件有效性</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "113",
            "description": "<p>已确认合同有效，等待寄还</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "114",
            "description": "<p>等待项目成立</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "117",
            "description": "<p>订单结束</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "119",
            "description": "<p>关闭</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../admin/apidoc.py",
    "groupTitle": "Constant"
  },
  {
    "type": "get",
    "url": "/",
    "title": "订单大进度类型",
    "name": "OrderType",
    "group": "Constant",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "1",
            "description": "<p>预约中</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "2",
            "description": "<p>合同申领</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "3",
            "description": "<p>资料报单</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "4",
            "description": "<p>合同寄还</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "5",
            "description": "<p>项目成立</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../admin/apidoc.py",
    "groupTitle": "Constant"
  },
  {
    "type": "get",
    "url": "/",
    "title": "产品状态",
    "name": "ProductStatus",
    "group": "Constant",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "0",
            "description": "<p>待观察</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "1",
            "description": "<p>观察中</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "2",
            "description": "<p>众筹中</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "3",
            "description": "<p>已完成</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "4",
            "description": "<p>募集结束</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "-1",
            "description": "<p>已关闭</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../admin/apidoc.py",
    "groupTitle": "Constant"
  },
  {
    "type": "get",
    "url": "/api/users/reserve_list",
    "title": "用户预约列表",
    "version": "0.0.0",
    "filename": "../admin/frontend/order.py",
    "group": "E__project_maice_purchasing_consortia_admin_admin_frontend_order_py",
    "groupTitle": "E__project_maice_purchasing_consortia_admin_admin_frontend_order_py",
    "name": "GetApiUsersReserve_list"
  },
  {
    "type": "patch",
    "url": "/api/events/:id",
    "title": "审核活动报名",
    "name": "CheckEvent",
    "group": "Event",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>状态 1:通过 -1:不通过</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/event.py",
    "groupTitle": "Event"
  },
  {
    "type": "get",
    "url": "/api/events",
    "title": "活动报名列表",
    "name": "EventList",
    "group": "Event",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "status",
            "description": "<p>状态0:待处理 1:通过 -1:不通过</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "product_id",
            "description": "<p>产品ID</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "page",
            "description": "<p>第几页</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "per_page",
            "description": "<p>每页数量</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"id\": 12,\n    \"product_id\": 33,\n    \"event_name\": \"XXX产品活动\",\n    \"name\": \"XXX\",\n    \"mobile\": \"321321312\",\n    \"register_mobile\": \"321321321312\",\n    \"status\": 1\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/event.py",
    "groupTitle": "Event"
  },
  {
    "type": "patch",
    "url": "/api/feedback/:id",
    "title": "反馈处理",
    "name": "feedback_handle",
    "group": "Feedback",
    "version": "0.0.0",
    "filename": "../admin/frontend/feedback.py",
    "groupTitle": "Feedback"
  },
  {
    "type": "get",
    "url": "/api/feedback",
    "title": "反馈列表",
    "name": "feedback_list",
    "group": "Feedback",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "status",
            "optional": true,
            "field": "name",
            "description": "<p>状态,0:待处理,1:已处理</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "page",
            "description": "<p>第几页</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "per_page",
            "description": "<p>每页数量</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"id\": 12,\n    \"name\": \"小明\",\n    \"mobile\": \"15062131212\",\n    \"resource_type\": 29,    # 关联类型, 0:无, 29:联合采购订单\n    \"resource_id\": \"898d0sa8dsa809dsa\",\n    \"content\": \"问题描述\",\n    \"status\": 0,\n    \"created_time\": \"2016-12-11T16:00:00\"\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/feedback.py",
    "groupTitle": "Feedback"
  },
  {
    "type": "get",
    "url": "/api/file/:fid",
    "title": "访问文件",
    "name": "AccessFile",
    "group": "File",
    "version": "1.0.0",
    "filename": "../admin/frontend/file.py",
    "groupTitle": "File"
  },
  {
    "type": "get",
    "url": "/api/file/token",
    "title": "获取OSS授权token",
    "name": "GetOssToken",
    "group": "File",
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"ec\": 0,\n    \"message\": \"Success\",\n    \"data\": {\n        \"token\": \"9ksadd9dsdsaf9a=s9\",\n        \"access_key_id: \"STS.16IIP1f43HeTD93kZV6a\",\n        \"access_key_secret\": \"aipzne684tZdwAE2jd3J8LSdPwqsu9ccl7bFjdr1\",\n        \"private_bucket_name\": \"purchasing-consortia-pri-test\",\n        \"public_bucket_name\": \"purchasing-consortia-pub-test\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../admin/frontend/file.py",
    "groupTitle": "File"
  },
  {
    "type": "post",
    "url": "/api/file",
    "title": "上传文件",
    "name": "UploadFile",
    "group": "File",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>文件名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "md5",
            "description": "<p>OSS上的文件的md5值</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "size",
            "description": "<p>文件大小</p>"
          },
          {
            "group": "Parameter",
            "type": "bool",
            "optional": false,
            "field": "is_pub",
            "defaultValue": "false",
            "description": "<p>是否公开访问</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "access_permission",
            "defaultValue": "1",
            "description": "<p>访问权限 1:仅自己, 2:仅自己的管理员, 3:自己和自己的管理员, 4:所有机构成员</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"ec\": 0,\n    \"message\": \"Success\",\n    \"data\": {\n        \"url\": \"http://dasjlkjlk21j3kjlkdsaj.png\",\n        \"id\": 33\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../admin/frontend/file.py",
    "groupTitle": "File"
  },
  {
    "type": "post",
    "url": "/api/orders",
    "title": "创建订单",
    "name": "CreateOrder",
    "group": "Order",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"user_id\": 100460,\n    \"product_id\": 334,\n    \"customer_name\": \"客户姓名\",\n    \"customer_no\": \"客户编号\",\n    \"customer_mobile\": \"1503213123\",    # 客户电话\n    \"precontract_amount\": 300,  # 额度\n    \"customer_id_card_no\": \"身份证号\"\n    \"pay_time\": \"2017-12-01\",   # 打款时间\n    \"attachment_id\": 12     # 相关文件ID\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/order.py",
    "groupTitle": "Order"
  },
  {
    "type": "post",
    "url": "/api/orders/:order_no/bonus",
    "title": "创建订单分红记录",
    "name": "CreateOrderBONUS",
    "group": "Order",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "amount",
            "description": "<p>金额</p>"
          },
          {
            "group": "Parameter",
            "type": "datetime",
            "optional": false,
            "field": "bonus_time",
            "description": "<p>赎回生效日期</p>"
          }
        ]
      }
    },
    "filename": "../admin/frontend/order.py",
    "groupTitle": "Order"
  },
  {
    "type": "post",
    "url": "/api/orders/:order_no/distributions",
    "title": "创建订单分配记录",
    "name": "CreateOrderDistribution",
    "group": "Order",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "amount",
            "description": "<p>金额</p>"
          },
          {
            "group": "Parameter",
            "type": "datetime",
            "optional": false,
            "field": "bonus_time",
            "description": "<p>赎回生效日期</p>"
          }
        ]
      }
    },
    "filename": "../admin/frontend/order.py",
    "groupTitle": "Order"
  },
  {
    "type": "post",
    "url": "/api/orders/:order_no/dividends",
    "title": "订单打款",
    "name": "CreateOrderDividends",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "actual_time",
            "description": "<p>实际打款日期</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"amount\": 1,\n    \"actual_time\": \"2017-12-1\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/order.py",
    "groupTitle": "Order"
  },
  {
    "type": "post",
    "url": "/api/orders/:order_no/redeem",
    "title": "创建订单赎回记录",
    "name": "CreateOrderRedeem",
    "group": "Order",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "amount",
            "description": "<p>金额（元）/份额（份）</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark",
            "description": "<p>备注</p>"
          },
          {
            "group": "Parameter",
            "type": "datetime",
            "optional": false,
            "field": "redemption_time",
            "description": "<p>赎回生效日期</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": true,
            "field": "redeem_value",
            "description": "<p>赎回日净值</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": true,
            "field": "fee",
            "description": "<p>手续费</p>"
          }
        ]
      }
    },
    "filename": "../admin/frontend/order.py",
    "groupTitle": "Order"
  },
  {
    "type": "post",
    "url": "/api/orders/:order_no/share_change",
    "title": "创建份额变更记录",
    "name": "CreateOrderShareChange",
    "group": "Order",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "amount",
            "description": "<p>金额（元）/份额（份）</p>"
          },
          {
            "group": "Parameter",
            "type": "datetime",
            "optional": false,
            "field": "update_time",
            "description": "<p>变更生效日期</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark",
            "description": "<p>备注</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "direction",
            "description": "<p>1:增加,-1减少</p>"
          }
        ]
      }
    },
    "filename": "../admin/frontend/order.py",
    "groupTitle": "Order"
  },
  {
    "type": "delete",
    "url": "/api/orders/:order_no",
    "title": "删除订单",
    "name": "DeleteOrder",
    "group": "Order",
    "version": "0.0.0",
    "filename": "../admin/frontend/order.py",
    "groupTitle": "Order"
  },
  {
    "type": "delete",
    "url": "/api/orders/:order_no/bonus/:id",
    "title": "删除订单分红记录",
    "name": "DeleteOrderBonus",
    "group": "Order",
    "version": "1.0.0",
    "filename": "../admin/frontend/order.py",
    "groupTitle": "Order"
  },
  {
    "type": "delete",
    "url": "/api/orders/:order_no/distributions/:id",
    "title": "删除订单分配记录",
    "name": "DeleteOrderDistribution",
    "group": "Order",
    "version": "1.0.0",
    "filename": "../admin/frontend/order.py",
    "groupTitle": "Order"
  },
  {
    "type": "delete",
    "url": "/api/orders/:order_no/dividends/:id",
    "title": "删除订单打款",
    "name": "DeleteOrderDividends",
    "group": "Order",
    "version": "0.0.0",
    "filename": "../admin/frontend/order.py",
    "groupTitle": "Order"
  },
  {
    "type": "delete",
    "url": "/api/orders/:order_no/redeem/:id",
    "title": "删除订单赎回记录",
    "name": "DeleteOrderRedeem",
    "group": "Order",
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "1.34    # 剩余份额",
          "type": "json"
        }
      ]
    },
    "filename": "../admin/frontend/order.py",
    "groupTitle": "Order"
  },
  {
    "type": "delete",
    "url": "/api/orders/:order_no/share_change/:id",
    "title": "删除份额变更记录",
    "name": "DeleteOrderShareChange",
    "group": "Order",
    "version": "1.0.0",
    "filename": "../admin/frontend/order.py",
    "groupTitle": "Order"
  },
  {
    "type": "patch",
    "url": "/api/orders/:order_no/finish",
    "title": "完成订单",
    "name": "FinishOrder",
    "group": "Order",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"customer_name\": \"客户姓名\",\n    \"customer_mobile\": \"1504342323\",\n    \"amount\": 300,  # 认购金额\n    \"pay_time\": \"2017-05-28\",    # 打款日期\n    \"customer_id_card_no\": \"身份证号\",\n    \"attachment_id\": 12     # 相关文件ID\n    \"buy_time\": \"2017-05-28T16:00:00\",  # 计息日\n    \"remark\": \"备注\",\n    \"prospective_earning\": 1.3, # 预期年化收益\n    \"buy_duration\": 3,\n    \"expire_time\": \"2017-05-28T16:00:00\"    # 到期时间\n    \"buy_value\": 1.33,  # 购买时净值\n    \"buy_share\": 13,    # 份额(万份)\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/order.py",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "/api/orders/:order_no/bonus",
    "title": "订单分红记录",
    "name": "OrderBonus",
    "group": "Order",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"id\": 1,\n    \"amount\": 13,   # 金额\n    \"bonus_time\": \"2017-01-01T17:00:00\",   # 分配时间\n    \"remark\": \"备注\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/order.py",
    "groupTitle": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "page",
            "description": "<p>第几页</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "per_page",
            "description": "<p>每页数量</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/orders/:order_no",
    "title": "订单详情",
    "name": "OrderDetails",
    "group": "Order",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"product_name\": \"产品名称\",\n    \"customer_name\": \"客户名称\",\n    \"customer_id_card_no\": \"客户证件号\",\n    \"customer_mobile\": \"客户手机号\",\n    \"pay_time\": \"2017-12-21\",   # 打款日期\n    \"amount\": 12,   # 认购金额\n    \"persistent_share\": 100,    # 存续份额\n    \"buy_share\": 100,       # 认购份额\n    \"prospective_earning\": 0.11,    # 预期年化收益\n    \"buy_duration\": 12, # 期限\n    \"start_date\": \"2017-11-11T17:00:00\",    # 成立日\n    \"buy_time\": \"2017-11-11T17:00:00\",    # 认购日\n    \"last_redemption_time\": \"2017-11-11T17:00:00\",    # 最后赎回日\n    \"expire_time\": \"2017-11-11T17:00:00\",    # 到期日\n    \"user_name\": \"理财师\",\n    \"remark\": \"备注\",\n    \"book_profit\": \"133\",   # 账面收益\n    \"currency\": 1,\n    \"distribution\": 999,    # 分配金额\n    \"book_profit_percent\": 0.12,    # 账面收益率\n    \"buy_value\": 1, # 认购日净值\n    \"last_redemption_value\": 1.33,  # 最后赎回净值\n    \"last_value_update_time\": \"2017-11-11T17:00:00\",    # 最新净值日\n    \"last_value\": 1.33,    # 最新净值\n    \"persistent_amount\": 933,    # 存续金额 / 万\n    \"bonus\": 933,    # 分红金额\n    \"survival\": true,   # 是否存续中\n    \"profit_type\": 1,\n    \"attachment\": {\n        \"id\": 1,\n        \"name\": \"xxx',\n        \"url\": 地址\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/order.py",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "/api/orders/:order_no/distributions",
    "title": "订单分配记录",
    "name": "OrderDistribution",
    "group": "Order",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"id\": 1,\n    \"amount\": 13,   # 金额 / 元\n    \"bonus_time\": \"2017-01-01T17:00:00\",   # 分配时间\n    \"finished\": true,   # 已分配\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/order.py",
    "groupTitle": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "page",
            "description": "<p>第几页</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "per_page",
            "description": "<p>每页数量</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/orders/:order_no/dividends",
    "title": "订单打款记录",
    "name": "OrderDividends",
    "group": "Order",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"id\": 1\n    \"amount\": 1,\n    \"actual_time\": \"2017-12-1\",\n    \"currency\": 1\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/order.py",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "/api/orders/:order_no/redeem",
    "title": "订单赎回记录",
    "name": "OrderRedeem",
    "group": "Order",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"id\": 1,\n    \"amount\": 13,   # 金额/元\n    \"redeem_value\": 1.4,    # 赎回时净值（浮动）\n    \"fee\": 13.31,   # 手续费\n    \"redemption_time\": \"2017-01-01T17:00:00\",   # 赎回生效日\n    \"remark\": \"备注\",\n    \"status\": 1,    # 状态1:等待，2：成功, 3:失败\n    \"market_value_change\": 1.33,    #市值变化\n    \"actual_profit\": 999,   # 实际收益\n    \"absolute_profit\": 999, # 绝对收益\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/order.py",
    "groupTitle": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "page",
            "description": "<p>第几页</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "per_page",
            "description": "<p>每页数量</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/orders/:order_no/share_change",
    "title": "订单份额变更记录",
    "name": "OrderShareChange",
    "group": "Order",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"id\": 1,\n    \"amount\": 13,   # 金额\n    \"update_time\": \"2017-01-01T17:00:00\",\n    \"remark\": \"备注\"\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/order.py",
    "groupTitle": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "page",
            "description": "<p>第几页</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "per_page",
            "description": "<p>每页数量</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/orders",
    "title": "订单列表",
    "name": "Orders",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "status",
            "description": "<p>状态1:预约中,2:已完成,3:已关闭</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "name",
            "description": "<p>产品名</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "page",
            "description": "<p>第几页</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "per_page",
            "description": "<p>每页数量</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"order_no\": \"201708123301\",\n    \"user\": {\n        \"id\": 100094,\n        \"name\": \"理财师A\"\n    },\n    \"product\": {\n        \"id\": 1000001,\n        \"name\": \"产品名称\"\n    },\n    \"currency\": 1,\n    \"profit_type\": 1,\n    \"customer_name\": \"客户名称\",\n    \"is_confirmed\": true,                     # 是否已完成\n    \"precontract_amount\": 300,          # 金额\n    \"pay_time\": \"2017-03-01\",  # 打款时间\n    \"buy_time\": \"2017-03-01\",   # 计息确认日\n    \"closed\": true,     # 是否已关闭\n    \"persistent_share\": 100,    # 存续份额\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/order.py",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "/api/orders/:order_no/distributions/:id",
    "title": "上次订单分配记录",
    "name": "PriorOrderDistribution",
    "group": "Order",
    "success": {
      "examples": [
        {
          "title": "Success-Response: (返回None就是没有)",
          "content": "{\n    \"amount\": 13,   # 金额/元\n    \"bonus_time\": \"2017-01-01T17:00:00\",   # 赎回生效日\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/order.py",
    "groupTitle": "Order"
  },
  {
    "type": "post",
    "url": "/api/orders/subscribe",
    "title": "预约订单",
    "name": "SubscribeOrder",
    "group": "Order",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"user_id\": 100460,\n    \"product_id\": 334,\n    \"customer_name\": \"客户姓名\",\n    \"customer_no\": \"客户编号\"\n    \"precontract_amount\": 300,  # 额度\n    \"pay_time\": \"2015-12-23\"    # 打款日期\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/order.py",
    "groupTitle": "Order"
  },
  {
    "type": "patch",
    "url": "/api/orders/:order_no",
    "title": "修改订单",
    "name": "UpdateOrder",
    "group": "Order",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"customer_name\": \"客户姓名\",\n    \"customer_mobile\": \"1504342323\",\n    \"amount\": 300,  # 认购金额\n    \"pay_time\": \"2017-05-28\",    # 打款日期\n    \"customer_id_card_no\": \"身份证号\",\n    \"attachment_id\": 12     # 相关文件ID\n    \"buy_time\": \"2017-05-28T16:00:00\",  # 计息日\n    \"remark\": \"备注\",\n    \"prospective_earning\": 1.3, # 预期年化收益\n    \"buy_duration\": 3,\n    \"expire_time\": \"2017-05-28T16:00:00\"    # 到期时间\n    \"buy_value\": 1.33,  # 购买时净值\n    \"buy_share\": 13,    # 份额(万份)\n    \"closed\": true,     # 是否关闭\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/order.py",
    "groupTitle": "Order"
  },
  {
    "type": "put",
    "url": "/api/orders/:order_no/bonus/:id",
    "title": "更新订单分红记录",
    "name": "UpdateOrderBonus",
    "group": "Order",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "amount",
            "description": "<p>金额</p>"
          },
          {
            "group": "Parameter",
            "type": "datetime",
            "optional": false,
            "field": "bonus_time",
            "description": "<p>分红日期</p>"
          }
        ]
      }
    },
    "filename": "../admin/frontend/order.py",
    "groupTitle": "Order"
  },
  {
    "type": "put",
    "url": "/api/orders/:order_no/distributions/:id",
    "title": "更新订单分配记录",
    "name": "UpdateOrderDistribution",
    "group": "Order",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "amount",
            "description": "<p>金额</p>"
          },
          {
            "group": "Parameter",
            "type": "datetime",
            "optional": false,
            "field": "bonus_time",
            "description": "<p>赎回生效日期</p>"
          }
        ]
      }
    },
    "filename": "../admin/frontend/order.py",
    "groupTitle": "Order"
  },
  {
    "type": "put",
    "url": "/api/orders/:order_no/dividends/:id",
    "title": "修改订单打款",
    "name": "UpdateOrderDividends",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "actual_time",
            "description": "<p>实际打款日期</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"amount\": 1,\n    \"actual_time\": \"2017-12-1\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/order.py",
    "groupTitle": "Order"
  },
  {
    "type": "put",
    "url": "/api/orders/:order_no/redeem/:id",
    "title": "更新订单赎回记录",
    "name": "UpdateOrderRedeem",
    "group": "Order",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "amount",
            "description": "<p>金额（元）/份额（份）</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark",
            "description": "<p>备注</p>"
          },
          {
            "group": "Parameter",
            "type": "datetime",
            "optional": false,
            "field": "redemption_time",
            "description": "<p>赎回生效日期</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": true,
            "field": "redeem_value",
            "description": "<p>赎回日净值</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": true,
            "field": "fee",
            "description": "<p>手续费</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "1.34    # 剩余份额",
          "type": "json"
        }
      ]
    },
    "filename": "../admin/frontend/order.py",
    "groupTitle": "Order"
  },
  {
    "type": "put",
    "url": "/api/orders/:order_no/share_change/:id",
    "title": "更新份额变更记录",
    "name": "UpdateOrderShareChange",
    "group": "Order",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "amount",
            "description": "<p>金额（元）/份额（份）</p>"
          },
          {
            "group": "Parameter",
            "type": "datetime",
            "optional": false,
            "field": "update_time",
            "description": "<p>变更生效日期</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark",
            "description": "<p>备注</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "direction",
            "description": "<p>1:增加,-1减少</p>"
          }
        ]
      }
    },
    "filename": "../admin/frontend/order.py",
    "groupTitle": "Order"
  },
  {
    "type": "post",
    "url": "/api/products",
    "title": "创建产品",
    "name": "CreateProduct",
    "group": "Product",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"name\": \"产品A\"，\n    \"dim_name\": \"麦策产品A\",    # 未登录用户看到的产品名\n    \"status\": 1,    # 产品状态 0: 待上架 ，1：筹备中,2:众筹中,3:已完成, 4:募集结束\n    \"profit_type\": 1,   # 产品类型 0：固定， 1：浮动，2：定期\n    \"minimum_size\": 12,     # 最小募集规模/万\n    \"maximum_size\": 33,     # 最大募集规模/万\n    \"minimum_subscription_size\": 10,    # 起够金额\n    \"last_pay_time\": \"2017-12-3\",   # 最迟打款时间 日期或时间格式字符串都行\n    \"strategy\": {\n        \"value\": \"101010\",\n        \"text\": \"\"\n    },\n    \"fund_manager\": \"管理人\",\n    \"start_date\": \"2017-12-16T16:00:00\",    # 产品成立日\n    \"end_date\": \"2017-12-16T16:00:00\",    # 产品结束日\n    \"open_date\": \"2017-12-16\":     # 首次开放日\n    \"dividend_type\": 1, # 分红方式\n    \"close_time\": \"封闭期\",\n    \"other_time_point\": \"其他时间节点\",\n    \"collect_account_name\": \"募集账户名\",\n    \"collect_account\": \"募集账号\",\n    \"bank_name\": \"开户行\",\n    \"remit_remark\": \"打款备注\",\n    \"invest_info\": \"投资方向\",\n    \"risk_info\": \"风控措施\",\n    \"fee_info\": \"产品费用\",\n    \"fee_sale\": \"销售费用\",\n    \"max_fee_sale\": \"最高销售费用\",\n    \"currency\": 1,      # 1:人民币, 2:美元\n    \"contract_file_id\": 33,    # 合同文件\n    \"images\": [\"http://address1\", \"http://address2\"],   # 配图\n    \"relevant_files\": [33, 12], # 相关文件\n    \"remark\": \"备注\",\n    \"hide\": true,\n    \"top\": true,\n    \"profit_interval\": [{       # 收益区间\n        \"condition_ceiling\": 133,   # 金额上限\n        \"condition_floor\": 21,      # 金额下线\n        \"prospective_earning\": 0.02 # 预期年化收益\n        \"duration\": 23,             # 期限\n    }],\n    \"distribution\": [     # 收益分配时间\n        \"2017-12-16T16:00:00\"\n    ],\n    \"estimated_dividends_time_description\": \"预计打款时间描述\",\n    \"increment_size\": 3,        # 递增金额\n    \"period\": 3,                # 开放周期/月\n    \"advanced_pay_time\": 4,     # 提前打款时间/天\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/product.py",
    "groupTitle": "Product"
  },
  {
    "type": "post",
    "url": "/api/products/:pid/news",
    "title": "创建产品动态/创建活动",
    "name": "CreateProductNews",
    "group": "Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>动态内容</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "allowedValues": [
              "1",
              "2"
            ],
            "optional": true,
            "field": "type",
            "defaultValue": "1",
            "description": "<p>动态类型 1: 普通, 2: 活动</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": true,
            "field": "deadline",
            "description": "<p>开放截止日期</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/product.py",
    "groupTitle": "Product"
  },
  {
    "type": "post",
    "url": "/api/products/:pid/values",
    "title": "创建产品净值",
    "name": "CreateProductValues",
    "group": "Product",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "total_value",
            "description": "<p>累计净值</p>"
          },
          {
            "group": "Parameter",
            "type": "datetime",
            "optional": false,
            "field": "update_time",
            "description": "<p>更新时间</p>"
          }
        ]
      }
    },
    "filename": "../admin/frontend/product.py",
    "groupTitle": "Product"
  },
  {
    "type": "delete",
    "url": "/api/products/news/:id",
    "title": "删除产品动态",
    "name": "DeleteProductNews",
    "group": "Product",
    "version": "0.0.0",
    "filename": "../admin/frontend/product.py",
    "groupTitle": "Product"
  },
  {
    "type": "get",
    "url": "/api/products/:pid",
    "title": "产品详情",
    "name": "ProductDetail",
    "group": "Product",
    "version": "0.0.0",
    "filename": "../admin/frontend/product.py",
    "groupTitle": "Product",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"id\": 1,\n    \"name\": \"产品名称\"\n    \"profit_type\": 1,       # 收益类型 0：固定， 1：浮动, 2: 开放期\n    \"status\": 1,            # 产品状态 0: 待上架 ，1:筹备中,2:众筹中,3:已完成,-1:项目失败\n    \"minimum_size\": 12,     # 最小募集规模/万\n    \"maximum_size\": 33,     # 最大募集规模/万\n    \"current_precontract_size\": 12, # 当前预约额度/万\n    \"last_pay_time\": \"2017-12-16T16:00:00\",   # 最迟打款时间\n    \"minimum_subscription_size\": 10,    # 起够金额\n    \"strategy\": {\n        \"value\": \"101001\",\n        \"text\": \"市场中性\"\n    },\n    \"fund_manager\": \"管理人\",\n    \"start_date\": \"2017-12-16T16:00:00\",    # 产品成立日\n    \"end_date\": \"2017-12-16T16:00:00\",    # 产品结束日\n    \"open_date\": \"2017-12-16T16:00:00\",\t\t# 产品开放日\n    \"open_date_description\": \"产品开放日描述\",\n    \"dividend_type\": 1, # 分红方式: 1份额2金额\n    \"close_time\": \"封闭期\",\n    \"other_time_point\": \"其他时间节点\",\n    \"collect_account_name\": \"募集账户名\",\n    \"collect_account\": \"募集账号\",\n    \"bank_name\": \"开户行\",\n    \"remit_remark\": \"打款备注\",\n    \"invest_info\": \"投资方向\",\n    \"risk_info\": \"风控措施\",\n    \"fee_info\": \"产品费用\",\n    \"fee_sale\": \"销售费用\",\n    \"max_fee_sale\": \"最高销售费用\",\n    \"currency\": 1,      # 1:人民币, 2:美元\n    \"estimated_dividends_time_description\": \"预计打款时间描述\",\n    \"dividends\": [{\n        \"condition_ceiling\": 133,   # 金额上限\n        \"condition_floor\": 21,      # 金额下线\n        \"dividends_percentage\": 3,  # 分成比例\n    }],\n    \"contract_file\": \"/api/file/3\",    # 合同文件\n    \"images\": [\"http://address1\", \"http://address2\"],   # 配图\n    \"tags\": \"tag1,tag2\",    # 标签\n    \"relevant_files\": [{\n        \"name\": \"相关文件1\",\n        \"url\": \"/api/file/3\"\n    }]\n    \"remark\": \"备注\",\n    \"max_prospective_earning\": 0.334,   # 最高预期年化收益\n    \"surplus_time\": 2344444,    # 剩余时间/sec\n    \"surplus_size\": 23,         # 剩余额度/万\n    \"followed\": false,          # 是否关注\n    \"repayment_source\": \"还款来源\",\n    \"hide\": true,       # 是否隐藏\n    \"increment_size\": 3,        # 递增金额\n    \"duration\": \"3 - 18 个月\",    # 期限\n    \"profit_interval\": [{       # 收益区间\n        \"condition_ceiling\": 133,   # 金额上限\n        \"condition_floor\": 21,      # 金额下线\n        \"prospective_earning\": 0.02 # 预期年化收益\n        \"duration\": 23,             # 期限\n    }],\n    \"major_timeline\": [             # 产品流程\n          {\n            \"cnt\": 0,               # 子流程数量\n            \"name\": \"项目完成\",     # 进度名称\n            \"nodes\": [],            # 子流程\n            \"status\": 0             # 进度状态 0:待进行,1:进行中,2:已结束,3:失败\n          },\n          {\n            \"cnt\": 0,\n            \"name\": \"开始采购\",\n            \"nodes\": [],\n            \"status\": 0\n          },\n          {\n            \"cnt\": 0,\n            \"name\": \"尽调研究\",\n            \"nodes\": [],\n            \"status\": 0\n          },\n          {\n            \"cnt\": 0,\n            \"name\": \"项目录入\",\n            \"nodes\": [\n              {\n                \"content\": \"gCBO8i4aj3fk\",      # 进度内容\n                \"created_time\": \"2017-03-22T17:08:20\",\n                \"id\": 2,\n                \"type\": 1,              # 节点类型, 1:普通, 2:可参与\n                \"participation_status\": 0       # 用户参与状态, 0:待审核，1:审核通过, 2:未参与\n                \"status\": 0             # 进度状态 0:待进行,1:进行中,2:已结束,3:失败\n              }\n            ],\n            \"status\": 1,\n            \"time\": \"2017-03-22T17:08:20\"       # 时间\n          }\n    ]\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/products/:pid/news",
    "title": "产品动态",
    "name": "ProductNews",
    "group": "Product",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"id\": 122,\n    \"content\": \"动态内容\"\n    \"created_time\": \"2017-12-16T16:00:00\",\n    \"type\": 1\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/product.py",
    "groupTitle": "Product"
  },
  {
    "type": "get",
    "url": "/api/products/:product_id/profit_intervals",
    "title": "产品收益区间",
    "name": "ProductProfitIntervals",
    "group": "Product",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"condition_ceiling\": 133,   # 金额上限\n    \"condition_floor\": 21,      # 金额下线\n    \"prospective_earning\": 0.02 # 预期年化收益\n    \"buy_duration\": 23,             # 期限\n    \"expire_time\": \"2017-12-16T16:00:00\",   # 过期时间\n    \"description\": \"收益描述\"\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/product.py",
    "groupTitle": "Product"
  },
  {
    "type": "get",
    "url": "/api/products/strategies",
    "title": "产品策略",
    "name": "ProductStrategies",
    "group": "Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "int",
            "description": "<p>type 1:浮动,2:固定</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"value\": \"101011\",\n    \"text\": \"主观多空\"\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/product.py",
    "groupTitle": "Product"
  },
  {
    "type": "get",
    "url": "/api/products/:pid/values",
    "title": "产品净值列表",
    "name": "ProductValues",
    "group": "Product",
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"id\": 113,\n    \"update_time\": \"2017-12-16T16:00:00\",\n    \"total_value\": 1.3,        # 净值\n    \"increase\": 0.13,       # 涨幅\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../admin/frontend/product.py",
    "groupTitle": "Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "page",
            "description": "<p>第几页</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "per_page",
            "description": "<p>每页数量</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/products/:pid/value_graph",
    "title": "产品净值图",
    "name": "ProductValuesGraph",
    "group": "Product",
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"product\": [{\n        \"update_time\": \"2017-12-16T16:00:00\"\n        \"total_value\": 1.34\n    }],\n    \"CSI300\": [{    # 沪深300\n        \"update_time\": \"2017-12-16T16:00:00\"\n        \"total_value\": 1.34\n    }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../admin/frontend/product.py",
    "groupTitle": "Product"
  },
  {
    "type": "get",
    "url": "/api/products",
    "title": "产品列表",
    "name": "Products",
    "group": "Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "name",
            "description": "<p>产品名称</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "fuzzy_match",
            "defaultValue": "1",
            "description": "<p>是否启用模糊匹配</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "page",
            "description": "<p>第几页</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "per_page",
            "description": "<p>每页数量</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"id\": 122,\n    \"name\": \"产品名称\"\n    \"status\": 1,            # 产品状态 0: 待上架 ，1：筹备中,2:众筹中,3:已完成, 4:募集结束, -1:关闭\n    \"minimum_size\": 12,     # 最小募集规模/万\n    \"current_precontract_size\": 12, # 当前募集额度/万\n    \"surplus_size\": 333,    # 剩余募集规模\n    \"top\": true\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/product.py",
    "groupTitle": "Product"
  },
  {
    "type": "put",
    "url": "/api/products/:pid",
    "title": "更新产品",
    "name": "UpdateProduct",
    "group": "Product",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"name\": \"产品A\"，\n    \"dim_name\": \"麦策产品A\",    # 未登录用户看到的产品名\n    \"status\": 1,    # 产品状态 0: 待上架 ，1：筹备中,2:众筹中,3:已完成,4:募集结束\n    \"profit_type\": 1,   # 收益类型 0：固定， 1：浮动\n    \"minimum_size\": 12,     # 最小募集规模/万\n    \"maximum_size\": 33,     # 最大募集规模/万\n    \"minimum_subscription_size\": 10,    # 起够金额\n    \"last_pay_time\": \"2017-12-3\",   # 最迟打款日期\n    \"strategy\": \"产品策略\",\n    \"fund_manager\": \"管理人\",\n    \"start_date\": \"2017-12-16T16:00:00\",    # 产品成立日\n    \"end_date\": \"2017-12-16T16:00:00\",    # 产品结束日\n    \"open_date\": \"产品开放日\":     # 产品开放日\n    \"dividend_type\": \"分红方式\"\n    \"close_time\": \"封闭期\",\n    \"other_time_point\": \"其他时间节点\",\n    \"collect_account_name\": \"募集账户名\",\n    \"collect_account\": \"募集账号\",\n    \"bank_name\": \"开户行\",\n    \"remit_remark\": \"打款备注\",\n    \"invest_info\": \"投资方向\",\n    \"risk_info\": \"风控措施\",\n    \"fee_info\": \"产品费用\",\n    \"fee_sale\": \"销售费用\",\n    \"max_fee_sale\": \"最高销售费用\",\n    \"currency\": 1,      # 1:人民币, 2:美元\n    \"contract_file_id\": 33,    # 合同文件\n    \"images\": [\"http://address1\", \"http://address2\"],   # 配图\n    \"relevant_files\": [33, 12], # 相关文件\n    \"remark\": \"备注\",\n    \"hide\": true,   # 隐藏\n    \"top\": true,\n    \"profit_interval\": [{       # 收益区间\n        \"condition_ceiling\": 133,   # 金额上限\n        \"condition_floor\": 21,      # 金额下线\n        \"prospective_earning\": 0.02 # 预期年化收益\n        \"buy_duration\": 23,             # 期限\n    }],\n    \"dividends\": [{     # 分成比例区间\n        \"condition_ceiling\": 133,   # 金额上限\n        \"condition_floor\": 21,      # 金额下线\n        \"dividends_percentage\": 3,  # 分成比例\n    }],\n    \"estimated_dividends_time_description\": \"预计打款时间描述\",\n    \"increment_size\": 3,        # 递增金额\n    \"period\": 3,                # 开放周期/月\n    \"advanced_pay_time\": 4,     # 提前打款时间/天\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/product.py",
    "groupTitle": "Product"
  },
  {
    "type": "patch",
    "url": "/api/products/news/:id",
    "title": "更新产品动态",
    "name": "UpdateProductNews",
    "group": "Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>动态内容</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/product.py",
    "groupTitle": "Product"
  },
  {
    "type": "delete",
    "url": "/api/products/:pid/values/:id",
    "title": "删除产品净值",
    "name": "deleteProductValues",
    "group": "Product",
    "version": "1.0.0",
    "filename": "../admin/frontend/product.py",
    "groupTitle": "Product"
  },
  {
    "type": "put",
    "url": "/api/products/:pid/values/:id",
    "title": "更新产品净值",
    "name": "updateProductValues",
    "group": "Product",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "total_value",
            "description": "<p>累计净值</p>"
          },
          {
            "group": "Parameter",
            "type": "datetime",
            "optional": false,
            "field": "update_time",
            "description": "<p>更新时间</p>"
          }
        ]
      }
    },
    "filename": "../admin/frontend/product.py",
    "groupTitle": "Product"
  },
  {
    "type": "post",
    "url": "/api/sms",
    "title": "发送短信",
    "name": "SendSms",
    "group": "Sms",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "type",
            "description": "<p>类型,1:推送净值,2:推送产品,3:推送活动,4:收益分配</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "product_id",
            "description": "<p>产品ID</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "event_id",
            "description": "<p>活动ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "event_name",
            "description": "<p>活动名称</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "date",
            "description": "<p>日期</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "product_value",
            "description": "<p>产品净值</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "manager",
            "description": "<p>管理人</p>"
          }
        ]
      }
    },
    "filename": "../admin/frontend/sms.py",
    "groupTitle": "Sms"
  },
  {
    "type": "get",
    "url": "/",
    "title": "非分页返回的结构",
    "name": "NormalStructure",
    "group": "Structure",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"data\": {},\n    \"ec\": 0,\n    \"msg\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/apidoc.py",
    "groupTitle": "Structure"
  },
  {
    "type": "get",
    "url": "/",
    "title": "分页返回的结构",
    "name": "PageStructure",
    "group": "Structure",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"data\": {\n        \"has_next\": false,\n        \"has_prev\": false,\n        \"items\": [],\n        \"page\": 1,\n        \"total\": 100\n    },\n    \"ec\": 0,\n    \"msg\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/apidoc.py",
    "groupTitle": "Structure"
  },
  {
    "type": "post",
    "url": "/api/users/:user_id/freeze",
    "title": "冻结/解冻账号",
    "name": "FreezeUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "bool",
            "optional": false,
            "field": "freeze",
            "description": "<p>是否冻结</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/user.py",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/users",
    "title": "用户列表",
    "name": "UserList",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "name",
            "description": "<p>用户姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "admin_id",
            "description": "<p>管理员ID</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "tag",
            "defaultValue": "2",
            "description": "<p>用户标签 1:内部用户,2:外部用户</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "page",
            "description": "<p>第几页</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "per_page",
            "description": "<p>每页数量</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求示例：旗下理财师",
          "content": "/api/users?admin_id=100342",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"user_id\": 100377,\n    \"name\": \"小明\",\n    \"mobile\": \"150679876523\",\n    \"role\": 1,      # 角色, 1:游客, 2:旗下理财师, 3:管理员\n    \"frozen\": true      # 是否已被冻结\n    \"join_time\": \"2016-12-23T12:23:33\", # 加入时间\n    \"certification_info\": {     # 认证信息\n        \"company_name\": \"机构名称\",\n        \"position\": \"职位理财师\",\n        \"work_year\": 1,     # 工作年限(1:1~3年, 2:3~5年, 3:5~10年, 4:10年以上)\n        \"industry\": 3,      # 行业(1:银行, 2:信托, 3:资管, 4:保险, 5:证券, 6:基金, 7:P2P, 8:三方)\n    },\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/user.py",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/users/:user_id",
    "title": "用户详情",
    "name": "UserProfile",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>用户姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "page",
            "description": "<p>第几页</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "per_page",
            "description": "<p>每页数量</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"user_id\": 100319,\n    \"name\": \"小明\",\n    \"mobile\": \"150432423\",\n    \"created_time\": \"2015-12-22\",   # 注册时间\n    \"role\": 1,      # 角色, 1:游客, 2:旗下理财师, 3:管理员\n    \"certification_info\": {     # 认证信息\n        \"company_name\": \"机构名称\",\n        \"position\": \"职位理财师\",\n        \"work_year\": 1,     # 工作年限(1:1~3年, 2:3~5年, 3:5~10年, 4:10年以上)\n        \"industry\": 3,      # 行业(1:银行, 2:信托, 3:资管, 4:保险, 5:证券, 6:基金, 7:P2P, 8:三方)\n    },\n    \"personal_statistic\": {     # 个人配置统计\n        \"finished_order_count\": 12, # 累计成交订单\n        \"customer_count\": 3,    # 累计客户\n        \"income_rmb\": 333.33,       # 累计分成人民币\n        \"income_dollar\": 333.33,       # 累计分成美元\n        \"total_invest_rmb\": 33, # 累计配置人民币\n        \"total_invest_dollar\": 999, # 累计配置美元\n        \"last_order_time\": \"2016-12-23T12:23:33\"\n    },\n    \"org_statistic\": {          # 机构配置统计\n        \"finished_order_count\": 12, # 累计成交订单\n        \"customer_count\": 3,    # 累计客户\n        \"income_rmb\": 333.33,       # 累计分成人民币\n        \"income_dollar\": 333.33,       # 累计分成美元\n        \"total_invest_rmb\": 33, # 累计配置人民币\n        \"total_invest_dollar\": 999, # 累计配置美元\n        \"last_order_time\": \"2016-12-23T12:23:33\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/user.py",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/users/statistic",
    "title": "用户统计",
    "name": "UserStats",
    "group": "User",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"internal\": 12, # 内部用户\n    \"external\": 23, # 外部用户\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/user.py",
    "groupTitle": "User"
  }
] });

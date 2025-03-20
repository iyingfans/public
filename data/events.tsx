// prettier-ignore

// 日程字段解释，括号请使用英文半角字符
// year: 2025, // 今年的年份
// week: 9, // 今年的第几周
// events: [ // 每周的日程，包含7个子对象，日期从新到旧递减排列
//     {
//         date: "2025-03-02 14:00+08:00", // 这周这天的日期和开播时间，不播时的日期要写，时间可以随便写
//         type: "offline",
//         // 直播类型：chat: 唠嗑, go: 下棋, explain: 讲棋, game: 游戏, watch: 观影, rest: 休息, radio: 电台, collab: 联动, offline: 线下活动
//         title: "新加坡南洋理工校园行", // 直播标题
//         cancelled: false, // 今天的直播是否取消
//         bilibili_url: "1039571832994267141" // 预告了今日直播的B站的动态地址的数字串
//     },
//     { date: "2025-03-01 19:00+08:00", type: "rest", title: "", cancelled: false, bilibili_url: "" }
//     // 其他5天的格式同上
// ]

// 日程安排
export const events = [
    {
        year: 2025, week: 9, events: [
            { date: "2025-03-02 14:00+08:00", type: "offline", title: "新加坡南洋理工大学(NUS)校园行", cancelled: false, bilibili_url: "1039571832994267141" },
            { date: "2025-03-01 19:00+08:00", type: "rest", title: "", cancelled: false, bilibili_url: "" },
            { date: "2025-02-28 17:00+08:00", type: "offline", title: "新加坡国立大学(NUS)校园行", cancelled: false, bilibili_url: "1038665393079582740" },
            { date: "2025-02-27 19:00+08:00", type: "rest", title: "", cancelled: false, bilibili_url: "" },
            { date: "2025-02-26 19:00+08:00", type: "rest", title: "", cancelled: false, bilibili_url: "" },
            { date: "2025-02-25 19:00+08:00", type: "rest", title: "", cancelled: false, bilibili_url: "" },
            { date: "2025-02-24 19:00+08:00", type: "chat", title: "梦百合拍摄", cancelled: false, bilibili_url: "" }
        ]
    },
    {
        year: 2025, week: 8, events: [
            { date: "2025-02-23 19:00+08:00", type: "together", title: "姐妹欢乐斗地主", cancelled: false, bilibili_url: "" },
            { date: "2025-02-22 19:00+08:00", type: "rest", title: "", cancelled: false, bilibili_url: "" },
            { date: "2025-02-21 13:00+08:00", type: "explain", title: "农心杯", cancelled: false, bilibili_url: "" },
            { date: "2025-02-20 13:00+08:00", type: "explain", title: "农心杯", cancelled: false, bilibili_url: "" },
            { date: "2025-02-19 19:00+08:00", type: "rest", title: "", cancelled: false, bilibili_url: "" },
            { date: "2025-02-18 19:00+08:00", type: "rest", title: "", cancelled: false, bilibili_url: "" },
            { date: "2025-02-17 19:00+08:00", type: "rest", title: "", cancelled: false, bilibili_url: "" }
        ]
    }
]

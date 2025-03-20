import type { eventTypeMap } from '@/data/maps'

export type EventType = keyof typeof eventTypeMap

export type EventItem = {
  date: string
  type: EventType
  title: string
  rec?: string
  cancelled?: boolean
  reason?: string
  fans_rec?: boolean
}

export type WeekItem = {
  year: number
  week: number
  bilibili_url?: string
  events: EventItem[]
}

// prettier-ignore
export const events: WeekItem[] = [
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

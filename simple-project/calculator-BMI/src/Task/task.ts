export interface Data {
  id: number,
  title: string
  done: boolean
}

export  const initialTasks : Data[] = [
  {
    id: 0,
    title: "Ngô Văn Quốc",
    done: true
  },
  {
    id: 1,
    title: "Võ Thị Thuỳ Dương",
    done: false
  },
  {
    id: 2,
    title: "Võ Thị Thuỳ Kim",
    done: false
  },
]

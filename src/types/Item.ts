export type TodoStatus = 'done' | 'todo'

export type Item = {
  task: string // uniq key
  status: TodoStatus
}

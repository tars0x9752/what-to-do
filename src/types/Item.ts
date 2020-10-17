export type TodoStatus = 'done' | 'wip' | 'todo'

export type Item = {
  task: string // uniq key
  status: TodoStatus
}

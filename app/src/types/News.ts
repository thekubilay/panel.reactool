export interface News {
  id: number | null,
  type: string | null,
  content: string | null,
  seen: boolean
  created_at: Date |null,
}

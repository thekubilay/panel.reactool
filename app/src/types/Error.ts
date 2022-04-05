export interface Error {
  id?: number | null,
  method: string | null,
  endpoint: string | null,
  status: number | null,
  problem: string | null,
  created_at: Date | null,
}

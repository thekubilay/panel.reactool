export interface ApiToken {
  id: number | null,
  project: number | null,
  permanent: boolean,
  name: string | null,
  start_date: Date | null,
  end_date: Date | null,
}

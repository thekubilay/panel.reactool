export interface Document {
  id: number | null,
  project: number | null,
  document_folder: number | null,
  name: string | null,
  file: string | null,
  type: string | null,
  size: number | null,
}

export interface DocumentFolder {
  id: number | null,
  project?: number | null,
  name: string | null,
  documents?: Document[],
}

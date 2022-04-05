export interface TutorialImage {
  tutorials?: number|null,
  id?: number|null,
  order_id: number,
  title: string,
  sub_title: string|null,
  image: string|null,
}

export interface Tutorial {
  id?: number|null,
  order_id: number,
  title: string,
  sub_title: string|null,
  pdf: string,
  video: string|null,
  video_thumbnail: string|null,
  size: string|null,
  active: boolean,
  tutorial_images: TutorialImage[]
}

export interface ImageFields {
  'file.url': string
}
export interface Image {
  fields: ImageFields
  title: string
}
export interface Fields {
  heroImage: Image
  title: string
  description: string
  tags: string[]
}
export interface Post {
  fields: Fields
}

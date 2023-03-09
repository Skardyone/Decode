import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'playlist',
  title: 'Playlist',
  type: 'document',
  fields: [
    defineField({
      name: 'nazev',
      title: 'Nazev',
      type: 'string',
    }),
    defineField({
      name: 'song',
      title: 'Song',
      type: 'file',
    }),
  ],
})

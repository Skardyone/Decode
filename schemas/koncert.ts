import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'koncert',
  title: 'Koncert',
  type: 'document',
  fields: [
    defineField({
      name: 'nazev',
      title: 'Název akce',
      type: 'string',
      description: "např. Chodské slavnosti",
      validation: Rule => Rule.required(),
    }),
    defineField({
        name: 'cas',
        title: 'Čas hraní',
        type: 'datetime',
        options: {
            dateFormat: "YYYY-MM-DD",
            timeFormat: "HH:mm",
        },
        validation: Rule => Rule.required(),
      }),
    defineField({
      name: 'misto',
      title: 'Místo',
      type: 'string',
      description:"město",
      validation: Rule => Rule.required(),
    }),  
    defineField({
        name: 'geolokace',
        title: 'Geolokace',
        type: 'geopoint',
        description:"souřadnice pro mapu",
      }), 
  ],
})

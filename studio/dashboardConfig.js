export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'event-projects-studio',
                  apiId: 'e5e910f3-c475-437e-8070-bf4e9e72915f'
                },
                {
                  buildHookId: '605a9d6de820231c8d5e34d2',
                  title: 'Events Website',
                  name: 'event-projects',
                  apiId: '5c3ad84d-7c66-41ec-b81a-128249b5ef8b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nicholageneral/event-projects',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://event-projects.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}

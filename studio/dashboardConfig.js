export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '6327933178b23e7be7216870',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-i1s9bz7h',
                  apiId: 'c7a55b5b-6a58-4ea0-8cf1-e29bc3cd513f'
                },
                {
                  buildHookId: '632793316544050eca129104',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-x34jywi7',
                  apiId: '2deebc42-8a88-4e9f-81af-ed236ba48fbb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mmizwicki/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-x34jywi7.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}

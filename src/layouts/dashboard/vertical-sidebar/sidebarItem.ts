export interface menu {
  header?: string
  title?: string
  icon?: string
  to?: string
  getURL?: boolean
  chip?: string
  chipIcon?: string
  children?: menu[]
  type?: string
}

const sidebarItem: menu[] = [
  { header: 'Navigation' },
  {
    title: 'Dashboard',
    icon: 'ph-house-line',
    to: '/',
  },
  { header: 'Ui Components' },
  {
    title: 'Color',
    icon: 'ph-palette',
    to: '/color',
  },
  {
    title: 'Typography',
    icon: 'ph-text-t',
    to: '/typography',
  },
  {
    title: 'Icons',
    icon: 'ph-feather',
    to: '#',
    children: [
      {
        title: 'Tabler',
        to: 'https://tabler.io/icons',
        getURL: true,
        type: 'external',
      },
      {
        title: 'Phosphor',
        to: 'https://phosphoricons.com/',
        type: 'external',
        getURL: true,
      },
    ],
  },
  { header: 'Pages' },
  {
    title: 'Login',
    icon: 'ph-lock',
    to: '/login',
    type: 'external',
  },
  {
    title: 'Register',
    icon: 'ph-user-plus',
    to: '/register',
    type: 'external',
  },
  { header: 'Other' },
  {
    title: 'Menu levels',
    icon: 'ph-tree-structure',
    to: '#',
    children: [
      {
        title: 'Level 2.1',
        to: '#',
      },
      {
        title: 'Level 2.2',
        to: '',
        children: [
          {
            title: 'Level 3.1',
            to: '#',
          },
          {
            title: 'Level 3.2',
            to: '#',
          },
          {
            title: 'Level 3.3',
            to: '#',
            children: [
              {
                title: 'Level 4.1',
                to: '#',
              },
              {
                title: 'Level 4.2',
                to: '#',
              },
            ],
          },
        ],
      },
      {
        title: 'Level 2.3',
        to: '',
        children: [
          {
            title: 'Level 3.1',
            to: '#',
          },
          {
            title: 'Level 3.2',
            to: '#',
          },
          {
            title: 'Level 3.3',
            to: '#',
            children: [
              {
                title: 'Level 4.1',
                to: '#',
              },
              {
                title: 'Level 4.2',
                to: '#',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'Sample Page',
    icon: 'ph-desktop',
    to: '/sample-page',
  },
]

export default sidebarItem

const menu = [
  {
    name : 'Home',
    icon : 'laptop',
    href : '/'
  },
  {
    name : 'Dependencies',
    icon : 'laptop',
    href : 'cofco'
  },
  {
    name : 'Infrastructure',
    icon : 'laptop',
    href : 'tree'
  },
  {
    name : 'Capabilities',
    icon : 'laptop',
    href : 'capability_map'
  },
  {
    name : 'How to',
    icon : 'laptop',
    href : 'howto'
  }
];

export default {
  menu : {
    user : menu,
    admin : [...menu, {
      name : 'Admin',
      icon : 'laptop',
      href : 'data-profile'
    }]
  }
};
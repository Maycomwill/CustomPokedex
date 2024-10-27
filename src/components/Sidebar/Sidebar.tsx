import * as React from 'react';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from '@/components/ui/sidebar';
import Pokeball from '../Pokeball';
import { NavMainProps, SideBarProps } from '@/interfaces/sideBar';

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const data: SideBarProps[] = [
    {
      title: 'Começando',
      url: '/',
      items: [
        {
          title: 'Pesquise um pokémon',
          url: '/',
        },
      ],
    },
    {
      title: 'Listas',
      url: '/',
      items: [
        {
          title: 'Highlights',
          url: '/',
        },
        {
          title: 'Regiões',
          url: '/regions',
        },
        {
          title: 'Tipos',
          url: '/types',
        },
        {
          title: 'Games',
          url: '/games',
        },
        {
          title: 'Habilidades',
          url: '/abilities',
        },
        {
          title: 'Golpes',
          url: '/moves',
        },
      ],
    },
    {
      title: 'Referências',
      url: '#',
      items: [
        {
          title: 'Github',
          url: 'https://github.com/maycomwill',
          target: '_blank',
        },
        {
          title: 'Linkedin',
          url: 'https://www.linkedin.com/in/maycomwill/',
          target: '_blank',
        },
        {
          title: 'API',
          url: 'https://pokeapi.co/',
          target: '_blank',
        },
      ],
    },
  ];
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="/">
                <div className="text-sidebar-gray-900 flex aspect-square size-8 items-center justify-center rounded-lg bg-accent-500">
                  <Pokeball className="size-5" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">Custom Pokédex</span>
                  <span className="">v2.0.0</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {data.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url} className="font-medium">
                    {item.title}
                  </a>
                </SidebarMenuButton>
                {item.items?.length ? (
                  <SidebarMenuSub>
                    {item.items.map((item: NavMainProps) => (
                      <SidebarMenuSubItem key={item.title}>
                        <SidebarMenuSubButton asChild isActive={item.isActive}>
                          <a href={item.url} target={item.target}>
                            {item.title}
                          </a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}

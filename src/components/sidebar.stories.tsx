import type { Meta, StoryObj } from "@storybook/react-vite"
import { Bus, Home, Settings, Users, MapPin } from "lucide-react"

import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarSeparator,
  SidebarTrigger,
  SidebarInset,
} from "./sidebar"

const meta = {
  title: "UI/Sidebar",
  component: Sidebar,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: "기본 레이아웃",
  render: () => (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center gap-2 px-2 py-1">
            <Bus className="size-5" />
            <span className="font-semibold text-sm">타랑 관리자</span>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>메뉴</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton isActive>
                    <Home />
                    <span>대시보드</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Bus />
                    <span>차량 관리</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <MapPin />
                    <span>노선 관리</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Users />
                    <span>학생 관리</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarSeparator />
          <SidebarGroup>
            <SidebarGroupLabel>설정</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Settings />
                    <span>환경설정</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <div className="px-2 py-1 text-xs text-muted-foreground">
            타랑 v1.0.0
          </div>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="flex items-center gap-2 border-b p-4">
          <SidebarTrigger />
          <h1 className="text-sm font-medium">대시보드</h1>
        </header>
        <main className="p-4">
          <p className="text-sm text-muted-foreground">메인 콘텐츠 영역</p>
        </main>
      </SidebarInset>
    </SidebarProvider>
  ),
}

export const CollapsedState: Story = {
  name: "접힌 상태",
  render: () => (
    <SidebarProvider defaultOpen={false}>
      <Sidebar collapsible="icon">
        <SidebarHeader>
          <div className="flex items-center gap-2 px-2 py-1">
            <Bus className="size-5" />
            <span className="font-semibold text-sm">타랑</span>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>메뉴</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton tooltip="대시보드" isActive>
                    <Home />
                    <span>대시보드</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton tooltip="차량 관리">
                    <Bus />
                    <span>차량 관리</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton tooltip="학생 관리">
                    <Users />
                    <span>학생 관리</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
        <header className="flex items-center gap-2 border-b p-4">
          <SidebarTrigger />
          <h1 className="text-sm font-medium">대시보드</h1>
        </header>
        <main className="p-4">
          <p className="text-sm text-muted-foreground">
            사이드바가 아이콘 모드로 접힌 상태입니다.
          </p>
        </main>
      </SidebarInset>
    </SidebarProvider>
  ),
}

export const RightSide: Story = {
  name: "오른쪽 배치",
  render: () => (
    <SidebarProvider>
      <SidebarInset>
        <header className="flex items-center gap-2 border-b p-4">
          <h1 className="text-sm font-medium">메인 콘텐츠</h1>
          <SidebarTrigger className="ml-auto" />
        </header>
        <main className="p-4">
          <p className="text-sm text-muted-foreground">
            사이드바가 오른쪽에 배치된 레이아웃입니다.
          </p>
        </main>
      </SidebarInset>
      <Sidebar side="right">
        <SidebarHeader>
          <div className="px-2 py-1 font-semibold text-sm">상세 정보</div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>차량 상태</SidebarGroupLabel>
            <SidebarGroupContent>
              <div className="px-2 text-sm text-muted-foreground">
                1호차: 운행중
              </div>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  ),
}

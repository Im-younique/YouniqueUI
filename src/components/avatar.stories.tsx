import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarBadge,
  AvatarGroup,
  AvatarGroupCount,
} from "./avatar"

const meta = {
  title: "UI/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: "기본",
  render: () => (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="사용자" />
      <AvatarFallback>홍길</AvatarFallback>
    </Avatar>
  ),
}

export const WithFallback: Story = {
  name: "이니셜 폴백",
  render: () => (
    <Avatar>
      <AvatarFallback>홍길</AvatarFallback>
    </Avatar>
  ),
}

export const Sizes: Story = {
  name: "크기 변형",
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar size="sm">
        <AvatarFallback>김</AvatarFallback>
      </Avatar>
      <Avatar size="default">
        <AvatarFallback>이수</AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        <AvatarFallback>박지민</AvatarFallback>
      </Avatar>
    </div>
  ),
}

export const WithBadge: Story = {
  name: "뱃지 포함",
  render: () => (
    <Avatar size="lg">
      <AvatarFallback>기사</AvatarFallback>
      <AvatarBadge />
    </Avatar>
  ),
}

export const Group: Story = {
  name: "그룹",
  render: () => (
    <AvatarGroup>
      <Avatar>
        <AvatarFallback>홍길</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>김철</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>이영</AvatarFallback>
      </Avatar>
      <AvatarGroupCount>+3</AvatarGroupCount>
    </AvatarGroup>
  ),
}

export const UseCaseDriverList: Story = {
  name: "사용 예: 기사 목록",
  render: () => (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarFallback>김기</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-medium">김기사</p>
          <p className="text-xs text-muted-foreground">1호차 담당</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarFallback>박기</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-medium">박기사</p>
          <p className="text-xs text-muted-foreground">2호차 담당</p>
        </div>
      </div>
    </div>
  ),
}

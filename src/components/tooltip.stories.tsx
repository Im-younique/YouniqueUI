import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "./tooltip"
import { Button } from "./button"

const meta = {
  title: "UI/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <TooltipProvider>
        <Story />
      </TooltipProvider>
    ),
  ],
} satisfies Meta<typeof Tooltip>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: "기본 (위)",
  render: () => (
    <Tooltip>
      <TooltipTrigger render={<Button variant="outline" />}>
        마우스를 올려보세요
      </TooltipTrigger>
      <TooltipContent side="top">
        툴팁 내용입니다
      </TooltipContent>
    </Tooltip>
  ),
}

export const SideBottom: Story = {
  name: "아래쪽",
  render: () => (
    <Tooltip>
      <TooltipTrigger render={<Button variant="outline" />}>
        아래 툴팁
      </TooltipTrigger>
      <TooltipContent side="bottom">
        아래에 표시되는 툴팁
      </TooltipContent>
    </Tooltip>
  ),
}

export const SideLeft: Story = {
  name: "왼쪽",
  render: () => (
    <Tooltip>
      <TooltipTrigger render={<Button variant="outline" />}>
        왼쪽 툴팁
      </TooltipTrigger>
      <TooltipContent side="left">
        왼쪽에 표시되는 툴팁
      </TooltipContent>
    </Tooltip>
  ),
}

export const SideRight: Story = {
  name: "오른쪽",
  render: () => (
    <Tooltip>
      <TooltipTrigger render={<Button variant="outline" />}>
        오른쪽 툴팁
      </TooltipTrigger>
      <TooltipContent side="right">
        오른쪽에 표시되는 툴팁
      </TooltipContent>
    </Tooltip>
  ),
}

export const UseCaseActionButtons: Story = {
  name: "사용 예: 액션 버튼",
  render: () => (
    <div className="flex gap-2">
      <Tooltip>
        <TooltipTrigger render={<Button variant="outline" size="sm" />}>
          운행 시작
        </TooltipTrigger>
        <TooltipContent>선택한 차량의 운행을 시작합니다</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger render={<Button variant="outline" size="sm" />}>
          운행 종료
        </TooltipTrigger>
        <TooltipContent>현재 진행 중인 운행을 종료합니다</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger render={<Button variant="destructive" size="sm" />}>
          긴급 정지
        </TooltipTrigger>
        <TooltipContent>운행을 즉시 중단하고 학부모에게 알림을 보냅니다</TooltipContent>
      </Tooltip>
    </div>
  ),
}

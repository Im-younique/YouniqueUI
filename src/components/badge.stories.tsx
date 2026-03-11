import type { Meta, StoryObj } from "@storybook/react-vite"

import { Badge } from "./badge"

const meta = {
  title: "UI/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: "기본",
  args: {
    children: "운영중",
  },
}

export const Secondary: Story = {
  name: "보조",
  args: {
    variant: "secondary",
    children: "대기중",
  },
}

export const Destructive: Story = {
  name: "경고",
  args: {
    variant: "destructive",
    children: "운행중단",
  },
}

export const Outline: Story = {
  name: "외곽선",
  args: {
    variant: "outline",
    children: "운행완료",
  },
}

export const AllVariants: Story = {
  name: "전체 변형",
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="default">운영중</Badge>
      <Badge variant="secondary">대기중</Badge>
      <Badge variant="destructive">운행중단</Badge>
      <Badge variant="outline">운행완료</Badge>
    </div>
  ),
}

export const UseCaseStatuses: Story = {
  name: "사용 예: 차량 상태",
  render: () => (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <Badge variant="default">운행중</Badge>
        <span className="text-sm text-muted-foreground">
          현재 운행 중인 차량
        </span>
      </div>
      <div className="flex items-center gap-2">
        <Badge variant="secondary">대기중</Badge>
        <span className="text-sm text-muted-foreground">
          출발 대기 중인 차량
        </span>
      </div>
      <div className="flex items-center gap-2">
        <Badge variant="outline">운행완료</Badge>
        <span className="text-sm text-muted-foreground">
          운행이 완료된 차량
        </span>
      </div>
      <div className="flex items-center gap-2">
        <Badge variant="destructive">고장</Badge>
        <span className="text-sm text-muted-foreground">
          정비가 필요한 차량
        </span>
      </div>
    </div>
  ),
}

export const UseCaseBoardingMethod: Story = {
  name: "사용 예: 탑승 확인 방식",
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="default">QR</Badge>
      <Badge variant="secondary">NFC</Badge>
      <Badge variant="outline">수동체크</Badge>
    </div>
  ),
}

import type { Meta, StoryObj } from "@storybook/react-vite"

import { Separator } from "./separator"

const meta = {
  title: "UI/Separator",
  component: Separator,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Separator>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: "기본 (수평)",
  render: () => (
    <div className="w-64">
      <p className="text-sm">위쪽 내용</p>
      <Separator className="my-3" />
      <p className="text-sm">아래쪽 내용</p>
    </div>
  ),
}

export const Vertical: Story = {
  name: "수직",
  render: () => (
    <div className="flex h-8 items-center gap-3">
      <span className="text-sm">항목 1</span>
      <Separator orientation="vertical" />
      <span className="text-sm">항목 2</span>
      <Separator orientation="vertical" />
      <span className="text-sm">항목 3</span>
    </div>
  ),
}

export const UseCaseInfoSection: Story = {
  name: "사용 예: 차량 정보 구분",
  render: () => (
    <div className="w-72">
      <div className="flex flex-col gap-1">
        <h4 className="text-sm font-medium">차량 정보</h4>
        <p className="text-xs text-muted-foreground">1호차 (15인승)</p>
      </div>
      <Separator className="my-3" />
      <div className="flex flex-col gap-1">
        <h4 className="text-sm font-medium">기사 정보</h4>
        <p className="text-xs text-muted-foreground">김기사 (010-1234-5678)</p>
      </div>
      <Separator className="my-3" />
      <div className="flex flex-col gap-1">
        <h4 className="text-sm font-medium">노선 정보</h4>
        <p className="text-xs text-muted-foreground">A노선 (정류장 8개)</p>
      </div>
    </div>
  ),
}

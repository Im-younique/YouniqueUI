import type { Meta, StoryObj } from "@storybook/react-vite"

import { Label } from "./label"
import { Input } from "./input"
import { Checkbox } from "./checkbox"

const meta = {
  title: "UI/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: "기본",
  args: {
    children: "라벨 텍스트",
  },
}

export const WithInput: Story = {
  name: "입력 필드와 함께",
  render: () => (
    <div className="flex flex-col gap-2">
      <Label htmlFor="name">학원 이름</Label>
      <Input id="name" placeholder="학원 이름을 입력하세요" />
    </div>
  ),
}

export const WithCheckbox: Story = {
  name: "체크박스와 함께",
  render: () => (
    <div className="flex items-center gap-2">
      <Checkbox id="agree" />
      <Label htmlFor="agree">이용약관에 동의합니다</Label>
    </div>
  ),
}

export const UseCaseForm: Story = {
  name: "사용 예: 폼 필드",
  render: () => (
    <div className="flex flex-col gap-4 w-64">
      <div className="flex flex-col gap-2">
        <Label htmlFor="vehicle-name">차량 이름</Label>
        <Input id="vehicle-name" placeholder="예: 1호차" />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="plate-number">차량 번호</Label>
        <Input id="plate-number" placeholder="예: 12가 3456" />
      </div>
    </div>
  ),
}

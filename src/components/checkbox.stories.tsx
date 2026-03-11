import type { Meta, StoryObj } from "@storybook/react-vite"
import { expect, userEvent, within } from "@storybook/test"

import { Checkbox } from "./checkbox"
import { Label } from "./label"

const meta = {
  title: "UI/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: "기본",
}

export const Checked: Story = {
  name: "체크됨",
  args: {
    defaultChecked: true,
  },
}

export const Disabled: Story = {
  name: "비활성화",
  args: {
    disabled: true,
  },
}

export const WithLabel: Story = {
  name: "라벨 포함",
  render: () => (
    <div className="flex items-center gap-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">이용약관에 동의합니다</Label>
    </div>
  ),
}

export const CheckedWithLabel: Story = {
  name: "라벨 포함 (체크됨)",
  render: () => (
    <div className="flex items-center gap-2">
      <Checkbox id="agree" defaultChecked />
      <Label htmlFor="agree">개인정보 수집에 동의합니다</Label>
    </div>
  ),
}

export const UseCaseBoardingChecklist: Story = {
  name: "사용 예: 탑승 확인 체크리스트",
  render: () => (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <Checkbox id="student1" defaultChecked />
        <Label htmlFor="student1">김민준</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="student2" defaultChecked />
        <Label htmlFor="student2">이서연</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="student3" />
        <Label htmlFor="student3">박지호</Label>
      </div>
    </div>
  ),
}

export const ToggleInteraction: Story = {
  name: "토글 인터랙션 테스트",
  render: () => (
    <div className="flex items-center gap-2">
      <Checkbox id="test-checkbox" />
      <Label htmlFor="test-checkbox">테스트 체크박스</Label>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const checkbox = canvas.getByRole("checkbox")

    await expect(checkbox).not.toBeChecked()
    await userEvent.click(checkbox)
    await expect(checkbox).toBeChecked()
    await userEvent.click(checkbox)
    await expect(checkbox).not.toBeChecked()
  },
}

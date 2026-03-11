import type { Meta, StoryObj } from "@storybook/react-vite"
import { expect, userEvent, within } from "@storybook/test"

import { Switch } from "./switch"
import { Label } from "./label"

const meta = {
  title: "UI/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: "기본 (꺼짐)",
}

export const Checked: Story = {
  name: "켜짐",
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

export const SmallSize: Story = {
  name: "크기: Small",
  args: {
    size: "sm",
  },
}

export const WithLabel: Story = {
  name: "라벨 포함",
  render: () => (
    <div className="flex items-center gap-2">
      <Switch id="notification" />
      <Label htmlFor="notification">알림 수신</Label>
    </div>
  ),
}

export const UseCaseSettings: Story = {
  name: "사용 예: 알림 설정",
  render: () => (
    <div className="flex flex-col gap-4 w-72">
      <div className="flex items-center justify-between">
        <Label htmlFor="push">푸시 알림</Label>
        <Switch id="push" defaultChecked />
      </div>
      <div className="flex items-center justify-between">
        <Label htmlFor="sms">SMS 알림</Label>
        <Switch id="sms" defaultChecked />
      </div>
      <div className="flex items-center justify-between">
        <Label htmlFor="email">이메일 알림</Label>
        <Switch id="email" />
      </div>
    </div>
  ),
}

export const ToggleInteraction: Story = {
  name: "토글 인터랙션 테스트",
  render: () => (
    <div className="flex items-center gap-2">
      <Switch id="test-switch" />
      <Label htmlFor="test-switch">테스트 스위치</Label>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const switchEl = canvas.getByRole("checkbox")

    await expect(switchEl).not.toBeChecked()
    await userEvent.click(switchEl)
    await expect(switchEl).toBeChecked()
    await userEvent.click(switchEl)
    await expect(switchEl).not.toBeChecked()
  },
}

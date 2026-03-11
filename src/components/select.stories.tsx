import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectLabel,
  SelectSeparator,
} from "./select"

const meta = {
  title: "UI/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: "기본",
  render: () => (
    <Select>
      <SelectTrigger className="w-48">
        <SelectValue placeholder="선택하세요" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="option1">옵션 1</SelectItem>
        <SelectItem value="option2">옵션 2</SelectItem>
        <SelectItem value="option3">옵션 3</SelectItem>
      </SelectContent>
    </Select>
  ),
}

export const WithGroups: Story = {
  name: "그룹 포함",
  render: () => (
    <Select>
      <SelectTrigger className="w-48">
        <SelectValue placeholder="차량 선택" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>승합차</SelectLabel>
          <SelectItem value="van1">1호차 (15인승)</SelectItem>
          <SelectItem value="van2">2호차 (12인승)</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>버스</SelectLabel>
          <SelectItem value="bus1">3호차 (25인승)</SelectItem>
          <SelectItem value="bus2">4호차 (30인승)</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
}

export const Disabled: Story = {
  name: "비활성화",
  render: () => (
    <Select disabled>
      <SelectTrigger className="w-48">
        <SelectValue placeholder="선택 불가" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="option1">옵션 1</SelectItem>
      </SelectContent>
    </Select>
  ),
}

export const SmallSize: Story = {
  name: "크기: Small",
  render: () => (
    <Select>
      <SelectTrigger className="w-40" size="sm">
        <SelectValue placeholder="소형 선택" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="item1">항목 1</SelectItem>
        <SelectItem value="item2">항목 2</SelectItem>
      </SelectContent>
    </Select>
  ),
}

export const UseCaseRouteSelect: Story = {
  name: "사용 예: 노선 선택",
  render: () => (
    <div className="flex flex-col gap-2 w-56">
      <label className="text-sm font-medium">운행 노선</label>
      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="노선을 선택하세요" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="route1">A노선 (강남방면)</SelectItem>
          <SelectItem value="route2">B노선 (서초방면)</SelectItem>
          <SelectItem value="route3">C노선 (송파방면)</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
}

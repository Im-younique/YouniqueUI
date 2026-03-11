import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverTitle,
  PopoverDescription,
} from "./popover"
import { Button } from "./button"
import { Input } from "./input"
import { Label } from "./label"

const meta = {
  title: "UI/Popover",
  component: Popover,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Popover>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: "기본",
  render: () => (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" />}>
        팝오버 열기
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader>
          <PopoverTitle>알림 설정</PopoverTitle>
          <PopoverDescription>
            알림 수신 방법을 설정합니다.
          </PopoverDescription>
        </PopoverHeader>
        <p className="text-sm text-muted-foreground">팝오버 내용이 여기에 표시됩니다.</p>
      </PopoverContent>
    </Popover>
  ),
}

export const WithForm: Story = {
  name: "폼 포함",
  render: () => (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" />}>
        정류장 추가
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader>
          <PopoverTitle>정류장 추가</PopoverTitle>
          <PopoverDescription>
            새로운 정류장 정보를 입력하세요.
          </PopoverDescription>
        </PopoverHeader>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="stop-name">정류장 이름</Label>
            <Input id="stop-name" placeholder="예: 아파트 정문" />
          </div>
          <Button size="sm">추가</Button>
        </div>
      </PopoverContent>
    </Popover>
  ),
}

export const UseCaseNotification: Story = {
  name: "사용 예: 알림 확인",
  render: () => (
    <Popover>
      <PopoverTrigger render={<Button variant="ghost" />}>
        알림 (3)
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader>
          <PopoverTitle>최근 알림</PopoverTitle>
        </PopoverHeader>
        <div className="flex flex-col gap-2">
          <div className="rounded-md bg-muted p-2 text-xs">
            1호차가 출발했습니다.
          </div>
          <div className="rounded-md bg-muted p-2 text-xs">
            김민준 학생이 탑승했습니다.
          </div>
          <div className="rounded-md bg-muted p-2 text-xs">
            2호차 운행이 완료되었습니다.
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
}

import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
} from "./sheet"
import { Button } from "./button"
import { Input } from "./input"
import { Label } from "./label"

const meta = {
  title: "UI/Sheet",
  component: Sheet,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Sheet>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: "기본 (오른쪽)",
  render: () => (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>
        시트 열기
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>시트 제목</SheetTitle>
          <SheetDescription>시트 설명이 여기에 표시됩니다.</SheetDescription>
        </SheetHeader>
        <div className="p-4">
          <p className="text-sm text-muted-foreground">시트 내용</p>
        </div>
      </SheetContent>
    </Sheet>
  ),
}

export const SideLeft: Story = {
  name: "왼쪽",
  render: () => (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>
        왼쪽 시트
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>사이드 메뉴</SheetTitle>
          <SheetDescription>왼쪽에서 열리는 시트입니다.</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  ),
}

export const SideTop: Story = {
  name: "위쪽",
  render: () => (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>
        위쪽 시트
      </SheetTrigger>
      <SheetContent side="top">
        <SheetHeader>
          <SheetTitle>공지사항</SheetTitle>
          <SheetDescription>위쪽에서 열리는 시트입니다.</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  ),
}

export const SideBottom: Story = {
  name: "아래쪽",
  render: () => (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>
        아래쪽 시트
      </SheetTrigger>
      <SheetContent side="bottom">
        <SheetHeader>
          <SheetTitle>필터 옵션</SheetTitle>
          <SheetDescription>아래쪽에서 열리는 시트입니다.</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  ),
}

export const UseCaseVehicleForm: Story = {
  name: "사용 예: 차량 등록",
  render: () => (
    <Sheet>
      <SheetTrigger render={<Button />}>
        차량 등록
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>새 차량 등록</SheetTitle>
          <SheetDescription>
            학원 차량 정보를 입력하세요.
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-4 p-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="vehicle-name">차량 이름</Label>
            <Input id="vehicle-name" placeholder="예: 1호차" />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="plate">차량 번호</Label>
            <Input id="plate" placeholder="예: 12가 3456" />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="capacity">정원</Label>
            <Input id="capacity" type="number" placeholder="15" />
          </div>
        </div>
        <SheetFooter>
          <Button>등록하기</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
}

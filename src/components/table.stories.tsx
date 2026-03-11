import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter,
} from "./table"
import { Badge } from "./badge"

const meta = {
  title: "UI/Table",
  component: Table,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

const academyData = [
  {
    id: "ACD-001",
    name: "타랑 영어학원",
    address: "서울시 강남구 역삼동",
    students: 120,
    vehicles: 3,
    status: "운영중" as const,
  },
  {
    id: "ACD-002",
    name: "밝은미래 수학학원",
    address: "서울시 서초구 반포동",
    students: 85,
    vehicles: 2,
    status: "운영중" as const,
  },
  {
    id: "ACD-003",
    name: "글로벌 어학원",
    address: "서울시 송파구 잠실동",
    students: 200,
    vehicles: 5,
    status: "운영중" as const,
  },
  {
    id: "ACD-004",
    name: "한빛 피아노학원",
    address: "서울시 마포구 합정동",
    students: 45,
    vehicles: 1,
    status: "일시정지" as const,
  },
  {
    id: "ACD-005",
    name: "스타 태권도장",
    address: "서울시 강동구 천호동",
    students: 60,
    vehicles: 2,
    status: "운영중" as const,
  },
]

const statusVariant = {
  운영중: "default" as const,
  일시정지: "destructive" as const,
}

export const AcademyList: Story = {
  name: "학원 목록 테이블",
  render: () => (
    <Table>
      <TableCaption>등록된 학원 목록</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>학원 코드</TableHead>
          <TableHead>학원명</TableHead>
          <TableHead>주소</TableHead>
          <TableHead className="text-right">학생 수</TableHead>
          <TableHead className="text-right">차량 수</TableHead>
          <TableHead>상태</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {academyData.map((academy) => (
          <TableRow key={academy.id}>
            <TableCell className="font-medium">{academy.id}</TableCell>
            <TableCell>{academy.name}</TableCell>
            <TableCell>{academy.address}</TableCell>
            <TableCell className="text-right">{academy.students}명</TableCell>
            <TableCell className="text-right">{academy.vehicles}대</TableCell>
            <TableCell>
              <Badge variant={statusVariant[academy.status]}>
                {academy.status}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>합계</TableCell>
          <TableCell className="text-right">
            {academyData.reduce((sum, a) => sum + a.students, 0)}명
          </TableCell>
          <TableCell className="text-right">
            {academyData.reduce((sum, a) => sum + a.vehicles, 0)}대
          </TableCell>
          <TableCell />
        </TableRow>
      </TableFooter>
    </Table>
  ),
}

export const VehicleSchedule: Story = {
  name: "차량 운행 스케줄",
  render: () => (
    <Table>
      <TableCaption>오늘의 차량 운행 스케줄</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>노선</TableHead>
          <TableHead>차량번호</TableHead>
          <TableHead>기사명</TableHead>
          <TableHead>출발 시간</TableHead>
          <TableHead>탑승 인원</TableHead>
          <TableHead>상태</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">강남 1호선</TableCell>
          <TableCell>12가 3456</TableCell>
          <TableCell>김운전</TableCell>
          <TableCell>07:30</TableCell>
          <TableCell>15명</TableCell>
          <TableCell>
            <Badge>운행중</Badge>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">서초 2호선</TableCell>
          <TableCell>34나 7890</TableCell>
          <TableCell>이안전</TableCell>
          <TableCell>07:45</TableCell>
          <TableCell>12명</TableCell>
          <TableCell>
            <Badge variant="secondary">대기중</Badge>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">송파 3호선</TableCell>
          <TableCell>56다 1234</TableCell>
          <TableCell>박배려</TableCell>
          <TableCell>08:00</TableCell>
          <TableCell>18명</TableCell>
          <TableCell>
            <Badge variant="outline">운행완료</Badge>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
}

export const EmptyTable: Story = {
  name: "빈 테이블",
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>학원 코드</TableHead>
          <TableHead>학원명</TableHead>
          <TableHead>상태</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell colSpan={3} className="h-24 text-center">
            등록된 학원이 없습니다.
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
}

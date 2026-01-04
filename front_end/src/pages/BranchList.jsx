import BranchCard from '../component/Branch/BranchCard'
import branch1 from '../assets/branch/branch 1.webp'
import branch2 from '../assets/branch/branch 2.jpg'
import branch3 from '../assets/branch/branch 3.jpg'
import branch4 from '../assets/branch/branch 4.jpg'
import branch5 from '../assets/branch/branch 5.jpg'
import branch6 from '../assets/branch/branch 6.jpg'
import branch7 from '../assets/branch/branch 7.jpg'
import branch8 from '../assets/branch/branch 8.jpg'
import branch9 from '../assets/branch/branch 9.jpg'
import React, { useState } from 'react'
import '../component/Branch/branch.css'

const branches = [
  {
    id: 1,
    area: 'Bình Tân',
    name: 'NONAME BARBER CUTCLUB PRIVIA KHANG ĐIỀN BÌNH TÂN',
    image: branch1,
    description:
      'NONAME Barber Cutclub – Privia Khang Điền, Bình Tân. Cắt tóc nam – gội – cạo khăn nóng/lạnh...',
  },
  {
    id: 2,
    area: 'Quận 10',
    name: 'NONAME BARBER CUTCLUB QUẬN 10',
    image: branch2,
    description:
      'NONAME Barber Cutclub Điện Biên Phủ, Quận 10 – Cắt tóc nam, uốn nhuộm theo xu hướng...',
  },
  {
    id: 3,
    area: 'Quận 1',
    name: 'NONAME BARBER CUTCLUB TRẦN QUANG KHẢI',
    image: branch3,
    description:
      'NONAME Barber Cutclub Trần Quang Khải, Quận 1 – Cắt tóc nam chuyên nghiệp...',
  },
  {
    id: 4,
    area: 'Quận 3',
    name: 'NONAME BARBER CUTCLUB QUẬN 3',
    image: branch4,
    description:
      'NONAME Barber Cutclub Quận 3 – Phong cách hiện đại, dịch vụ cao cấp...',
  },
  {
    id: 5,
    area: 'Quận 7',
    name: 'NONAME BARBER CUTCLUB QUẬN 7',
    image: branch5,
    description:
      'NONAME Barber Cutclub Quận 7 – Cắt tóc nam, tạo kiểu chuẩn form...',
  },
  {
    id: 6,
    area: 'Phú Nhuận',
    name: 'NONAME BARBER CUTCLUB PHÚ NHUẬN',
    image: branch6,
    description:
      'NONAME Barber Cutclub Phú Nhuận – Barber chuyên nghiệp, không gian chất...',
  },
  {
    id: 7,
    area: 'Gò Vấp',
    name: 'NONAME BARBER CUTCLUB GÒ VẤP',
    image: branch7,
    description:
      'NONAME Barber Cutclub Gò Vấp – Cắt tóc nam, uốn nhuộm thời trang...',
  },
  {
    id: 8,
    area: 'Tân Bình',
    name: 'NONAME BARBER CUTCLUB TÂN BÌNH',
    image: branch8,
    description:
      'NONAME Barber Cutclub Tân Bình – Dịch vụ chuẩn barber quốc tế...',
  },
  {
    id: 9,
    area: 'Thủ Đức',
    name: 'NONAME BARBER CUTCLUB THỦ ĐỨC',
    image: branch9,
    description:
      'NONAME Barber Cutclub Thủ Đức – Không gian rộng rãi, barber tay nghề cao...',
  },
];

const BranchList = () => {
  const [keyword, setKeyword] = useState("")

  const filteredBranches = branches.filter(branch =>
    `${branch.name} ${branch.area} ${branch.description}`
      .toLowerCase()
      .includes(keyword.toLowerCase())
  )

  return (
    <div className="container py-5">

    
{/* Search */}
<div className="search-wrapper mb-5">
  <div className="search-box mx-auto">
    <input
      type="text"
      className="form-control search-input"
      placeholder="Bạn đang tìm kiếm khu vực nào?"
      value={keyword}
      onChange={(e) => setKeyword(e.target.value)}
    />
  </div>
</div>



      {/* Grid */}
      <div className="row">
        {filteredBranches.length === 0 && (
          <p className="text-muted">
            Không tìm thấy chi nhánh phù hợp
          </p>
        )}

        {filteredBranches.map(branch => (
          <BranchCard key={branch.id} branch={branch} />
        ))}
      </div>

    </div>
  )
}

export default BranchList

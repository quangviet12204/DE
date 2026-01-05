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
    area: 'Binh Tan',
    name: 'NONAME BARBER CUTCLUB PRIVIA KHANG DIEN, BINH TAN ',
    image: branch1,
    description:
      'NONAME Barber Cutclub – Privia Khang Dien, Binh Tan. Mens haircut – shampoo – hot/cold towel shave...',
  },
  {
    id: 2,
    area: 'District 10  ',
    name: 'NONAME BARBER CUTCLUB DISTRICT 10',
    image: branch2,
    description:
      'NONAME Barber Cutclub Dien Bien Phu, District 10 – Mens haircuts, perms, and hair coloring according to trends...',
  },
  {
    id: 3,
    area: 'District 1',
    name: 'NONAME BARBER CUTCLUB TRAN QUANG KHAI',
    image: branch3,
    description:
      'NONAME Barber Cutclub Tran Quang Khai, District 1 – Mens haircut professional...',
  },
  {
    id: 4,
    area: 'District 3',
    name: 'NONAME BARBER CUTCLUB DISTRICT 3',
    image: branch4,
    description:
      'NONAME Barber Cutclub District 3 – Modern style, premium service...',
  },
  {
    id: 5,
    area: 'District 7',
    name: 'NONAME BARBER CUTCLUB DISTRICT 7',
    image: branch5,
    description:
      'NONAME Barber Cutclub District 7 – Mens haircut, styling with standard form...',
  },
  {
    id: 6,
    area: 'Phu Nhuan',
    name: 'NONAME BARBER CUTCLUB PHU NHUAN',
    image: branch6,
    description:
      'NONAME Barber Cutclub Phu Nhuan – Professional barber shop, stylish space...',
  },
  {
    id: 7,
    area: 'Go Vap',
    name: 'NONAME BARBER CUTCLUB GO VAP',
    image: branch7,
    description:
      'NONAME Barber Cutclub Go Vap – Mens haircut, perms and coloring...',
  },
  {
    id: 8,
    area: 'TTan Binh',
    name: 'NONAME BARBER CUTCLUB TAN BINH',
    image: branch8,
    description:
      'NONAME Barber Cutclub TTan Binh – International standard barber service...',
  },
  {
    id: 9,
    area: 'Thu Duc',
    name: 'NONAME BARBER CUTCLUB THU DUC',
    image: branch9,
    description:
      'NONAME Barber Cutclub Thu Duc – Spacious interior, highly skilled barbers...',
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
      placeholder="Which area are you looking for?"
      value={keyword}
      onChange={(e) => setKeyword(e.target.value)}
    />
  </div>
</div>



      {/* Grid */}
      <div className="row">
        {filteredBranches.length === 0 && (
          <p className="text-muted">
            No matching branches found
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

import BranchCard from '../component/Branch/BranchCard'
import branch1 from '../assets/branch/branch 1.jpg'
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
import { Link } from 'react-router-dom'


const branches = [
  {
    id: 1,
    area: 'Binh Tan',
    name: 'NONAME BARBER CUTCLUB PRIVIA KHANG DIEN, BINH TAN ',
    image: branch1  ,
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
    name: 'NONAME BARBER CUTCLUB DISTRICT 2 ONE VERANDAH',
    image: branch4,
    description:
      'NONAME Barber Cutclub District 2 ONE VERANDAH – Modern style, premium service...',
  },
  {
    id: 5,
    area: 'District 7',
    name: 'NONAME BARBER CUTCLUB DISTRICT 2',
    image: branch5,
    description:
      'NONAME Barber Cutclub District 2 – Mens haircut, styling with standard form...',
  },
  {
    id: 6,
    area: 'Phu Nhuan',
    name: 'NONAME BARBER CUTCLUB DISTRICT 7 – Mens Haircut in Phu My Hung',
    image: branch6,
    description:
      'NONAME Barber Cutclub District 7 – Mens Haircut in Phu My Hung  – Professional barber shop, stylish space...',
  },
  {
    id: 7,
    area: 'Go Vap',
    name: 'NONAME BARBER CUTCLUB POPUP STORE THU THIEM PARK',
    image: branch7,
    description:
      'NONAME Barber Cutclub Popup store Thu Thiem park – Mens haircut, perms and coloring...',
  },
  {
    id: 8,
    area: 'TTan Binh',
    name: 'NONAME BARBER DELUXE ĐIEN BIEN PHU',
    image: branch8,
    description:
      'NONAME Barber deluxe Dien Bien Phu – International standard barber service...',
  },
  {
    id: 9,
    area: 'Thu Duc',
    name: 'NONAME BARBER DISTRICT 1',
    image: branch9,
    description:
      'NONAME Barber From Uncle Tu Barber Deluxe District 1 – Spacious interior, highly skilled barbers...',
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

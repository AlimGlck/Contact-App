import {useState} from 'react'

function List({contact}) {

  const [filterText,setFilterText] = useState(''); 

  const filtered = contact.filter((item) => {
    return Object.keys(item).some((key) => 
    item[key].toString().toLowerCase().includes(filterText.toLowerCase())
    );
  })

  return (
    <div>
      <input 
      placeholder='Filter contact' 
      value={filterText} 
      onChange={(e) => setFilterText(e.target.value)} 
      />
      
      <ul className='list'>
        {filtered.map((c,i) => (<li key={i}>{c.fullname}</li>
        ))}
      </ul>

      <p>Total Contacts ({filtered.length})</p>
      
    </div>
  );
}

export default List;

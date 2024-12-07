/*import React , {useState, useEffect} from 'react'

const SearchProducts = () => {

  const [ users, setUsers ] = useState([])
  const [ search, setSearch ] = useState("")
  
  const URL = 'https://66f4a5f277b5e889709a119d.mockapi.io/api/stockProducts'

  const showData = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    //console.log(data)
    setUsers(data)
  }       
  
  const searcher = (e) => {
    setSearch(e.target.value)   
  }

  const results = !search ? users : users.filter((dato)=> dato.name.toLowerCase().includes(search.toLocaleLowerCase()))
  
  useEffect( () => {
    showData();
  }, []);

  showData()
  console.log("hola mundo");
  

return (
   <div>Search component</div>
  )
}

export default SearchProducts*/
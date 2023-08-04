import { useGlobalContext } from './context'

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext()

  const handleSubmit = (e) => {
    e.preventDefault()
    const searchValue = e.target.elements.search.value
    if (!searchValue) return
    setSearchTerm(searchValue)
  }
  return (
    <section>
      <h1 className='title'>unsplash images</h1>

      <form className='search-form' onSubmit={handleSubmit}>
        <input
          type='search'
          name='search'
          placeholder='Ocean'
          className='form-input search-input'
        />
        <button type='submit' className='btn'>
          Search
        </button>
      </form>
    </section>
  )
}
export default SearchForm

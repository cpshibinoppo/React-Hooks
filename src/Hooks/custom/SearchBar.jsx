export default function SearchBar({ onChange }){
    return(
        <input type="text" onChange={(e) => onChange(e.target.value)} placeholder="Search Users" />
    )
}
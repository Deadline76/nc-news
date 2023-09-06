import { Link } from 'react-router-dom'


export const Header = () => {

    return (
        <>
        <Link className="title" to={'/'}>
        <h1 className="title">NC News</h1>
        </Link>
        </>
    )
}
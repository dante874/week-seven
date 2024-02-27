import { Link } from "react-router-dom";

export function NotFoundPage(){
    return (
        <div>
            <h2>Not Found '_'</h2>
            <Link to="/">Go Home</Link>
        </div>
    )
}
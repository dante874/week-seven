import { Link } from "react-router-dom";
export function HomePage() {
    return (
        <div>
            <h2>Home Page</h2>
            <Link to="/about">About</Link>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis nobis nostrum, non doloribus sequi fugiat qui consequuntur impedit ex nisi nemo nam deleniti iure quam, a, placeat assumenda! Consequuntur, ex.</p>
        </div>
    );
}

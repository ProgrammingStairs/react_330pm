export function Header(){ // named export
    return <>
        <h2>Header Component</h2>
        <p>This is Header Component</p>
    </>
}
export const Navbar = ()=>{ // named export
    return <>
        <h2>Navbar Component</h2>
        <p>This is Navbar Component</p>
    </>
}
export var Banner = ()=>{ // named export
    return <>
        <h2>Banner Component</h2>
        <p>This is Banner Component</p>
    </>
}
export default function Footer(){ // default export
    return <>
        <h2>Footer Component</h2>
        <p>This is Footer Component</p>
    </>
}

// Note that, we can only do one default export but can do multiple named export
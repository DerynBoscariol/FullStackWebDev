export default function Header(){
    //Outside return statement js comments can be used
    //opening paranthesis must always be right beside return
    return(         
    <header id="header">
        {/* This is used within the return statement because you write compenet contents to return in JSX - this comment will be sent with the component */}
        <h2 id="site-name">
            <a href="/">Test Site</a>
        </h2>
    </header>
    )
}
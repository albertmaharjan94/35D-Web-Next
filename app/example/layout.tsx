export default function ExampleLayout(
    { children }: { children: React.ReactNode }) {
    return (
        <section>
            <div>Example Header</div>
            {children}
            <div>Example Footer</div>
        </section>
    );
}


// practice
// make new url
// /practice/user
// Display "User Page"

// /practice/user/profile
// Display "User Profile Page"

// /practice/user/settings
// Display "User Settings Page"

// add layout to practice/user
// On top of the page, display "User Layout Header"
// On bottom of the page, display "User Layout Footer"

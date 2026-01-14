export default function LoginForm() {
    return (
        <div className="mx-auto max-w-md p-4 border">
            <div>
                <label>Email</label>
                <input type="email" />
            </div>
            <div>
                <label>Password</label>
                <input type="password" />
            </div>
            <div>
                <button 
                    className="px-2 py-1 bg-blue-500 text-white rounded" 
                    type="submit">Login</button>
            </div>
        </div>
    );
}
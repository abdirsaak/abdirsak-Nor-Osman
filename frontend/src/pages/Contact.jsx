// --- SVG Icons for Contact Page ---
const MailIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
);

const LinkedinIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);

const InstagramIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
);

const Contact = ({ setPage }) => {
    const contacts = [
        { name: 'Email', value: 'abdirsaknorosman@gmail.com', href: 'mailto:abdirsaknorosman@gmail.com', icon: <MailIcon /> },
        { name: 'LinkedIn', value: 'Connect on LinkedIn', href: 'https://www.linkedin.com/in/abdirsak-nor-6ba44523b/', icon: <LinkedinIcon /> },
        { name: 'Instagram', value: 'Follow on Instagram', href: 'https://www.instagram.com/abdirsaknor/', icon: <InstagramIcon /> },
    ];
    return (
        <div className="w-screen h-screen bg-gray-900 text-white flex flex-col justify-center items-center p-4 font-sans">
             <button onClick={() => setPage('home')} className="text-6xl absolute top-8 left-8 text-orange-400 hover:text-orange-300 transition-colors cursor-pointer">
                &larr; 
            </button>
            <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-2xl p-8">
                 <h1 className="text-4xl font-bold text-center mb-8">Contact Me</h1>
                 <div className="space-y-6">
                     {contacts.map((contact, index) => (
                         <a key={index} href={contact.href} target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors group">
                            <div className="text-orange-400 mr-4">{contact.icon}</div>
                            <div>
                                <p className="font-semibold text-lg">{contact.name}</p>
                                <p className="text-gray-400 group-hover:text-gray-200 transition-colors">{contact.value}</p>
                            </div>
                         </a>
                     ))}
                 </div>
            </div>
        </div>
    );
};


export default Contact;